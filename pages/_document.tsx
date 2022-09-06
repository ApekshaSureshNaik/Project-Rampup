// import Document, { Html, Head, Main, NextScript ,DocumentContext, DocumentInitialProps } from 'next/document'

// class MyDocument extends Document {
//  
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps> {
    
//     const initialProps = await Document.getInitialProps(ctx)
    
//     return initialProps
    
//   }
//   render(){
//     return(
//         <Html>
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//           <div id="modal"> </div>
//         </body>
//       </Html>
    
//     )

//   }
 
// }

// export default MyDocument;

import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MainDocument extends Document {
  static getElementById: any;
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/*Below we add the modal wrapper*/}
          <div id="modal"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;