import React, {useState} from 'react';

function LayoutOptions(props){

    const [expand, setExpand] = useState("hide");
    const handleToggle = (e) =>{
      (expand === "show") ? setExpand("hide") : setExpand("show");
    }

    return (
      <div id="options" className={expand}>
          <h3 id="optionsbtn" onClick={handleToggle}>{(expand === 'hide') ? 'View' : '' } Layout Options <span>^</span></h3>

          <div id="count">
            <p className="lrgRed">Repeat 
              <select id="repetition" onChange={props.repeat}>
                <option value="1">1</option>
                <option value="2" selected>2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select> 
              
              <span id="time">Time{props.repeatCount > 1 ? 's': null}</span>
            </p>
          </div>
          <div id="stickeroption">
            <span className="label">Include Graphic?</span>
            <label className="switch">
              <input id="stickertoggle" type="checkbox" defaultChecked onClick={props.toggleSticker} />
              <span className="slider round"></span>
            </label>
          </div> 
          
            <div id="textcase">
            <span className="label">Uppercase Letters Only</span>
            <label className="switch">
              <input id="stickertoggle" type="checkbox" defaultChecked onClick={props.setCaps} />
              <span className="slider round"></span>
            </label>
          </div>
          <select id="orientation" onChange={props.orientation}>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>           
      </div>
    )
  }

  export default LayoutOptions;