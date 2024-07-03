import 'react-app-polyfill/stable';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/mobile.scss';
import sticker from './img/abc-grid.png';
import close from './img/icon-close.png';
import help from './img/icon-help.png';
import LayoutOptions from './LayoutOptions/LayoutOptions';
import TracingGuide from './TracingGuide/TracingGuide';
import CurvedTitle from './CurvedTitle/CurvedTitle';
import PDFBtn from './PDFBtn/PDFBtn';
import TagManager from 'react-gtm-module';

// DEBUG
// import TracingPDF from './TracingPDF/TracingPDF';
// import { PDFViewer } from '@react-pdf/renderer';

const tagManagerArgs = {
  gtmId: 'GTM-TFWMMWS'
}

TagManager.initialize(tagManagerArgs)


function StickerRight(props){
  return (
    <div id="stickerright" className={props.className}>
      <img src={sticker} alt='Letter' />
    </div>
  )
}
function StickerLeft(props){
  return (
    <div id="stickerleft" className={props.className}>
      <img src={sticker} alt='Letter' />
    </div>
  )
}


function Worksheet() {
  const [name, setName] = useState("");
  const [showSticker, setSticker] = useState(true); 
  const [useCaps, setCaps] = useState(true); 
  const [showInfo, setInfo] = useState(false); 
  const [repeatCount, setRepeatcount] = useState(2);
  const [traceArray, setTraceArray] = useState([1,2]);
  const [orientation, setOrientation] = useState('portrait');


  const handleToggle = (e) => {
    if (e.target.checked === true){
        setSticker(true);
    } else {
        setSticker(false);
    }
  }
  const handleCaps = (e) => {
    if (e.target.checked === true){
        setCaps(true);
    } else {
        setCaps(false);
    }
  }
  const handleRepeat = (e) => {
    let count = +e.target.value;
    let testArray = Array(count).fill(null);
    setRepeatcount(count);
    setTraceArray(testArray)
  } 
  const handleOrientation = (e) => {
    let newOrientation = e.target.value;
    setOrientation(newOrientation);
  }   
  const handleInfo = (e) => {
    (showInfo) ? setInfo(false) : setInfo(true);
  }
  const tracingGuides = traceArray.map((sq, i) => { 
    return (
      <TracingGuide value={name ? name : ""} key={i} caps={useCaps} />
    );
  })

  return (
    <div id="pagecontainer">
      <header id="info" className={showInfo ? 'show' : 'hide'}>
        <h1>Trace My Name <span>Printable Tracing Worksheets for Kids</span></h1>
        <div>
          <h3>Instructions</h3>
          <ol>
            <li>Type name in the text field</li>
            <li>Customize your worksheet by expanding the <span className="nobreak">"View Layout Options"</span> bottom tab. Edit repeat count, graphic on/off, and PDF orientation</li>
            <li>Click on the "Generate PDF" button to download the PDF</li>
            <li>Print the PDF from your computer</li>
          </ol>

          <h3 className='small'>Tips</h3>
          <p className="small">It is recommended to start with 1 or 2 lines to help your little one build confidence. Worksheets can be saved as PDFs for printing, reused in a sheet protector for use with dry-erase markers, or downloaded on an iPad as a GoodNotes template. Encourage letter writing by using names of friends, family, and favorite characters. </p>          

          <p className='small'>Request new tools by emailing contact@printabletracing.com</p>
        </div>
      </header>


      <div id='navigation' className='hideprint'>
        {showInfo ? 
          <img src={close} alt="Close icon" onClick={handleInfo} id="close-icon" className="icon" />
          :
          <img src={help} alt="Info icon" onClick={handleInfo} id="info-icon" className="icon" />
        }
      </div>
      
      <main className={orientation}>
        <header id="worksheetheader">
          { showSticker ? <StickerLeft className={name ? [...name][0].toLowerCase() : null} /> : null }
          <div id="titlecontainer">
            <CurvedTitle />
            <input 
              id="textinput" 
              type="text" 
              placeholder="Enter Name Here" 
              onChange={(e) => setName(e.target.value)}
            />     
                   <small className='hideprint'>*Converts to uppercase</small>
          </div>

          { showSticker ? <StickerRight className={name ? [...name][0].toLowerCase() : null} /> : null }
        </header>

        <div id='container_guides'>
          {tracingGuides}
        </div>
        <PDFBtn
          name={name}
          repeatCount={repeatCount}
          repeat={handleRepeat}
          showSticker={showSticker}
          orientation={orientation}
        />

        <LayoutOptions
          repeatCount={repeatCount}
          repeat={handleRepeat}
          toggleSticker={handleToggle}
          setCaps={handleCaps}
          orientation={handleOrientation}
        />


        
      </main>

      {/* DEBUG */}

      {/* <PDFViewer>
        <TracingPDF 
          name={name} 
          count={repeatCount} 
          orientation={orientation} 
          firstletter={name ? [...name][0].toLowerCase() : 'a'} 
          stickerStatus={showSticker}
        />
      </PDFViewer>       */}

      <div className={`${orientation} donateform container hideprint`}>
      
          <h2>About</h2>
          <p className='text-left'>PrintableTracing.com is a free and simple online tool that generates custom name tracing PDF worksheets.  Intended for parents and teachers who want to help children become familiar with writing their names. This worksheet supports capital letters only. Check back later for more helpful tools!</p>
          <p>This site is fueled by coffee and your donations. <br /> Built by Mary &mdash; a mom who likes to code. Enjoy!</p>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="business" value="33JCAY8UGSUK8" />
              <input type="hidden" name="no_recurring" value="1" />
              <input type="hidden" name="item_name" value="PrintableTracing is a nonprofit site supported by parents & educators like you! Your donation will help fund more useful tools." />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>      
        </div>
      <div className="credits hideprint">
        

        &copy; 2022-2024 PrintableTracing.com | Email: contact@printabletracing.com | Image by <a href="https://www.freepik.com/free-vector/hand-drawn-adorable-fruit-collection_4188062.htm#query=kawaii%20cartoon%20fruit&position=6&from_view=search&track=sph">Freepik</a>
      </div>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Worksheet />);