import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basicMonthly: 0,
      basicYearly: 0,
      hraYearly: 0,
      hraMonthly: 0,
      pfYearly: 0,
      pfMonthly: 0,
      statYearly: 0,
      statMontly: 0,
      gratuetyYearly: 0,
      gratuetyMonthly: 0,
      otherallowencesYearly: 0,
      otherallowencesMonthly: 0,
      text: parseInt('')
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput = (text) => {
    const pf = text * 12 / 100;
    const pf_monthly = pf / 12;
    const basic = text * 50 / 100;
    const basic_monthly = basic / 12;
    const hra = text * 20 / 100;
    const hra_monthly = hra / 12;
    const stat = text * 8.33 / 100;
    const stat_monthly = stat / 12;
    const gratuety = text * 4.8 / 100;
    const gratuety_monthly = gratuety / 12;
    const otherallowences = text * 4.87 / 100;
    const otherallowences_monthly = otherallowences / 12;

    this.setState({
      basicYearly: basic,
      basicMonthly: basic_monthly,
      pfYearly: pf,
      pfMonthly: pf_monthly,
      hraYearly: hra,
      hraMonthly: hra_monthly,
      statYearly: stat,
      statMontly: stat_monthly,
      gratuetyYearly: gratuety,
      gratuetyMonthly: gratuety_monthly,
      otherallowencesYearly: otherallowences,
      otherallowencesMonthly: otherallowences_monthly
    })
  }

  render() {
    return (
      <View >
        <TextInput placeholder='Enter Salary' onChangeText={this.handleInput} value={this.state.text} style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
        <View style={styles.View}>
          <View><Text style={styles.textcolor}>components</Text>
            <Text>Basic:</Text>
            <Text>HRA:</Text>
            <Text>PF:</Text>
            <Text>Stat:</Text>
            <Text>Gratuety:</Text>
            <Text>other allowences:</Text>
          </View>
          <View>
            <Text style={styles.textcolor}>Yearly</Text>
            <Text>{this.state.basicYearly}</Text>
            <Text>{this.state.hraYearly}</Text>
            <Text>{this.state.pfYearly}</Text>
            <Text>{this.state.statYearly}</Text>
            <Text>{this.state.gratuetyYearly}</Text>
            <Text>{this.state.otherallowencesYearly}</Text>
          </View>
          <View>
            <Text style={styles.textcolor}>Montly</Text>
            <Text>{this.state.basicMonthly}</Text>
            <Text>{this.state.hraMonthly}</Text>
            <Text>{this.state.pfMonthly}</Text>
            <Text>{this.state.statMontly}</Text>
            <Text>{this.state.gratuetyMonthly}</Text>
            <Text>{this.state.otherallowencesMonthly}</Text>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  color: {
    color: 'black'
  },
  View:{
     flexDirection: 'row',
      justifyContent: 'space-between' 
  }
});

export default App;