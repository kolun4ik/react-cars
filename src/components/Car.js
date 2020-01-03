import React from "react";
import PropTypes from 'prop-types';
import classes from './Car.css';
import withClass from '../hoc/withClass';

class Car extends React.Component {


    render() {
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


        return (
            //Fragment заменяет корневой элемент для Компонента
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>YEAR: {this.props.year}</p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')} // массив преобразуем в строку
                />
                <button onClick={this.props.onDelete}>Delete</button>{/*обращаемся как референс, к той ф-ции, которую передаем*/}
            </React.Fragment>
        );
    }
}

// Определяем новое свойство, за которым будет следить React.
// Возможна только в класс баейсд компонентах
Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    onChangName: PropTypes.func,
    onDelete: PropTypes.func,
};
export default withClass(Car, classes.Car);