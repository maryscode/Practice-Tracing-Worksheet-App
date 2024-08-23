import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import sticker from '../img/abc-grid.png';
import title from '../img/hello-my-name-is.png';
import './TracingPDF.css';
import quicksandfont from '../fonts/quicksanddashregular-omwv-webfont.woff';
import quicksandfontNormal from '../fonts/Outfit-Bold.ttf';
import kgprimarydots from '../fonts/kgprimarydots-webfont.woff';
// import quicksandfontNormal from '../fonts/Outfit-Bold.ttf';

Font.register({ family: 'quicksanddash', fonts: [
  { src: quicksandfont }, // font-style: normal, font-weight: normal
  { src: quicksandfontNormal, fontWeight: 'bold' },
 ]});

 Font.register({ family: 'kgprimarydots', fonts: [
  { src: kgprimarydots }, // font-style: normal, font-weight: normal
 ]}); 

Font.registerHyphenationCallback(word => {
  // Return entire word as unique part
  return [word];
});

const styles = StyleSheet.create({
  page: { backgroundColor: 'white' },
  // section: { 
  //   color: 'black', 
  //   textAlign: 'center', 
  //   margin: 30
  // },
  header: { 
    color: 'black', 
    textAlign: 'center', 
    position: 'relative',
    height: 300,
    // backgroundColor: 'grey',
    // width: 612,
  },  
  stickerLeft: {
    width: 150,
    height: 150,
    position: 'absolute',
    left: 0,
    top: 45,
    overflow: 'hidden',
    // transform: 'rotate(-15deg)'
  }, 
  stickerRight: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 10,
    top: 45,
    overflow: 'hidden',
    // transform: 'rotate(15deg)'
  },  

  sticker: { 
    width: 1050,
    height: 600,
    position: 'absolute',
    left: '0',
    top: '0',
  },
  title: { 
    position: 'absolute',
    // top: 100,
    left: '50%',
    marginLeft: '-128',
    width: 256
  },  
  titleName: {
    fontFamily: 'quicksanddash',
    fontWeight: 'bold',
    // color: '#20a39e', // teal
    color: '#ffba49', // yellow
    fontSize: 50,
    // textTransform: 'uppercase',
    top: 150,
    width: '100%'
  },

  section: {
    position: 'relative',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 0,
    height: 100,
    overflow: 'hidden'
  },
  capsName: {
    position: 'absolute',
    left: 0,
    color: '#999',
    width: '100%',
    textAlign: 'center',
    
    // ALL CAPS
    fontFamily: 'quicksanddash',
    top: -6,
    fontSize: 83
  },
  lowercaseName: {
    position: 'absolute',
    left: 0,
    color: '#999',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'kgprimarydots',
    top: -10,
    fontSize: 93
  },  
  topline: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 3,
    backgroundColor: '#50c5e6',
    opacity: '.4',
    margin: 0,
    padding: 0
  },
  midline: {
    position: 'absolute',
    top: 31, 
    left: 0,
    width: '100%',
    height: 0,
    opacity: '.1',
    borderTop: '2px dashed #ff5765',
    margin: 0,
    padding: 0
  },
  lowercaseMidline: {
    position: 'absolute',
    top: 30, 
    left: 0,
    width: '100%',
    height: 0,
    opacity: '.1',
    borderTop: '3px dashed #ff5765',
    margin: 0,
    padding: 0
  },  
  btmline: {
    position: 'absolute',
    top: '61px',
    left: 0,
    width: '100%',
    height: 3,
    backgroundColor: '#50c5e6',
    opacity: '.4',
    margin: 0,
    padding: 0
  },
  text: {
    fontFamily: 'Helvetica',
    color: '#ffba49', // yellow
    fontSize: 20
  },
  footer: { 
    position: 'absolute',
    bottom: 10,
    right: 10,
  },  
  footerText: {
    fontFamily: 'Helvetica',
    color: '#ddd', 
    fontSize: 10,
    textAlign: 'right'
  },    
});

