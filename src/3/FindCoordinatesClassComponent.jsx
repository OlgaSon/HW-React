import {
    Component
} from "react";


class FindCoordinatesClassComponent extends Component {

    state = {
        value: ""
    };

    handelMouseMove = (event) => {
        this.setState({ value: event.clientX + ':' + event.clientY })
    };

    render() {
        const { value } = this.state;
        return (
            <div>
                {value}
                <textarea rows="30" cols="50" onMouseMove={this.handelMouseMove}></textarea>
            </div>
        );
    };
};


export default FindCoordinatesClassComponent;