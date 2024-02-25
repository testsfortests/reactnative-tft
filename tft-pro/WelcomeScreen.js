import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { google } from 'googleapis';
const sheets = google.sheets('v4');

const WelcomeScreen = ({ route }) => {
  const { userName } = route.params;
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const fetchDataFromGoogleSheets = async () => {
      try {
        const auth = new google.auth.GoogleAuth({
          keyFile: './credentials.json',
          scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });
        const client = await auth.getClient();
        const spreadsheetId = '14PY1yNdKIImeoKPikhH9RNMcLrD8WK7tev8CjEre51I';
        const range = 'SHEET2!A1:G17';

        const response = await sheets.spreadsheets.values.get({
          auth: client,
          spreadsheetId,
          range,
        });

        const rows = response.data.values;
        setSheetData(rows || []);
      } catch (err) {
        console.error('Error fetching data from Google Sheets:', err);
      }
    };

    fetchDataFromGoogleSheets();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi, {userName}!</Text>
      <View>
        {sheetData.map((row, index) => (
          <Text key={index}>{JSON.stringify(row)}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
