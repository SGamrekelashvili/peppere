import React,{useState,useEffect} from "react"
import axios from 'axios';

function App() {
  const [html, sethtml] = useState()


  useEffect(() => {
    fetch('https://gis.ge/time/2', {
      mode: 'cors',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': window.location.href
      },
      referrerPolicy: 'origin',
    }).then(res => res.text()).then(data => {
      console.log(data)
      const b = data.time.split("[")
      const c = b[1].split("]")
      const htmlt=c[0]
      sethtml(htmlt)
    }).catch((err) => {
      console.log(err)
    })
    axios.all([
      axios.get(`/time/2`)
      .then(res => {
        const persons = res.data;
        console.log("AXIO " + persons)
        const b = persons.time.split("[")
        const c = b[1].split("]")
        const htmlt=c[0]
        sethtml(htmlt)
      })
    ])
  }, []);

  return (
    <>
    <div dangerouslySetInnerHTML={{__html: html}} />
  </>
  );
}

export default App;
