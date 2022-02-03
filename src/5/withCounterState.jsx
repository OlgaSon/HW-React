import { Component } from "react";

export const withCounterState = (WrappedComponent) => {
    return class extends Component {
        state = {
            counter: 0
        }
        setCounter = (counter) => {
            this.setState({ counter: counter })
        }
        render () {
            return (<WrappedComponent counter={this.state.counter} setCounter={this.setCounter}></WrappedComponent>)
        }
    }
}

// export default withCounterState