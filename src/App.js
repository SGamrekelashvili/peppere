import React,{Component} from "react"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      html:null
     };
  }

  componentDidMount(){
        fetch("https://data.fis-ski.com/fis_events/ajax/raceresultsfunctions/details.html?sectorcode=AL&raceid=104374")
        .then(
          (result) => {
            this.setState({
              html: result,
            });
            console.log(result)
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

  render() {
    return (
      <>

      </>
    );
  }
}

export default App;