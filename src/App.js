import React from "react";

import "react-table/react-table.css";
import Barx from "./Components/Barx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.ws = new WebSocket("ws://127.0.0.1:8888/");
  }

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("Opened Connection!");
    };

    this.ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);

      this.setState((prevstate) => {
        console.log("Prevvvv", prevstate);

        return { data: [...prevstate.data, newData] };
      });
    };
  }

  render() {
    this.ws.onclose = () => {
      console.log("Closed Connection!");
    };

    console.log("From app");
    console.log(this.state);
    return (
      <div className="App">
        <Barx value={this.state.data} />
      </div>
    );
  }
}

export default App;
