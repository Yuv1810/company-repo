"use client";
import React from 'react';
import ReactDOM from 'react-dom';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink,Image } from '@react-pdf/renderer';
import footer from '../../public/footer.png';

// Define styles

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    lineHeight: 1.5,
    fontFamily: 'Helvetica',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    margin:'auto',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 10,
    marginLeft:'auto',
    marginRight:'auto'
  },
  companyInfo: {
    textAlign: 'left',
    marginBottom: 20,
  },
  propertyInfo: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    // borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '15%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    padding: 5,
  },
  tableColHeaderWide: {
    width: '40%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    padding: 5,
  },
  tableCol: {
    width: '15%',
    borderStyle: 'solid',
    padding: 5,
  },
  tableColWide: {
    width: '40%',
    borderStyle: 'solid',
    padding: 5,
  },
  footer: {
    marginTop: 20,
    borderTop:1,
    fontSize: 9,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 10,
  },
  contactInfo: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: 10,
  },
  remittanceAdvice: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: 10,
  },
  head:{
    display:'flex',
    margin:'auto',

  },
  contactinformation:{
    flexDirection: 'row',
  justifyContent: 'space-between',
  },
  image: {
    flexDirection: 'row',
    width: 'full',
    height: 100, 
    marginLeft: 'auto',
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.head}>
          <Text style={[styles.title,{fontWeight: 'bold'}]}>Application for Payment</Text>
          <Text style={styles.subtitle}>This is NOT a VAT Invoice</Text>
        </View>
       
      </View>

      <View style={styles.companyInfo}>
          <Text>Alexander Reece Thomson Surveyors Limited</Text>
          <Text>3rd Floor Rear</Text>
          <Text>26 Mortimer Street</Text>
          <Text>London W1W 7RB</Text>
        </View>
      {/* Property Information */}
      <View style={styles.propertyInfo}>
        <View>
        <Text>Property: 26 Mortimer Street, London W1W 7RB</Text>
        <Text>Demise: 3rd Floor Rear</Text>
        </View>
        <View style={{textAlign:'right'}}>
        <Text>Date: 8 December 2022</Text>
        <Text>Application No: 7783</Text>
        <Text>Tenant Ref: 250/01/009</Text>
        </View>
      </View>

      {/* Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>From</Text>
          <Text style={styles.tableColHeader}>To</Text>
          <Text style={styles.tableColHeaderWide}>Description</Text>
          <Text style={styles.tableColHeader}>Net</Text>
          <Text style={styles.tableColHeader}>VAT</Text>
          <Text style={styles.tableColHeader}>Gross</Text>
        </View>

        {/* Row 1 */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>25 Dec 22</Text>
          <Text style={styles.tableCol}>24 Mar 23</Text>
          <Text style={styles.tableColWide}>Quarterly rent in advance</Text>
          <Text style={styles.tableCol}>£3,675.00</Text>
          <Text style={styles.tableCol}>£735.00</Text>
          <Text style={styles.tableCol}>£4,410.00</Text>
        </View>

        {/* Row 2 */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>25 Dec 22</Text>
          <Text style={styles.tableCol}>24 Mar 23</Text>
          <Text style={styles.tableColWide}>End of year balancing credit Dec-22</Text>
          <Text style={styles.tableCol}>£3,675.00</Text>
          <Text style={styles.tableCol}>£125,000.00</Text>
          <Text style={styles.tableCol}>£4,410.00</Text>
        </View>

        {/* Row 3 */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>25 Dec 22</Text>
          <Text style={styles.tableCol}>24 Mar 23</Text>
          <Text style={styles.tableColWide}>Quarterly service charge in advance</Text>
          <Text style={styles.tableCol}>£125,000.00</Text>
          <Text style={styles.tableCol}>£0.00</Text>
          <Text style={styles.tableCol}>£125,000.00</Text>
        </View>

        {/* Row 4 */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>25 Dec 22</Text>
          <Text style={styles.tableCol}>24 Mar 23</Text>
          <Text style={styles.tableColWide}>Annual insurance premium</Text>
          <Text style={styles.tableCol}>£3,675.00</Text>
          <Text style={styles.tableCol}>£735.00</Text>
          <Text style={styles.tableCol}>£4,410.00</Text>
        </View>

        {/* Row 5 */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>29 Sept 23</Text>
          <Text style={styles.tableCol}>24 Dec 24</Text>
          <Text style={styles.tableColWide}>Refund of electricity as an example where more text is required</Text>
          <Text style={styles.tableCol}>£3,675.00</Text>
          <Text style={styles.tableCol}>£735.00</Text>
          <Text style={styles.tableCol}>£4,410.00</Text>
        </View>
      </View>

      {/* Balance Summary */}
      <View style={styles.footer}>
      <View style={styles.tableRow}>
          <Text style={styles.tableCol}></Text>
          <Text style={styles.tableCol}></Text>
          <Text style={styles.tableColWide}>Balance (Total Due)</Text>
          <Text style={styles.tableCol}>£125,000.00</Text>
          <Text style={styles.tableCol}>£12,000.00</Text>
          <Text style={styles.tableCol}>£132,000.00</Text>
        </View>
      </View>
      
      <View style={styles.contactinformation}>
      {/* Contact Information part */}
      <View style={styles.contactInfo}>
        <Text style={{fontWeight:'30'}}>CLIENT</Text>
        <Text>Issued on behalf of:</Text>
        <Text>Anglo Scottish Properties Limited</Text>
        <Text>73 Cornhill, London EC3V 3QQ, United Kingdom</Text>
      </View>

        {/* Contact Information */}
      <View style={styles.contactInfo}>
        <Text style={{fontWeight:'30'}}>CLIENT</Text>
        <Text>For property queries:</Text>
        <Text>DD: 020 7034 3382 / M: 07989 947 584</Text>
        <Text>E: helenmcbride@artsurveyors.co.uk</Text>
        <Text>For accounts queries:</Text>
        <Text>E: salesledger@artsurveyors.co.uk</Text>
      </View>
      </View>

      {/* Remittance Advice */}
      <View style={styles.remittanceAdvice}>
        <Text>REMITTANCE ADVICE 250/01/009 - Alexander Reece Thomson Surveyors Limited</Text>
        <Text>We are unable to accept cash, card or cheque payments.</Text>
        <Text>Please use as payment reference: 250/01/009</Text>
        <Text>Please make electronic payment to:</Text>
        <Text>Bank: Barclays Bank PLC</Text>
        <Text>Account Name: ART LLP Client Account</Text>
        <Text>Sort Code: 20 - 41 - 50</Text>
        <Text>Account No: 238 899 6371</Text>
        <Text>IBAN: GBXXXXXXXXXXXXXX</Text>
      </View>
      {/* {/* <View style={styles.image}> */}
      {/* <Image src="../../footer.png" style={styles.image}></Image> */}
       {/* </View> */} 
    </Page>
  </Document>
);

const App = () => (
  <div>
    <h1>Generated PDF</h1>
  
    <PDFDownloadLink document={<MyDocument />} fileName="application-for-payment.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF here'
      }
    </PDFDownloadLink>
  

    {/* <PDFViewer width="100%" height="600">
      <MyDocument />
    </PDFViewer> */}
  </div>
);

export default App;
