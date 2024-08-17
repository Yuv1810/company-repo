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
    fontSize: 12,
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 40,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "14.28%",
    borderStyle: "solid",
    borderWidth: 0,
    borderColor: "#000",
    padding: 2,
  },
  tableCell: {
    fontSize: 10,
    alignItems: "center",
  },
  tableHeaderRow: {
    backgroundColor: '#153d64',
    color: '#FFFFFF',
    flexDirection: "row",
    width: "100%",
    padding: 2,
  },
  tableHeaderCol: {
    width: "14.28%",
    padding: 2,
  },
  firstcol: {
    width: "20%",
    padding: 2,
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
    marginBottom: 10,
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
  image:{
    flexDirection: 'row',
    width: 100, // Set the width of the image
    height: 100, 
    marginLeft: 'auto',
    marginBottom:'10' 
  },
  vies:{
    height: 100,
    width:100
  }
});


export default styles;