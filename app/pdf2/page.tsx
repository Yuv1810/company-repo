"use client";

import React, { useEffect, useState } from "react";
import { Page, Document, Text, View, Image ,StyleSheet} from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import styles from "../components/ui/Pdf2styles";
import Logo from '../../public/Logo.png'
import NextImage from "../components/ui/Image";

import axios from "axios";




// Define styles


// Sample data
const data = [
  {
    property: "53-55 Bridge Street, Evesham EF14 4RD",
    periods: [
      { period: "01/04/23 - 30/04/23", arrearsBf: 1458.33, demanded: 1458.33, paid: 1458.33, arrearsCf: 0.00, vat: 291.67 },
      { period: "01/05/23 - 31/05/23", arrearsBf: 1458.33, demanded: 1458.33, paid: 0.00, arrearsCf: 1458.33, vat: 291.67 },
      // Add more periods as needed...
    ]
  },
  {
    property: "TMD House, 34 Welbeck Street, W1W 7FD Unit B - Yogahaven",
    periods: [
      { period: "01/04/23 - 30/04/23", arrearsBf: 1666.67, demanded: 1666.67, paid: 0.00, arrearsCf: 1666.67, vat: 333.33 },
      // Add more periods as needed...
    ]
  },
  // Add more properties as needed...
];

// Create Document Component
const MyDocument = () => {
  // Calculate subtotals for each property
  const calculateSubtotals = (periods:any) => {
    return periods.reduce((acc:any, period:any) => {
      acc.arrearsBf += period.arrearsBf;
      acc.demanded += period.demanded;
      acc.paid += period.paid;
      acc.arrearsCf += period.arrearsCf;
      acc.vat += period.vat;
      return acc;
    }, { arrearsBf: 0, demanded: 0, paid: 0, arrearsCf: 0, vat: 0 });
  };

  // Calculate overall total
  const calculateTotal = (data:any) => {
    return data.reduce((acc:any, item:any) => {
      const subtotals = calculateSubtotals(item.periods);
      acc.arrearsBf += subtotals.arrearsBf;
      acc.demanded += subtotals.demanded;
      acc.paid += subtotals.paid;
      acc.arrearsCf += subtotals.arrearsCf;
      acc.vat += subtotals.vat;
      return acc;
    }, { arrearsBf: 0, demanded: 0, paid: 0, arrearsCf: 0, vat: 0 });
  };

  const total = calculateTotal(data);


  return (
    <Document>
      <Page style={styles.page}>
       <View style={styles.table}>
           <View style={styles.tableRow}>
           <View style={styles.firstcol}>
             <Text style={styles.tableCell}>Tenant/Property</Text>
           </View>
           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Period</Text>
           </View>

           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Arrears B/F</Text>
             <View style={styles.mintableRow}>
             <View style={styles.mintableCellAmount}>
             <Text style={styles.tableCell}>Amount</Text>
             </View>
             <View style={styles.smalltableHeaderCol}>
             <Text style={styles.tableCell}>VAT</Text>
             </View>
             </View>
           </View>


           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Demanded</Text>
             <View style={styles.mintableRow}>
             <View style={styles.mintableCellAmount}>
             <Text style={styles.tableCell}>Amount</Text>
             </View>
             <View style={styles.smalltableHeaderCol}>
             <Text style={styles.tableCell}>VAT</Text>
             </View>
             </View>
           </View>


           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Paid</Text>
             <View style={styles.mintableRow}>
             <View style={styles.mintableCellAmount}>
             <Text style={styles.tableCell}>Amount</Text>
             </View>
             <View style={styles.smalltableHeaderCol}>
             <Text style={styles.tableCell}>VAT</Text>
             </View>
             </View>
           </View>


           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Arrears C/F</Text>
             <View style={styles.mintableRow}>
             <View style={styles.mintableCellAmount}>
             <Text style={styles.tableCell}>Amount</Text>
             </View>
             <View style={styles.smalltableHeaderCol}>
             <Text style={styles.tableCell}>VAT</Text>
             </View>
             </View>
           </View>
            </View>

       </View>
      </Page>
    </Document>
  );
};

// Usage example
const MyApp = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="client_statement.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
);

export default MyApp;
