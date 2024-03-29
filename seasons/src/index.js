import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

  state = {
    lat: undefined,
    errorMessage: ''
 };
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  
  componentDidUpdate() {
    //console.log("My component was just updated - it rerendered!");
  }
  
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: { this.state.errorMessage }</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={ this.state.lat } />
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));