import React,{useState,useEffect} from "react"
import ReactDOM from 'react-dom';

function App() {
  const [html, sethtml] = useState()


  useEffect(() => {
    fetch('/time/2').then(res => res.json()).then(data => {
      const b = data.time.split("[")
      const c = b[1].split("]")
      const htmlt=c[0]
      sethtml(htmlt)
    }).error(
      console.log("ERROR")
    );
  }, []);

  return (
    <div dangerouslySetInnerHTML={{__html: html}} />
  );
}

export default App;
