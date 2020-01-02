import React from "react";

class Car extends React.Component {

    render() {
        return (
            <div>
                <h3>Car name: {this.props.name}</h3>
                <p>YEAR: {this.props.year}</p>
                <button onClick={this.props.onChangeTitle}>Click</button>{/*обращаемся как референс, к той ф-ции, которую передаем*/}
            </div>
        );
    }
}
export default Car;