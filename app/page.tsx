"use client";

import React, { useEffect, useState } from "react";
import { Page, Document, Text, View, Image } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Logo from '../public/Logo.png';
import NextImage from './components/ui/Image';
import styles from "./components/ui/Pdfstyles";
import axios from "axios";

// Define an interface for the props
interface PDFFileProps {
  pdfData: any;
}

// Use the interface in the PDFFile component
const PDFFile: React.FC<PDFFileProps> = ({ pdfData }) => {




  const data = [
    { tenant: "Tenant A", year: "2024", month: "Q1", chaseNumber: "12345", date: "2024-01-01", type: "Type A", comment: "All good" },
    { tenant: "Tenant A", year: "2024", month: "Q2", chaseNumber: "67890", date: "2024-04-01", type: "Type B", comment: "Follow up needed" },
    { tenant: "Tenant B", year: "2024", month: "Q1", chaseNumber: "54321", date: "2024-01-15", type: "Type A", comment: "No response" },
  ];


  var d= pdfData ? pdfData : [];
  // console.log(pdfData.data[1].attributes);
  let currentTenant: any = null;

  return (
    <Document>
      <Page style={styles.page}>
      <View style={styles.image}>
         <Image src='/Logo.png' style={styles.image}></Image>
       </View>

       <View style={styles.headingcontainer}>
         <Text style={styles.heading}>ALEXANDER REECE THOMSON PROPERTY MANAGEMENT SERVICES [ARTMS] RENT & SERVICE CHARGE
STATEMENT OF ARREARS CHASING
           16-Apr-24</Text>
       </View>


    {  d.map((e:any)=>{
      console.log('-------------------');
      
    console.log(e.attributes.name ? e.attributes.name : " ");
    console.log(e.attributes.address.address);
    console.log('-------------------');

    return(
      <>
       <View style={styles.line} />

       <View style={styles.container}>
         <Text style={styles.leftText}>Property</Text>
         <Text style={styles.centerText}>{e.attributes.address ? e.attributes.address.address : ''}</Text>
         <Text style={styles.rightText}></Text>
       </View>
       <View style={styles.container}>
         <Text style={styles.leftText}>Client</Text>
         <Text style={styles.centerText}>{e.attributes.name ? e.attributes.name : " "}</Text>
         <Text style={styles.rightText}></Text>
       </View>

       <View style={styles.table}>
         <View style={styles.tableHeaderRow}>
           <View style={styles.firstcol}>
             <Text style={styles.tableCell}>Tenant</Text>
           </View>
           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Year</Text>
           </View>
           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Month/Quarter</Text>
           </View>
           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Chase Number</Text>
           </View>
           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Date of Chase</Text>
           </View>
           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Type of Chase</Text>
           </View>
           <View style={styles.tableHeaderCol}>
             <Text style={styles.tableCell}>Comment</Text>
           </View>
         </View>

         {data.map((item, index) => {
           const showTenant = item.tenant !== currentTenant;
           if (showTenant) {
             currentTenant = item.tenant;
           }

           return (
             <View style={styles.tableRow} key={index}>
               <View style={styles.firstcol}>
                 <Text style={styles.tableCell}>{showTenant ? item.tenant : ''}</Text>
               </View>
               <View style={styles.tableCol}>
                 <Text style={styles.tableCell}>{item.year}</Text>
               </View>
               <View style={styles.tableCol}>
                 <Text style={styles.tableCell}>{item.month}</Text>
               </View>
               <View style={styles.tableCol}>
                 <Text style={styles.tableCell}>{item.chaseNumber}</Text>
               </View>
               <View style={styles.tableCol}>
                 <Text style={styles.tableCell}>{item.date}</Text>
               </View>
               <View style={styles.tableCol}>
                 <Text style={styles.tableCell}>{item.type}</Text>
               </View>
               <View style={styles.tableCol}>
                 <Text style={styles.tableCell}>{item.comment}</Text>
               </View>
             </View>
           );
         })}

       </View>


      </>
    )
  })
}

      </Page>
    </Document>
  );
};

export default function Home() {
  const [pdfData, setPdfData] = useState<any>(null);

  async function fetchdata() {
    try {
      const response = await axios.get('https://property-admin.innovaciotech.com/api/owners', {
        params: {
          populate: "*",
        }
      });

      // const firstClientdata = response.data.data[0].attributes;
      // console.log("First Client Data:", firstClientdata);
console.log("Response from server",response)
      setPdfData(response.data.data);
    } catch (error: any) {
      console.error('Error fetching data:', error.response || error.message);
    }
  }

  useEffect(()=>{
    fetchdata();

  },[]);

 

  return (
    <>
      <h1>PDF Downloader here</h1>
      <NextImage alt="test" src={Logo} width={20} height={20} />
      <button className="w-40 h-20 bg-blue-200">
        {/* {pdfData && ( */}
          <PDFDownloadLink document={<PDFFile pdfData={pdfData} />} fileName="mypdf.pdf">
            {({ loading }) =>
              loading ? 'Loading document...' : 'Download PDF'
            }
          </PDFDownloadLink>
        {/* )
        } */}
      </button>
    </>
  );
}
