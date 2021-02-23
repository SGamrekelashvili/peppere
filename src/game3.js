import React,{useState,useEffect} from "react"

function Game3() {
  const [html, setter] = useState()


  useEffect(() => {
    fetch('https://gis.ge/time/104444'
    , {
      mode: 'cors',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': window.location.href,
          "Accept": "*/*",
          "Authorization": "Bearer "
      },
      referrerPolicy: 'origin',
    }
    ).then(res => res.json()).then(data => {
      console.log(data)
      const b = data.time.split("[")
      const c = b[1].split("]")
      const htmlt=c[0]
      setter(htmlt)
    })

  }, []);

  return (
    <>
    <div dangerouslySetInnerHTML={{__html: html}} />
  </>
  );
}

export default Game3;
