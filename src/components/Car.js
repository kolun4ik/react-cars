import React from "react";

class Car extends React.Component {

    render() {
        return (
            <div style={{
                border: '1px solid #ccc',
                marginBottom: '10px',
                display: 'block',
                padding: '10px',
            }}>
                <h3>Car name: {this.props.name}</h3>
                <p>YEAR: {this.props.year}</p>
                <input type="text" onChange={this.props.onChangeName} value={this.props.name}/>
                <button onClick={this.props.onDelete}>Delete</button>{/*обращаемся как референс, к той ф-ции, которую передаем*/}
            </div>
        );
    }
}
export default Car;