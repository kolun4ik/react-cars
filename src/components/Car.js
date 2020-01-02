import React from "react";
// import Radium from 'radium';
import './Car.css';

class Car extends React.Component {

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('Car componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Car shouldComponentUpdate', nextProps, nextState);
        return nextProps.name.trim() !== this.props.name.trim();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Car componentWillUpdate', nextProps, nextState);
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState);
    //     return prevState;
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Car componentDidUpdate');
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('Car getSnapshotBeforeUpdate');
    // }

    componentWillUnmount() {
        console.log('Car componentWillUnmount');
    }

    render() {
        console.log('Car Render');

        // if(Math.random() > 0.7){
        //     throw new Error('Car random failed')
        // }

        const inputClasses = ['input'];

        if(this.props.name !== ''){
            inputClasses.push('green');
        }
        else {
            inputClasses.push('red');
        }

        if(this.props.name.length > 5){
            inputClasses.push('bold');
        }

        const style =  {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0,0,0, 0.14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0,0,0, 0.25)',
                cursor: 'pointer'
            }
        }

        return (
            <div className="Car" style={style}>
                <h3>Car name: {this.props.name}</h3>
                <p>YEAR: {this.props.year}</p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')} // массив преобразуем в строку
                />
                <button onClick={this.props.onDelete}>Delete</button>{/*обращаемся как референс, к той ф-ции, которую передаем*/}
            </div>
        );
    }
}

export default Car;