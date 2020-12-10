const { Component } = require("react");

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: ''
    }
  }

  componentDidCatch(error, info) {
    console.log('error')
    this.setState({hasError: true, error: error})
  }

  render() {
    return this.state.hasError ?
      <h1>Opps, there is an error... {}</h1> :
      this.props.children;
  }
}

export default ErrorBoundary;