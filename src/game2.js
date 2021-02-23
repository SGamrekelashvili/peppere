import React,{useState,useEffect} from "react"
import ClipLoader from "react-spinners/RingLoader"

export default function Game2() {
  const [html, setter] = useState()
  const [loading, setLoading] = useState(true);


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
      setLoading(false)
    })

  }, []);
  const mystyle = {
    display: "flex",
    justifyContent : "center",
    alignItem: "center",
  };
  return (
    <>
    
      {loading && 
        <div style={mystyle}>
            <ClipLoader color={"lightblue"} loading={loading} size={150} />
            </div>
        }
        {!loading && 
            <div dangerouslySetInnerHTML={{__html: html}} />
        }
        </>
  )
}