// Create Document Component
function TracingPDF(props) {

  let nameStyle = props.useCaps ? styles.capsName : styles.lowercaseName;
  let midlineStyle = props.useCaps ? styles.midline : styles.lowercaseMidline;

  // let letter = props.firstletter;
  // let firstletter = String(letter);
  let stickerPosY;
  let stickerPosX;
  
  switch (props.firstletter) {
    case 'a':
      stickerPosX = 0;
      stickerPosY = 0;
      break;
    case 'b':
      stickerPosX = -150;
      stickerPosY = 0;
      break;
    case 'c':
      stickerPosX = -300;
      stickerPosY = 0;
      break;
    case 'd':
      stickerPosX = -450;
      stickerPosY = 0;
      break;
    case 'e':
      stickerPosX = -600;
      stickerPosY = 0;
      break;
    case 'f':
      stickerPosX = -750;
      stickerPosY = 0;
      break;
    case 'g':
      stickerPosX = -900;
      stickerPosY = 0;
      break;
    case 'h':
      stickerPosX = 0;
      stickerPosY = -150;
      break;
    case 'i':
      stickerPosX = -150;
      stickerPosY = -150;
      break;
    case 'j':
      stickerPosX = -300;
      stickerPosY = -150;
      break;
    case 'k':
      stickerPosX = -450;
      stickerPosY = -150;
      break;
    case 'l':
      stickerPosX = -600;
      stickerPosY = -150;
      break;
    case 'm':
      stickerPosX = -750;
      stickerPosY = -150;
      break;
    case 'n':
      stickerPosX = -900;
      stickerPosY = -150;
      break;      
    case 'o':
      stickerPosX = 0;
      stickerPosY = -300;
      break;
    case 'p':
      stickerPosX = -150;
      stickerPosY = -300;
      break;
    case 'q':
      stickerPosX = -300;
      stickerPosY = -300;
      break;
    case 'r':
      stickerPosX = -450;
      stickerPosY = -300;
      break;
    case 's':
      stickerPosX = -600;
      stickerPosY = -300;
      break;
    case 't':
      stickerPosX = -750;
      stickerPosY = -300;
      break;
    case 'u':
      stickerPosX = -900;
      stickerPosY = -300;
      break;       
    case 'v':
      stickerPosX = 0;
      stickerPosY = -450;
      break;
    case 'w':
      stickerPosX = -150;
      stickerPosY = -450;
      break;
    case 'x':
      stickerPosX = -300;
      stickerPosY = -450;
      break;
    case 'y':
      stickerPosX = -450;
      stickerPosY = -450;
      break;
    case 'z':
      stickerPosX = -600;
      stickerPosY = -450;
      break;      
    default:
      stickerPosX = 0;
      stickerPosY = 0;
    }              
   


  return (  
  <Document pageMode='useNone'>
    <Page size="LETTER" orientation={props.orientation} style={[styles.page, { color: 'white' }]}>
      <View style={[styles.header, { height: (props.orientation === 'portrait') ? '300' : '200'}]}>
        {props.stickerStatus ? 
          <>
            <View style={styles.stickerLeft}>
              <Image src={sticker} style={[styles.sticker, { top: stickerPosY, left: stickerPosX }]} />
            </View> 
            <View style={styles.stickerRight}>
              <Image src={sticker} style={[styles.sticker, { top: stickerPosY, left: stickerPosX }]} />
            </View>  
          </>
          : null
        }
        <Image src={title} style={[styles.title, { top: (props.orientation === 'portrait') ? '100' : '50'}]} />
        <Text style={[styles.titleName, { top: (props.orientation === 'portrait') ? '150' : '100'}]}>{props.name}
        </Text>     
      </View>
      
      <View style={styles.section} wrap={false}>
        <Text style={nameStyle}>{props.name}</Text>
        <View style={styles.topline}></View>
        <View style={midlineStyle}></View>
        <View style={styles.btmline}></View>
      </View>

      {(props.count >= 2) ? 
        <View style={styles.section}>
          <Text style={nameStyle}>{props.name}</Text>
          <View style={styles.topline}></View>
          <View style={midlineStyle}></View>
          <View style={styles.btmline}></View>
        </View>  
      : null}

      {(props.count >= 3) ? 
          <View style={styles.section}>
          <Text style={nameStyle}>{props.name}</Text>
          <View style={styles.topline}></View>
          <View style={midlineStyle}></View>
          <View style={styles.btmline}></View>
        </View>  
      : null}      
      
      {(props.count >= 4) ? 
          <View style={styles.section}>
          <Text style={nameStyle}>{props.name}</Text>
          <View style={styles.topline}></View>
          <View style={midlineStyle}></View>
          <View style={styles.btmline}></View>
        </View>  
      : null} 
     
     <View style={styles.footer} wrap={false}>
        <Text style={styles.footerText}>&copy; PracticeTracing.com</Text>
      </View>     
    </Page>
  </Document>
  );
}

export default TracingPDF;
