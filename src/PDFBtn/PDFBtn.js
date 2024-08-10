import React, {useState, useEffect} from 'react';
import TracingPDF from '../TracingPDF/TracingPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

const PDFBtn = (props) => {
    // const [typedname, setTypedname] = useState("");
    const [displayName, setDisplayName] = useState("");
  
    useEffect(() => {
      const timeOutId = setTimeout(() => setDisplayName(props.name), 1000);
      return () => clearTimeout(timeOutId);
    }, [props.name]);
    
    
  return (
    <div id="pdfbtn" className="button flexCenter hideprint">
      <PDFDownloadLink document={
        <TracingPDF 
            name={displayName} 
            count={props.repeatCount} 
            orientation={props.orientation} 
            firstletter={displayName ? [...displayName][0].toLowerCase() : 'a'}
            stickerStatus={props.showSticker}
        />
      } 
        fileName="trace-my-name.pdf" 
        // className={({ loading }) => loading ? 'loading': 'ready'}
      >
        {({ blob, url, loading, error }) =>
          loading ? <span>Loading document...</span> : `GENERATE PDF`
        }
      </PDFDownloadLink>
    </div>
  )
}
export default PDFBtn;