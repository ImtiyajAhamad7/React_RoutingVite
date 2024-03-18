import  {useEffect, useState,  useRef} from 'react'



 function UseEffectEx() {
    const [count, setCount] = useState(0);
    const [Text, setText] = useState("Default text");
    

    const ref = useRef(0);
   // ref.current = ref.current +1;


    useEffect(() => {
        
         alert("count is increased by " + count);
         
        
        setText(`counts clicked ${count} and  here is the ref var value ${ref.current}`);
        
    }, [count]);

    const handleOnClick = () => {
        ref.current = ref.current +1;
        setCount(count + 1);
    };
    return (

        <div>

            
                
       

            <p>{Text}</p>
            <button onClick={handleOnClick}>Submit</button>


        </div>
    )
  
}

export default UseEffectEx; 


