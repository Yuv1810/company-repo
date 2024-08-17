import { Page, Document, Text, StyleSheet, View, Image} from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
const styles = StyleSheet.create({

    page: {
      padding: 30,
    },
    text: {
      fontSize: 10,
      marginBottom: 10,
    },
    header: {
      width: '100%',
      fontSize: 10,
    },
    table: {
      display: "table",
      width: "auto",
      marginBottom: 100,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#000",
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCol: {
      width: "14.28%",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#000",
    },
    tableCell: {
      fontSize: 8,
      textAlign: "center",
      justifyContent: "center",
      paddingVertical: 5,
      paddingHorizontal: 2,
      backgroundColor: '#153d64',
    },
    tableHeaderRow: {
      backgroundColor: '#153d64',
      color: '#FFFFFF',
      flexDirection: "row",
      width: "100%",
    },
    tableHeaderCol: {
      width: "14.28%",
      borderStyle: "solid",
      backgroundColor: '#153d64',
      borderWidth: 1,
      borderColor: "#000",
    },
    firstcol: {
      width: "20%",
      backgroundColor: '#153d64',
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#000",
    },
    mintableRow: {
      flexDirection: 'row',
      borderColor: "#000",
    },
    smalltableHeaderCol: {
      flex: 1,
      borderStyle: "solid",
      borderTopWidth: 1,
      borderColor: "#000",
    },
    line: {
      width: '100%',
      height: 2,
      backgroundColor: '#000',
      marginTop: 20,
      marginBottom: 10,
    },
    leftText: {
      fontSize: 10,
      textAlign: 'left',
    },
    centerText: {
      fontSize: 10,
      textAlign: 'center',
    },
    rightText: {
      fontSize: 10,
      textAlign: 'right',
    },
    heading: {
      fontSize: 12,
      textAlign: "center",
    },
    container: {
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'space-between',
    },
    headingcontainer: {
      width: "50%",
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
    },
    image: {
      flexDirection: 'row',
      width: 100,
      height: 100, 
      marginLeft: 'auto',
      marginBottom: '10', 
    },
    vies: {
      height: 100,
      width: 100,
    },
    mintableCell:{
      fontSize: 8,
      textAlign: "center",
      justifyContent: "center",
      paddingVertical: 5,
      paddingHorizontal: 2,
      backgroundColor: '#153d64',
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },
    mintableCellAmount: {
        flex: 1,
        borderStyle: "solid",
        borderColor: "#000",
        borderRightWidth: 1,
        borderTopWidth:1,
        borderRightColor: "#000", 
      },
      mintableCellVAT: {
        borderLeftWidth: 1,
        borderLeftColor: "#000", 
      },
  });
  
  export default styles;
  