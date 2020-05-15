import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner'


class App extends React.Component {
    constructor(props) {
     super(props);

     this.state = { lat: null, errorMessage: '' };

    }

   componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }),
        (err) => this.setState({ errorMessage: err.message })
        );      
   }

   state = { lat: null, errorMessage: '' };


    render() {
        
            if (this.state.errorMessage && !this.state.lat){
                return <div>Error: {this.state.errorMessage}</div>
            }

            if(!this.state.errorMessage && this.state.lat){
                return <SeasonDisplay lat={this.state.lat}/>;
            }

            else return <Spinner message= "Please accept location request." />;
       
    }
}



ReactDOM.render(
    <App />, document.querySelector("#root")
);
