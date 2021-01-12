import React from 'react';
import { render } from "react-dom";
import $ from 'jquery';
import './styles.css';

class App extends React.Component {
constructor(){
    super()
      this.state = {
             data: [],
             sort: {
               column: null,
               direction: 'desc',
             },
           };

  }
  componentDidMount() {
    $.ajax({
       url: "http://localhost:8080/cars/all",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       success: function(data) {



         this.setState({data: data});
       }.bind(this),
       error: function(jqXHR) {
         console.log(jqXHR);
       }.bind(this)
    })
  }

 onSort = (column) => (e) => {
    const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    const sortedData = this.state.data.sort((a, b) => {
        if (column === 'id') {
            const id1 = a.id; // ignore upper and lowercase
            const id2 = b.id; // ignore upper and lowercase
            if (id1 < id2) {
              return -1;
            }
            if (id1 > id2) {
              return 1;
            }
            return 0;
      } else if (column === 'carManu') {
        const nameA = a.carManu.toUpperCase(); // ignore upper and lowercase
        const nameB = b.carManu.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }else if (column === 'carModel') {
        const nameA = a.carModel.toUpperCase(); // ignore upper and lowercase
        const nameB = b.carModel.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
           return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
      }
        else if (column === 'clutch') {
        const nameA = a.clutch.toUpperCase(); // ignore upper and lowercase
        const nameB = b.clutch.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
           return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
      }else if(column === 'HP'){
        const hpA = a.horsePower;
        const hpB = b.horsePower;
        if (hpA < hpB) {
            return -1;
        }
        if (hpA > hpB) {
            return 1;
        }

        return 0;
      }else if(column === 'CC'){
       const ccA = a.cc;
       const ccB = b.cc;
       if (ccA < ccB) {
           return -1;
       }
       if (ccA > ccB) {
           return 1;
       }
           return 0;
       }
       else if(column === 'price'){
       const priceA = a.price;
       const priceB = b.price;
       if (priceA < priceB) {
           return -1;
       }
       if (priceA > priceB) {
           return 1;
       }
           return 0;
       }else if(column === 'rating'){
              const ratingA = a.rating;
              const ratingB = b.rating;
              if (ratingA < ratingB) {
                  return -1;
              }
              if (ratingA > ratingB) {
                  return 1;
              }
                  return 0;
              }
    });

    if (direction === 'desc') {
      sortedData.reverse();
    }

    this.setState({
      data: sortedData,
      sort: {
        column,
        direction,
      }
    });
  };


setArrow = (column) => {
    let className = 'sort-direction';

    if (this.state.sort.column === column) {
      className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
    }

    console.log(className);

    return className;
  };




  render() {


    return (

      <table>
            <thead>
                <tr>
                    <th> <button onClick={this.onSort('id')}>Id </button>
                    <span className={this.setArrow('id')}></span> </th>
                    <th> <button onClick={this.onSort('carManu')}>Car Manufacturer </button>
                    <span className={this.setArrow('carManu')}></span> </th>
                    <th> <button onClick={this.onSort('carModel')}>Car Model </button>
                    <span className={this.setArrow('carModel')}></span> </th>
                    <th> <button onClick={this.onSort('clutch')}>Clutch Type </button>
                    <span className={this.setArrow('clutch')}></span> </th>
                    <th> <button onClick={this.onSort('HP')}>HorsePower </button>
                    <span className={this.setArrow('HP')}></span> </th>
                    <th> <button onClick={this.onSort('CC')}>Cubic Capacity </button>
                    <span className={this.setArrow('CC')}></span> </th>
                    <th> <button onClick={this.onSort('price')}>Price </button>
                    <span className={this.setArrow('price')}></span> </th>
                    <th> <button onClick={this.onSort('rating')}>Rating </button>
                    <span className={this.setArrow('rating')}></span> </th>
                </tr>
            </thead>
      <tbody>
      {this.state.data.map(function(item, key) {

               return (

                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.carManu}</td>
                      <td>{item.carModel}</td>
                      <td>{item.clutch}</td>
                      <td>{item.horsePower}</td>
                      <td>{item.cc}</td>
                      <td>{item.price}</td>
                      <td>{item.rating}</td>
                  </tr>

                )
             })}</tbody>
       </table>

    )
  }
}

export default App;