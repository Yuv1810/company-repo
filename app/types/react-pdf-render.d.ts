declare module '@react-pdf/render' {
    const content: any;
    export default content;
  }
  declare module '@react-pdf/render' {
    export function PDFRenderer(): any;
    export function Document(props: any): any;
    export function Page(props: any): any;
    // Add more specific types as needed
  }