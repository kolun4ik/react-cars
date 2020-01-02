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

  render() {
      const divStyle = {
          textAlign: 'center'
      }
    const cars = this.state.cars
    return (
        <div style={divStyle}>
            <h1>{this.state.pageTitle}</h1>
            {/*bind -первый параметр тот контекст, с которым должна быть вызвана ф-ция,
            в нашем случае это this. bind будет возвращать новую ф-цию, но не вызывать ee.
            Далее, через запятую, любой набор параметров (первый вариант передачи параметров)*/}

            <button
                onClick={this.changeTitleHandler.bind(this, ' Chenged')}>
                Change title</button>

            <Car
                name={cars[0].name}
                year={cars[0].year}
                onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)} //Событие можно назвать как хочется
            />
            {/*Второй вариант передачи параметров: через стрелочную ф-цию*/}
            <Car
                name={cars[1].name}
                year={cars[1].year}
                onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
            />
            <Car
                name={cars[2].name}
                year={cars[2].year}
            />
        </div>
    )
  }
}

export default App;
