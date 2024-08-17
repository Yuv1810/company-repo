// CustomTablePDF.js
"use client";
import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet,Table, TableHeader, TableCell, TableBody, TableRow } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  table: {
    display: 'table',
    width: 'auto',
    margin: '20px 0',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    display: 'table-row',
    flexDirection: 'row',
  },
  fisrtcell:{
    borderStyle: 'solid',
    flex:1,
    borderWidth: 1,
    borderColor: '#000',
    // padding: 8,
    fontSize:8,
    textAlign: 'center',

  },
  cell: {
    borderStyle: 'solid',
    flex:1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    fontSize:8,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#003366',
    color: '#fff',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "10%", // Adjust this percentage according to the total columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColWide: {
    width: "20%", // Example for colSpan=2; Adjust this percentage for wider columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    padding: 5,
    fontSize: 10,
  },
  tableColWide1: {
    width:'40%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
});

// Create a component for the table
const CustomTablePDF = ({ data }:any) => {
  const calculateTotals = (periods:any) => {
    return periods.reduce((acc:any, item:any) => {
      acc.arrearsBF.amount += item.arrearsBF.amount;
      acc.arrearsBF.vat += item.arrearsBF.vat;
      acc.demanded.amount += item.demanded.amount;
      acc.demanded.vat += item.demanded.vat;
      acc.paid.amount += item.paid.amount;
      acc.paid.vat += item.paid.vat;
      acc.arrearsCF.amount += item.arrearsCF.amount;
      acc.arrearsCF.vat += item.arrearsCF.vat;
      return acc;
    }, {
      arrearsBF: { amount: 0, vat: 0 },
      demanded: { amount: 0, vat: 0 },
      paid: { amount: 0, vat: 0 },
      arrearsCF: { amount: 0, vat: 0 },
    });
  };

  const grandTotals = data.reduce((acc:any, item:any) => {
    const itemTotals = calculateTotals(item.periods);
    acc.arrearsBF.amount += itemTotals.arrearsBF.amount;
    acc.arrearsBF.vat += itemTotals.arrearsBF.vat;
    acc.demanded.amount += itemTotals.demanded.amount;
    acc.demanded.vat += itemTotals.demanded.vat;
    acc.paid.amount += itemTotals.paid.amount;
    acc.paid.vat += itemTotals.paid.vat;
    acc.arrearsCF.amount += itemTotals.arrearsCF.amount;
    acc.arrearsCF.vat += itemTotals.arrearsCF.vat;
    return acc;
  }, {
    arrearsBF: { amount: 0, vat: 0 },
    demanded: { amount: 0, vat: 0 },
    paid: { amount: 0, vat: 0 },
    arrearsCF: { amount: 0, vat: 0 },
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.table}>


        <View style={styles.tableRow}>
          <View style={[styles.tableColWide ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Tenant/Property</Text>
          </View>
          <View style={[styles.tableColWide ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Period</Text>
          </View>
          <View style={[styles.tableColWide ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Arrears B/F</Text>
          </View>
          <View style={[styles.tableColWide ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Demanded</Text>
          </View>
          <View style={[styles.tableColWide ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Paid</Text>
          </View>
          <View style={[styles.tableColWide ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Arrears C/F</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={[styles.tableColWide ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}></Text>
          </View>
          <View style={[styles.tableColWide ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}></Text>
          </View>
          <View style={[styles.tableCol ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Amount</Text>
          </View>
          <View style={[styles.tableCol ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>VAT</Text>
          </View>
          <View style={[styles.tableCol ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Amount</Text>
          </View>
          <View style={[styles.tableCol ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>VAT</Text>
          </View>
          <View style={[styles.tableCol ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Amount</Text>
          </View>
          <View style={[styles.tableCol ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>VAT</Text>
          </View>
          <View style={[styles.tableCol ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>Amount</Text>
          </View>
          <View style={[styles.tableCol ,{ backgroundColor: '#203764' }]}>
            <Text style={[styles.tableCell ,{ color: 'white' }]}>VAT</Text>
          </View>
        </View>




       

          {data.map((item:any, index:any) => (
            <React.Fragment key={index}>
              {item.periods.map((periodItem:any, i:any) => (
                <View style={styles.row} key={i}>
                    <View style={styles.tableColWide}>
                  <Text style={styles.tableCell}>{item.property}{item.tenant}</Text>
                  </View>
                  <View style={styles.tableColWide}>
                  <Text style={styles.tableCell}>{periodItem.description}<br/>{periodItem.period}</Text>
                  </View>
                  <View style={styles.tableCol}>

                  <Text style={styles.tableCell}>{periodItem.arrearsBF.amount.toFixed(2)}</Text>
                  </View>
                  <View style={styles.tableCol}>
                  
                  <Text style={styles.tableCell}>{periodItem.arrearsBF.vat.toFixed(2)}</Text>
                  </View>
                  <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{periodItem.demanded.amount.toFixed(2)}</Text>
                  </View>
                  <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{periodItem.demanded.vat.toFixed(2)}</Text>
                  </View>
                  <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{periodItem.paid.amount.toFixed(2)}</Text>
                  </View>
                  <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{periodItem.paid.vat.toFixed(2)}</Text>
                  </View>
                  <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{periodItem.arrearsCF.amount.toFixed(2)}</Text>
                  </View>
                  <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{periodItem.arrearsCF.vat.toFixed(2)}</Text>
                  </View>
                </View>
              ))}
              <View style={styles.row}>
              <View style={styles.tableColWide1}>
                <Text style={[styles.tableCell ,{fontWeight: 'bold'}]}>Sub-total (£)</Text>
                </View>
                
                <View style={styles.tableCol}>
                    <Text style={[styles.tableCell,{fontWeight: 'bold'}]}>{calculateTotals(item.periods).arrearsBF.amount.toFixed(2)}</Text>
                    </View>
                <View style={styles.tableCol}>
                    <Text style={[styles.tableCell,{fontWeight: 'bold'}]}>{calculateTotals(item.periods).arrearsBF.vat.toFixed(2)}</Text>
                    </View>
                <View style={styles.tableCol}>
                    <Text style={[styles.tableCell,{fontWeight: 'bold'}]}>{calculateTotals(item.periods).demanded.amount.toFixed(2)}</Text>
                    </View>
                <View style={styles.tableCol}>
                    <Text style={[styles.tableCell,{fontWeight: 'bold'}]}>{calculateTotals(item.periods).demanded.vat.toFixed(2)}</Text>
                    </View>
                <View style={styles.tableCol}>
                    <Text style={[styles.tableCell,{fontWeight: 'bold'}]}>{calculateTotals(item.periods).paid.amount.toFixed(2)}</Text>
                    </View>
                <View style={styles.tableCol}>
                    <Text style={[styles.tableCell,{fontWeight: 'bold'}]}>{calculateTotals(item.periods).paid.vat.toFixed(2)}</Text>
                    </View>
                <View style={styles.tableCol}>
                    <Text style={[styles.tableCell,{fontWeight: 'bold'}]}>{calculateTotals(item.periods).arrearsCF.amount.toFixed(2)}</Text>
                    </View>
                <View style={styles.tableCol}>
                    <Text style={[styles.tableCell,{fontWeight: 'bold'}]}>{calculateTotals(item.periods).arrearsCF.vat.toFixed(2)}</Text>
                </View>
                </View>
            </React.Fragment>
          ))}
          <View style={styles.row}>

          <View style={styles.tableColWide1}>
                <Text style={[styles.tableCell,{fontWeight: 'bold'}]} >Grand Total (£)</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={[styles.tableCell,{fontWeight: 'bold'}] }>{grandTotals.arrearsBF.amount.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={[styles.tableCell,{fontWeight: 'bold'}] }>{grandTotals.arrearsBF.vat.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={[styles.tableCell,{fontWeight: 'bold'}] }>{grandTotals.demanded.amount.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={[styles.tableCell,{fontWeight: 'bold'}] }>{grandTotals.demanded.vat.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={[styles.tableCell,{fontWeight: 'bold'}] }>{grandTotals.paid.amount.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={[styles.tableCell,{fontWeight: 'bold'}] }>{grandTotals.paid.vat.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={[styles.tableCell,{fontWeight: 'bold'}] }>{grandTotals.arrearsCF.amount.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={[styles.tableCell,{fontWeight: 'bold'}]}>{grandTotals.arrearsCF.vat.toFixed(2)}</Text>
          </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

import { PDFDownloadLink } from '@react-pdf/renderer';


export default function App1(){
    const data = [
        {
          property: "53-55 Bridge Street, Evesham EF14 4RD",
          tenant: "Abdelilah Frindi t/a Pound Plus",
          periods: [
            { description: "Rent Arrears b/f (former agent)", period: "01/04/23 - 30/04/23", arrearsBF: { amount: 1458.33, vat: 291.67 }, demanded: { amount: 1458.33, vat: 291.67 }, paid: { amount: 1458.33, vat: 291.67 }, arrearsCF: { amount: 0.00, vat: 0.00 }},
            { description: "Rent", period: "01/05/23 - 31/05/23", arrearsBF: { amount: 1458.33, vat: 291.67 }, demanded: { amount: 1458.33, vat: 291.67 }, paid: { amount: 0.00, vat: 0.00 }, arrearsCF: { amount: 1458.33, vat: 291.67 }},
            { description: "Rent", period: "01/06/23 - 30/06/23", arrearsBF: { amount: 507.55, vat: 101.51 }, demanded: { amount: 507.55, vat: 101.51 }, paid: { amount: 0.00, vat: 0.00 }, arrearsCF: { amount: 507.55, vat: 101.51 }},
            { description: "Insurance", period: "30/08/22 - 29/08/23", arrearsBF: { amount: 1458.33, vat: 291.67 }, demanded: { amount: 1458.33, vat: 291.67 }, paid: { amount: 0.00, vat: 0.00 }, arrearsCF: { amount: 1458.33, vat: 291.67 }}
          ]
        },
        {
          property: "12-14 High Street, Stratford ST2 7JF",
          tenant: "Jane Doe Ltd",
          periods: [
            { description: "Rent Arrears b/f (former agent)", period: "01/01/23 - 31/01/23", arrearsBF: { amount: 1234.56, vat: 246.91 }, demanded: { amount: 1234.56, vat: 246.91 }, paid: { amount: 1234.56, vat: 246.91 }, arrearsCF: { amount: 0.00, vat: 0.00 }},
            { description: "Rent", period: "01/02/23 - 28/02/23", arrearsBF: { amount: 1234.56, vat: 246.91 }, demanded: { amount: 1234.56, vat: 246.91 }, paid: { amount: 1234.56, vat: 246.91 }, arrearsCF: { amount: 0.00, vat: 0.00 }},
            { description: "Insurance", period: "01/01/23 - 31/12/23", arrearsBF: { amount: 1234.56, vat: 246.91 }, demanded: { amount: 1234.56, vat: 246.91 }, paid: { amount: 1234.56, vat: 246.91 }, arrearsCF: { amount: 0.00, vat: 0.00 }}
          ]
        }
      ];
    return(
        <div>
            <h1>Generated PDF</h1>
       {/* <button className='bg-blue-200 h-10 w-40' onClick={}> */}
        <PDFDownloadLink
          document={<CustomTablePDF data={data} />}
          fileName="table-report.pdf"
        >
          {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
        {/* </button> */}
      </div>

    )

}

// export default App;
