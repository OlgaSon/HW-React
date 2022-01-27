import {
    Component
} from "react";


class ClassComponentLifeStyle extends Component {
    state = {
        count: 2,
        hasError: false,
    };

    incrementCount() {
        this.setState({ count: this.state.count + 1 });
    }
    decrementCount() {
        this.setState({ count: this.state.count - 1 });
    }

    // Mount. constructor():
    constructor(props) {
        super(props);

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);

        this.state = {
            count: props.startFrom || 2,
        };
    };

    // Mount. static getDerivedStateFromProps():
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps method is here!', state);
        const count = state.count % 10 === 0 ? state.count + 10 : state.count;

        return {
            ...state,
            count,
        };
    };


    // Mount. render():
    render() {
        const { count } = this.state;
        const isEven = count % 2 === 0;
        return (
            <div>
                <p>Count(must be less than 25, every 10 get +10):</p>
                <h2> {count}. It's {isEven ? 'even' : 'odd'}.</h2>
                <div>
                    <button onClick={this.incrementCount}>incrementCount</button>
                    <button onClick={this.decrementCount}>decrementCount</button>
                </div>
            </div>
        );
    };

    // Mount. componentDidMount():
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((todos) => {
                this.setState({ ...this.state, todos });
            })
            .catch((error) => {
                this.setState({ ...this.state, error });
            })
            .finally(() => {
                console.log('Данный console.log выведется только 1 раз');
            });
    };

    // Update. static getDerivedStateFromProps();

    // Update. shouldComponentUpdate():
    shouldComponentUpdate(nextProps, nextState) {
        // return nextProps.startFrom !== this.props.startFrom || nextState.count !== this.state.count
        return nextState.count < 25;
    };

    // Update. render();

    // Update. getSnapshotBeforeUpdate():
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // if (prevProps.list.length < this.props.list.length) {
        //     const list = this.listRef.current;
        //     return list.scrollHeight - list.scrollTop;
        // }
        return null;
    };

    // Update. componentDidUpdate():
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }
    };

    // Unmount. componentWillUnmount()
    componentWillUnmount() {
        // window.removeEventListener('scroll', onScroll)
        window.removeEventListener('scroll', console.log('This is componentWillUnmount()'))
    };


        // Catch. getDerivedStateFromError()
        static getDerivedStateFromError(error) {
            return { hasError: true };
        }
        render() {
            if (this.state.hasError) {
                return <p>Smth is wrong</p>
            }
            // const { count } = this.state;
            // const isEven = count % 2 === 0;
            return (
                // <div>
                //     <p>Count: {count}.</p>
                //     <p>It's {isEven ? 'even' : 'odd'}</p>
                //     <div>
                //         <button onClick={this.incrementCount}>incrementCount</button>
                //         <button onClick={this.decrementCount}>decrementCount</button>
                //     </div>
                // </div>
            
            // this.props.children
            <p>Everyth is Ok</p>
            )
        };

};


export default ClassComponentLifeStyle;
