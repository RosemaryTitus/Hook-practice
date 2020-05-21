import React, { useState } from "react";

function App() {
  // let time = new Date().toLocaleTimeString();
  // console.log(time);
  // const [count,setCount]=useState(time)
  // function GetTime()
  // {
  //  const v= setInterval(time,1000)
  //   setCount(v);
  // }
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time)
  const [count,setTime]=useState(time)
  function timecount()
  {
    var currentTime = new Date();
  var settime = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    setTime(settime)
  }
     return (
    <div className="container">``
      <h1>{count}</h1>
     <button onClick={timecount}>Get Time</button>
    </div>
  );
}

export default App;
