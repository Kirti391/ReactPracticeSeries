import { useState } from 'react'
import './App.css'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem('user', 'Kirti')
  // const user=localStorage.getItem('user');
  // console.log(user);

  // localStorage.setItem('age', 21);
  // const age=localStorage.getItem('age');
  // console.log(age);
  // localStorage.removeItem('user')
  // localStorage.removeItem('age');
  // const user={
  //   username:'Kirti',
  //   age:21,
  //   city:'Hodal'
  // }
  // console.log(user);
  // localStorage.setItem('user', JSON.stringify(user));

  // const user2=JSON.parse(localStorage.getItem('user'));
  // console.log(user2);
  // console.log(typeof(user2));
  localStorage.clear();
  localStorage.setItem('city', 'Delhi')
  const city = localStorage.getItem('city');
  console.log(city);

  localStorage.removeItem('city');

  const cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Corolla",
      color: "black"
    },
    {
      id: 2,
      brand: "Maruti Suzuki",
      model: "Swift",
      color: "Teal",
    },
    {
     id: 3,
    brand: "Tata",
    model: "Nexon",
    color:"White"
    }
  ]

  console.log(cars);

  localStorage.setItem('cars', JSON.stringify((cars)));
  console.log(cars);
  console.log(typeof(cars))
  const car=JSON.parse(localStorage.getItem('cars'))
  console.log(car);
  console.log(typeof(car))
  localStorage.clear()
  return (
    <>
      Hi there!
    </>
  )
}

export default App
