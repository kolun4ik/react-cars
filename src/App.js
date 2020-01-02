import React from 'react';
import Car from './components/Car';

class App extends React.Component {
    state = {
        cars: [
            { name: 'Ford', year: '2018'},
            { name: 'Audi', year: '2010'},
            { name: 'Mazda', year: '2015'},
        ],
        pageTitle: 'React component',
    }

    changeTitleHandler = newTitle => {
        this.setState({
            pageTitle : newTitle
        });
    }

    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value,
        })
    }

  render() {
      const divStyle = {
          textAlign: 'center'
      }
    return (
        <div style={divStyle}>
            <h1>{this.state.pageTitle}</h1>

            <input  type="text" onChange={this.handleInput}/>

            {/*bind -первый параметр тот контекст, с которым должна быть вызвана ф-ция,
            в нашем случае это this. bind будет возвращать новую ф-цию, но не вызывать ee.
            Далее, через запятую, любой набор параметров (первый вариант передачи параметров)*/}
            <button
                onClick={this.changeTitleHandler.bind(this, ' Chenged')}>
                Change title</button>
            {/*Выводим список всех машин, где car - каждый из объектов списка*/}
            { this.state.cars.map((car, index) => {
                return (
                    //каждый объект преобразуем в компонент
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandler(car.name)}
                    />
                )
            }) }
        </div>
    )
  }
}

export default App;
