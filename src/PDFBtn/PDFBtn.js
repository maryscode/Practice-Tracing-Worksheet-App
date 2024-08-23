import React, {useState, useEffect} from 'react';
import TracingPDF from '../TracingPDF/TracingPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';
import useDebounceCallback from '../hooks/useDebounceCallback';

const PDFBtn = (props) => {
    const [displayName, setDisplayName] = useState("");

    // Debounce hook
    const updateDisplayName = useDebounceCallback(
      (name) => {
        setDisplayName(name);
      },
      1000
    );

    useEffect(() => {
      updateDisplayName(props.name);
    }, [props.name, updateDisplayName]);
    
    
  return (
    <div id="pdfbtn" className="button flexCenter hideprint">
      <PDFDownloadLink document={
        <TracingPDF 
            name={displayName} 
            count={props.repeatCount} 
            orientation={props.orientation} 
            firstletter={displayName ? [...displayName][0].toLowerCase() : 'a'}
            stickerStatus={props.showSticker}
            useCaps={props.useCaps}
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