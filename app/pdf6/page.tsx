"use client";

import React from 'react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  clientDetailsContainer: {
    flexDirection: 'row',
    border: '1px solid black',
  },
  clientDetails: {
    width: '50%',
   
    borderRight: '1px solid black',
  },
  summary: {
    width: '50%',
   
  },
  sectionHeader: {
    backgroundColor: '#354A81',
    color: 'white',
    padding: 5,
    fontSize: 12,
  },
  tableRow: {
    flexDirection: 'row',
    // borderRight: '1px solid black',
    
  },
  tableCell: {
    flex: 1,
    textAlign: 'right',
    padding: 10,
    borderRight: '1px solid black',
  },
  labelCell: {
    flex: 2,
    textAlign: 'left',
    padding: 10,
    borderRight: '1px solid black',
  },
  totalDue: {
    flexDirection: 'row',
    backgroundColor: '#E6EEF7',
    padding: 10,
    fontSize: 12,
    border: '1px solid black',
  },
  totalDueLabel: {
    flex: 1,
    textAlign: 'left',
  },
  totalDueValue: {
    flex: 1,
    textAlign: 'right',
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Client Details and Summary Header */}
      <View style={styles.clientDetailsContainer}>
        <View style={styles.clientDetails}>
          <Text style={styles.sectionHeader}>Client Details</Text>
          <Text>Alexander Reece Thomson LLP</Text>
          <Text>The White House</Text>
          <Text>26 Mortimer Street</Text>
          <Text>London</Text>
          <Text>W1W 7RB</Text>
          <Text>Contact: Nigel Lenson</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.sectionHeader}>Summary of Income and Expenditure</Text>
          {/* Table Rows */}
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>Total Income</Text>
            <Text style={styles.tableCell}>13,458.33</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>Plus VAT</Text>
            <Text style={styles.tableCell}>2,691.67</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>16,150.00</Text>
          </View>
         
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>LESS</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>Total Expenditure</Text>
            <Text style={styles.tableCell}>5,655.00</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>Plus VAT</Text>
            <Text style={styles.tableCell}>1,131.00</Text>
            <Text style={styles.tableCell}>6,786.00</Text>
            <Text style={styles.tableCell}></Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>LESS</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>Management Commission</Text>
            <Text style={styles.tableCell}>800.00</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>Plus VAT</Text>
            <Text style={styles.tableCell}>160.00</Text>
            <Text style={styles.tableCell}>960.00</Text>
            <Text style={styles.tableCell}>7,746.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>Balance</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>8,404.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>LESS</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>Payment on Account</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>1,500.00</Text>
          </View>
        </View>
      </View>
      {/* Total Due */}
      <View style={styles.totalDue}>
        <Text style={styles.totalDueLabel}>TOTAL DUE (£)</Text>
        <Text style={styles.totalDueValue}>6,904.00</Text>
      </View>
    </Page>
  </Document>
);

const App = () => {
  const handleDownload = async () => {
    const blob = await pdf(<MyDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF here</button>
    </div>
  );
};

export default App;
