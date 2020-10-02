import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const Home = ({}) => {
  
const Button = ({ text, special }) => (
    <View style={special ? styles.specialContainer : styles.container}>
      <Text style={special ? styles.specialText : styles.text}>{text}</Text>
    </View>
  );
  return (
    
    <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.number}>0</Text>
      <Text style={styles.number}>0</Text>
      <Text style={styles.number}>0</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="%" />
        <Button text="x²" />
        <Button text=" ²√x" />
        <Button text="/" />
      </View>
      <View style={styles.row}>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="X" />
      </View>
      <View style={styles.row}>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" />
      </View>
      <View style={styles.row}>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" />
      </View>
      <View style={styles.row}>
        <Button text="0" />
        <Button text="." />
        <Button  text="="  />
      </View>
    </View>
  </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
  },
  bottom: {
    flex: 1,
  },
  number: {
    color: '#424242',
    backgroundColor: '#ffff',
    textAlign: 'right',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#424242',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    ...baseContainer,
  },
  specialContainer: {
    flex: 2,
  },
  text: {
    textAlign: 'center',
    fontSize: 36,
    
  },
});

const baseContainer = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 1,
  borderColor: '#fff',
};

const baseText = {
  fontSize: 36,
};

