import 'react-app-polyfill/stable';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import './styles/mobile.scss';
import sticker from './img/abc-grid.png';
import close from './img/icon-close.png';
import help from './img/icon-help.png';
// import LayoutOptions from './LayoutOptions/LayoutOptions';
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
  // const [showSticker, setSticker] = useState(true); 
  // const [orientation, setOrientation] = useState('portrait');
  const [tooltip, setTooltip] = useState(true); 
  const [useCaps, setCaps] = useState(true); 
  const [showInfo, setInfo] = useState(false); 
  const [repeatCount, setRepeatcount] = useState(2);
  const [traceArray, setTraceArray] = useState([1,2]);
  
  const [isAddDisabled, setIsAddDisabled] = useState(false);
  const [isSubtractDisabled, setIsSubtractDisabled] = useState(false);


  const areAllLettersCaps = (inputString) => {
    // Remove non-letter characters and check if the remaining string is all uppercase
    const lettersOnly = inputString.replace(/[^a-zA-Z]/g, '');
    return lettersOnly === lettersOnly.toUpperCase() && lettersOnly !== '';
  }

  const handleInputName = (e) => {
    let name = e.target.value;
    setName(name)
    setTooltip(false);

    if (areAllLettersCaps(name)){
      setCaps(true); 
    } else {
      setCaps(false); 
    }
  }
  
  // LAYOUT OPTIONS
  // const handleToggle = (e) => {
  //   if (e.target.checked === true){
  //       setSticker(true);
  //   } else {
  //       setSticker(false);
  //   }
  // }
  // const handleCaps = (e) => {
  //   if (e.target.checked === true){
  //       setCaps(true);
  //   } else {
  //       setCaps(false);
  //   }
  // }

  const handleRepeat = (e) => {
    let count = +e.target.value;
    let testArray = Array(count).fill(null);
    setRepeatcount(count);
    setTraceArray(testArray)
  } 
  // const handleOrientation = (e) => {
  //   let newOrientation = e.target.value;
  //   setOrientation(newOrientation);
  // }   
  const handleInfo = (e) => {
    (showInfo) ? setInfo(false) : setInfo(true);
  }

  const handleAdd = (e) => {
    setIsSubtractDisabled(false)
   
    // console.log('repeatCount at time of clicked: ', repeatCount);
    
    if (repeatCount < 4 ){
      setRepeatcount(repeatCount + 1);
      setTraceArray(Array(repeatCount + 1).fill(null))    
    }
    if (repeatCount === 3) {
      setIsAddDisabled(true)
    }
  }

  const handleSubtract = (e) => {
    setIsAddDisabled(false)
    if (repeatCount - 1 === 1 ){
      setIsSubtractDisabled(true)
    }

    if (repeatCount > 1 ){
      setRepeatcount(repeatCount - 1);
      setTraceArray(Array(repeatCount - 1).fill(null))    
    } else {
      setIsSubtractDisabled(true)
    }
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
            <li>To add or remove lines, click on the +/- icons (4 lines max)</li>
            {/* <li>Customize your worksheet by expanding the <span className="nobreak">"View Layout Options"</span> bottom tab. Edit repeat count, graphic on/off, and PDF orientation</li> */}
            <li>Click on the "Generate PDF" button to download the PDF</li>
            <li>Print the PDF from your computer</li>
          </ol>

          <h3 className='small'>Tips</h3>
          <p className="small">It is recommended to start with 1 or 2 lines to help your little one build confidence. Worksheets can be saved as PDFs for printing, reused in a sheet protector for use with dry-erase markers, or downloaded on an iPad as a GoodNotes template. Encourage letter writing by using names of friends, family, and favorite characters. </p>          
          <p>Have Fun!</p>
          {/* <p className='small'>Request new tools by emailing contact@printabletracing.com</p> */}
        </div>
      </header>


      <div id='navigation' className='hideprint'>
        {showInfo ? 
          <img src={close} alt="Close icon" onClick={handleInfo} id="close-icon" className="icon" />
          :
          <img src={help} alt="Info icon" onClick={handleInfo} id="info-icon" className="icon" />
        }
      </div>
      
      {/* <main className={orientation}> */}
      <main className='portrait'>
        
        <header id="worksheetheader">
          {/* { showSticker ? <StickerLeft className={name ? [...name][0].toLowerCase() : null} /> : null } */}
          <StickerLeft className={name ? [...name][0].toLowerCase() : null} />
          <div id="titlecontainer">
            <CurvedTitle />
            <input 
              id="textinput" 
              type="text" 
              placeholder="Type Name Here..." 
              onChange={handleInputName}
            />     
            {/* <small className='hideprint'>*All caps converts to a different font.</small> */}
            <div className={`tooltip ${tooltip ? 'show' : 'hide'}`}>Start typing name here!</div>
          </div>

          {/* { showSticker ? <StickerRight className={name ? [...name][0].toLowerCase() : null} /> : null } */}
          <StickerRight className={name ? [...name][0].toLowerCase() : null} />
        </header>
        <div id='container_guides'>
          {tracingGuides} 
          <button 
            className="addBtn" 
            onClick={handleAdd} 
            disabled={isAddDisabled}
          >+</button>
          <button 
            className="subtractBtn" 
            onClick={handleSubtract} 
            disabled={isSubtractDisabled}
          >-</button>
        </div>
        
        
        <PDFBtn
          name={name}
          repeatCount={repeatCount}
          repeat={handleRepeat}
          // showSticker={showSticker}
          showSticker={true}
          // orientation={orientation}
          orientation='portrait'
          useCaps={useCaps}
        />

        {/* <LayoutOptions
          repeatCount={repeatCount}
          repeat={handleRepeat}
          toggleSticker={handleToggle}
          setCaps={handleCaps}
          orientation={handleOrientation}
        /> */}


        
      </main>

      {/* DEBUG */}

      {/* <PDFViewer>
        <TracingPDF 
          name={name} 
          count={repeatCount} 
          orientation={orientation} 
          firstletter={name ? [...name][0].toLowerCase() : 'a'} 
          stickerStatus={showSticker}
          useCaps={useCaps}
        />
      </PDFViewer>       */}

      {/* <div className={`${orientation} donateform container hideprint`}> */}
      <div className={`portrait donateform container hideprint`}>
          <h2>About</h2>
          <p className='text-left'>PracticeTracing.com is a free and simple online tool that generates custom name tracing PDF worksheets. Intended for parents and teachers who want to help children become familiar with writing their names. Check back later for more helpful tools!</p>

          <p>Built by <a href="https://internetmary.com/" target="_blank" rel="noreferrer" style={{'color' : 'white'}}>Mary Chan</a> &mdash; a mom who likes to code. Enjoy!</p>
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
        

        &copy; 2022-2024 PracticeTracing.com | Email: contact@practicetracing.com | Image by <a href="https://www.freepik.com/free-vector/hand-drawn-adorable-fruit-collection_4188062.htm#query=kawaii%20cartoon%20fruit&position=6&from_view=search&track=sph">Freepik</a>
      </div>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Worksheet />);