function TracingGuide(props){

  return (
    <div className={props.caps ? 'guide' : 'guide lowercase'}>
        <div className="topline"></div>
        <div className="midline"></div>
        <div className="baseline"></div>
        <div className="trace">
            {props.value}
            {/* {props.caps} */}
            {/* abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ */}
        </div>
    </div>
  )
}

  export default TracingGuide;