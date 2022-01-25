import { Component } from 'react';

class TestClassComponent extends Component {
    // static defaultProps = {
    //     label: 'Default label text'
    // }
    // альтернатива задать дефолтный пропс

    state = {
        count: 0
    }

    handelClick = () => {

        /*   const {count} = this.state;
          this.setState((prevState) => ({count: prevState.count + 1}));
          this.setState((prevState) => ({count: prevState.count + 1}));
          this.setState((prevState) => ({count: prevState.count + 1}));
          // способ использовать предыдущее состояние, если оно очень необходимо */

        // const { count } = this.state;
        // this.setState({count: count + 1});
        // 2ой альтернативный вариант, деструктуризация

        this.setState({ count: this.state.count + 1 });

        // this.setState({count: this.state.count + 5});
        // если таких строк много, то сработает только последняя, т.е. +5
    }

    handelClickDecrease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        const { label } = this.props;
        const { count } = this.state;
        return (<div>
            <h1>{label}</h1>
            {count}
            <button onClick={this.handelClick}>increase</button>
            <button onClick={this.handelClickDecrease}>decrease</button>
        </div>)
    }
};

TestClassComponent.defaultProps = {
    label: 'Default label text'
};


export default TestClassComponent;