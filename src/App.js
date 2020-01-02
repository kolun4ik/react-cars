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
    };



    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        //изменят в самом масиве нельзя, нужно сделать дубликат
        // const cars = this.state.cars.concat()
        const cars = [...this.state.cars]; /// ... спред оператор
        cars[index] = car;
        this.setState({
            cars // ключ совпадает со значением
        })
    };

    toggleCarHandler = () => {
        this.setState({
            showCars: !this.state.showCars,
        });
    };

    deleteHandler(index) {
        console.log('delete')
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({
            cars
        });
    };

  render() {
      const divStyle = {
          textAlign: 'center'
      };

      let cars = null;
      if(this.state.showCars ){
          cars =  this.state.cars.map((car, index) => {
                  return (
                      //каждый объект преобразуем в компонент
                      <Car
                          key={index}
                          name={car.name}
                          year={car.year}
                          onChangeName={ event => this.onChangeName(event.target.value, index)}
                          onDelete={this.deleteHandler.bind(this, index)}
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
            <div style={{
                width: 400,
                margin: 'auto',
                paddingTop: '20px',
            }}>
                { cars }
            </div>

        </div>
    )
  }
}

export default App;
