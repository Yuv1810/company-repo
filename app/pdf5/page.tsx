"use client"
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontSize: 9,
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCellHeader: {
    backgroundColor: '#222b35',
    color: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#222b35',
    padding: 3,
    fontSize: 10,
    textAlign: 'center',
  },
  tableCell: {
    borderStyle: 'solid',
    borderRight: 1,
    borderTop: 1,
    borderColor: '#222b35',
    padding: 3,
    fontSize: 9,
    paddingTop:6,
    paddingBottom:6,
  },
  textRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  subtotal: {
    flexDirection: 'row',
    fontWeight: 'bold',
    padding: 3,
    backgroundColor: '#E0E0E0',
  },
  total: {
    flexDirection: 'row',
    fontWeight: 'bold',
    padding: 3,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCellHeader, { width: '35%' }]}>Tenant/Property</Text>
          <Text style={[styles.tableCellHeader, { width: '10%' }]}>Invoice Date</Text>
          <Text style={[styles.tableCellHeader, { width: '15%' }]}>Supplier</Text>
          <Text style={[styles.tableCellHeader, { width: '20%' }]}>Details of Expenditure</Text>
          <Text style={[styles.tableCellHeader, { width: '10%' }]}>Amount</Text>
          <Text style={[styles.tableCellHeader, { width: '10%' }]}>VAT</Text>
        </View>

        {/* First Row Group */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: '35%' }]}>
            53-55 Bridge Street, Evesham EF14 4RD {"\n"} Abdelilah Frindi t/a Pound Plus
          </Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>
            24.04.24 {"\n"} 23.05.23 {"\n"} 03.06.23 {"\n"} 05.07.24
          </Text>
          <Text style={[styles.tableCell, { width: '15%' }]}>
            ABC Roofing {"\n"} EDF Energy {"\n"} XYZ Limited {"\n"} Other Business
          </Text>
          <Text style={[styles.tableCell, { width: '20%' }]}>
            Roof repairs {"\n"} Utilities (Gas) {"\n"} Handyman services - clearing a blocked drain {"\n"} Cleaning of common parts
          </Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>
            1,000.00 {"\n"} 500.00 {"\n"} 2,500.00 {"\n"} 500.00
          </Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>
            200.00 {"\n"} 100.00 {"\n"} 500.00 {"\n"} 0.00
          </Text>
        </View>

        {/* Subtotal for First Row Group */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: '80%', textAlign: 'right', paddingRight: 5 }]}>
            Sub-total (£)
          </Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>4,500.00</Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>800.00</Text>
        </View>

        {/* Second Row Group */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: '35%' }]}>
            TMD House, 34 Welbeck Street, W1W 7FD {"\n"} Unit B - Yogahaven
          </Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>
            24.04.24 {"\n"} 23.05.23 {"\n"} 03.06.23 {"\n"} 05.07.24
          </Text>
          <Text style={[styles.tableCell, { width: '15%' }]}>
            ABC Roofing {"\n"} EDF Energy {"\n"} XYZ Limited {"\n"} Other Business
          </Text>
          <Text style={[styles.tableCell, { width: '20%' }]}>
            Roof repairs {"\n"} Utilities (Gas) {"\n"} Handyman services - clearing a blocked drain {"\n"} Cleaning of common parts
          </Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>
            100.00 {"\n"} 355.00 {"\n"} 200.00 {"\n"} 500.00
          </Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>
            20.00 {"\n"} 71.00 {"\n"} 40.00 {"\n"} 0.00
          </Text>
        </View>

        {/* Subtotal for Second Row Group */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: '80%', textAlign: 'right', paddingRight: 5 }]}>
            Sub-total (£)
          </Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>1,155.00</Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%' }]}>131.00</Text>
        </View>

        {/* Total */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: '80%', textAlign: 'right', paddingRight: 5, backgroundColor: '#d8e1f1' }]}>
            TOTAL
          </Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%', backgroundColor: '#d8e1f1' }]}>5,655.00</Text>
          <Text style={[styles.tableCell, styles.textRight, { width: '10%', backgroundColor: '#d8e1f1' }]}>931.00</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// Render the PDFDownloadLink
const MyApp = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="report.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  </div>
);

export default MyApp;
