import React,{useState,useEffect} from "react"
import axios from 'axios';

function App() {
  const [html, sethtml] = useState()


  useEffect(() => {
    fetch('/time/2').then(res => res.text()).then(data => {
      console.log(data)
      const b = data.time.split("[")
      const c = b[1].split("]")
      const htmlt=c[0]
      sethtml(htmlt)
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <>
    <div dangerouslySetInnerHTML={{__html: html}} />
  </>
  );
}

export default App;
