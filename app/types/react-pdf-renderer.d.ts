import exp from 'constants';

declare module '@react-pdf/renderer' {
    import * as React from 'react';
  
    export interface Style {
      [key: string]: string | number;
    }
  
    export interface PDFDownloadLinkProps {
      document: React.ReactElement;
      fileName?: string;
      style?: Style;
      children?: (params: { blob: Blob | null; url: string; loading: boolean; error: Error | null }) => React.ReactNode;
    }
  
    export class Document extends React.Component<any, any> {}
    export class Page extends React.Component<any, any> {}
    export class Text extends React.Component<any, any> {}
    export class View extends React.Component<any, any> {}
    export class Image extends React.Component<any,any>{}
    export class TableHeader extends React.Component<any,any>{}
    export class TableCell extends React.Component<any,any>{}
    export class Table extends React.Component<any,any>{}
    export class TableBody extends React.Component<any,any>{}
    export class TableRow extends React.Component<any,any>{}
    export class StyleSheet {
      static create(styles: { [key: string]: Style }): { [key: string]: Style };
    }
  
    export const PDFDownloadLink: React.FC<PDFDownloadLinkProps>;
  }