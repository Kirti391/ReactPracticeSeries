import "./card.css"

function Card(){
const user="Kirti";
const age=21;
    return (
        <div className="card"> 
            <h2>Hello !</h2>
        <p>Hi, I am {user} and I am {age} years old</p>
       
        </div>
        
    )

}
export default Card;