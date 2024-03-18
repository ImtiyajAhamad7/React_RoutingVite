import { useState, useEffect, useContext } from "react";
import ModesContext from "./context/ModesContext";

function Card() {
   
    const [cards, setCards] = useState([])
    const [show, setShow] = useState(false);
    const [color, setColor] = useState('white');

    const t = useContext(ModesContext);

    const fetchData = async () => {
      let a = await fetch("https://jsonplaceholder.typicode.com/posts")
      let data = await a.json()
      setCards(data)
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    useEffect(() => {
      setColor(show ? "red" : "blue");
    }, [show]);

  

    return (
      <>
      <div style={{backgroundColor:t.Bcolor, width:'100vw' , height:'100vh', color:t.color}}>
        <div style={{backgroundColor:t.Bcolor}} className=" border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4  flex-col justify-between leading-normal flex">
          <h1 style={{textAlign:"center", margin: "10px"}}>User Data is {show ? "Showing, click hide button to hide data, button is in bottom of the page" : "hidden, click show button to see the data"}</h1>
        
          {show && cards.map((card) => (
            <div key={card.id} style={{backgroundColor:t.Bcolor, color:t.color}} className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By: UserId: {card.userId} </span>
            </div>
          ))}

          <button className=" text-white font-bold py-2 px-4 rounded" style={{backgroundColor: color}} onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
        </div>

        <h1>this data coming from {t.num}</h1>

        </div>
      </>
    )
}

export default Card;
