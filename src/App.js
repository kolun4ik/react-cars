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
        showCars: false,
    }



    changeTitleHandler = pageTitle => {
        this.setState({
            pageTitle, // параметры совпадают и React это поймет как надо
        });
    }

    toggleCarHandler = () => {
        this.setState({
            showCars: !this.state.showCars,
        });
    }

  render() {
      const divStyle = {
          textAlign: 'center'
      }

      let cars = null;
      if(this.state.showCars ){
          cars =  this.state.cars.map((car, index) => {
                  return (
                      //каждый объект преобразуем в компонент
                      <Car
                          key={index}
                          name={car.name}
                          year={car.year}
                          onChangeTitle={() => this.changeTitleHandler(car.name)}
                      />
                  )
              })
      }
    return (
        <div style={divStyle}>
            <h1>{this.state.pageTitle}</h1>


            {/*bind -первый параметр тот контекст, с которым должна быть вызвана ф-ция,
            в нашем случае это this. bind будет возвращать новую ф-цию, но не вызывать ee.
            Далее, через запятую, любой набор параметров (первый вариант передачи параметров)*/}
            <button
                onClick={this.toggleCarHandler}>
                Toggle Cars</button>
            {/*Выводим список всех машин, где car - каждый из объектов списка*/}
            { cars }
        </div>
    )
  }
}

export default App;
