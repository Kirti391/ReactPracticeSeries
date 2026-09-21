import "./card.css"
function Card({image, name,description}){
    const user="Kirti";
    const age=89;
   return (
  <div className="card-container">
   {/* <div className="card">
    <h2>Hello Guys, I am {user}</h2>
    <p>
      I am {age} years old
    </p>

   </div> */}

   <div className="card2">
    <img src={image} alt={name} />
    <h2>
        {/* Gulab Jamun */}
        {name}
    </h2>
    <p>{description}</p>
    <button>Order Now</button>
   </div>
   </div>
  )
}
export default Card;