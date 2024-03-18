/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'


function Login(props) {
    const [formData, setFormData] = useState({
      user: '',
      pass: ''
    });

    let [loggedIn, setLoggedIn] = useState(false);

   const ref =  useRef("imtiyaj");

    const handle = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setFormData((pre) => {return {...pre, [name]:value} } )
    }


       
    

    let logged = (e) => {
        e.preventDefault();
        alert(ref.current);
      setLoggedIn(true);
    }

    

  return (
    <div style={{backgroundColor:props.backgroundC , color:props.color, width:'100vw', height:'100vh'}}  >
         {loggedIn?(
            <div className="h">
               <h1>you are logged</h1>
               <p>{`your name is ${formData.user} and password is ${formData.pass}`}</p>
            </div>
         ): (
            <div className="h">
               <h1>you are not logged</h1>
            </div>
         )}

         <form action="">
            <input type="text" 
            placeholder="username"
             name='user'
             value={formData.user}
             onChange={handle} />

            <input type="password"
             placeholder="password"
              name='pass' 
              value={formData.pass}
              onChange={handle}/>

              <input type="submit" onClick={logged} />
        </form >
    
    </div>
  )
}

export default Login
