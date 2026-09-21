import Card from './card';
import Navbar from './Navbar';
import './App.css'
function App() {
  
    
  return (

    //react fragments 
  
  //  <div>
  //   <h1>Hello Guys, I am {user}</h1>
  //   <p>
  //     I am {age} years old
  //   </p>

  //  </div>
  <> <div>
    <Navbar/>

  
    
  </div>
  <div className='card-container'>
  <Card name="Gulab Jamun" description="Soft and sweet gulab jamun soaked in fragrant sugar syrup" image="https://th.bing.com/th/id/OIP.RyIRoXVi_u8k4xdMnNx3KAHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3z"/>
     <Card name="Rasgulla" description="Soft and spongy cottage cheese balls in a sweet syrup" image="https://img.freepik.com/premium-photo/rasgulla-is-one-famous-indian-sweet-made-by-pure-cow-milk-this-sweet-is-served-chilled-has-softspongy-texure-with-divine-aroma-cardamom-saffron_57665-15409.jpg?w=1380"/>
     <Card name="Jalebi" description="Crispy and sweet spiral-shaped dessert soaked in sugar syrup" image="https://foodaazz.com/wp-content/uploads/2023/11/Jalebi-1.png"/>
      <Card name="Ladoo" description="Round, sweet balls made from gram flour and sugar" image="https://th.bing.com/th?q=Motichur&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247"/>
       <Card name="Barfi" description="Rich and creamy milk-based sweet with nuts" image="https://th.bing.com/th?q=Plain+Barfi&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247"/>
  </div>
 </>
  )
}

export default App
