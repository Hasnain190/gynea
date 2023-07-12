import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Platform } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useDateCalculator } from './src/useDateCalculator';



const App = () => {
  const { date, EDD, DOP, setDate } = useDateCalculator(new Date)
  const [show, setShow] = useState(false);
  const onChange = (_event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDate = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date",

    });
  }

  return (
    <SafeAreaView>
      <View style={styles.screenContainer}>
        <Text style={styles.logo}>MiniGynea</Text>
        <View style={styles.container}>
          <Text style={styles.heading}>Date of Last Menstrual Period</Text>
          <View>
            <Button onPress={showDate} title="Select date" />

            <Text>LMP: {date.toISOString().split("T")[0]}</Text>

          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.heading}>Expected Date of Delivery</Text>
          <Text style={styles.dateContainer}>{EDD}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.heading}>Duration of Pregnancy </Text>
          <Text style={styles.dateContainer}>{`${DOP.weeks} weeks ${DOP.days} days`}</Text>
        </View>
        <Text style={styles.description}>Calculate the Expected Date of Delivery and Duration of Pregnancy. Just enter the date and it will automatically calculate the date and duration</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    top: 30,
  },

  logo: {
    fontSize: 25,
  },

  container: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
  },
  dateContainer: {
    fontSize: 30,
    color: 'green',
    margin: 10,
  },
  description: {
    display: "flex",
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20

  }
});


export default App;
