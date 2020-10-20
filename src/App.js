import React from "react";
import Heythere from "heythere";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Heythere />
        <h1>Hello {name}</h1>
      </>
    );
  }
}

export default App;
