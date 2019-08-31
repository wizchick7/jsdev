import React from 'react';
// ReactDom is used to interface with the browser
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 42
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  }
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return (
      <h2>Hello Class Components -- { this.state.answer }</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
