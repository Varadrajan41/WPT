import {useState} from 'react';
import LoginServices from './LoginServices';
import {useHistory} from 'react-router-dom';
const Login= ()=>{
    let[mngob,setmngob]=useState({id:"",name:""});
    let History= useHistory();
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setmngob({...mngob,[name]:value});
    }
    const display=()=>{
        LoginServices.getLogin(mngob).then((result)=>{
            alert(result.data);
            if(result.data==="OKAY"){
                history.push("/successful");
            }
        }).catch(()=>{alert("invalid name")})
    }
    return(
    <div>
        
            <form>
                
                    Id:<input typr="text" name="id" id="id" value="mngob.id" onChange={handleChange}></input>
                  
                    Name:<input type="text" name="name" id="name" value="mngob.name" onChange={handleChange}></input>
                    <button tyep="button" name="btn" id="btn" onClick={display}>Click Me</button>
            </form>
        
    </div>
    
   
    );

}
export default Login;