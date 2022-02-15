import React,{useState} from 'react';
import '../App.css';
import Products from './Products';

const LoginFormSuccess = ()=>{
    const [search,setSearch]=useState('');
    const [data,setData] = useState([]);
    const YOUR_APP_ID = "81a807bf";
    const YOUR_APP_KEY = "6468410e1d88100512de068ffc999eeb";

    const submitHandler= e =>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then
        (response => response.json()
        ).then(
            data => setData(data.hits)
        )
    }
    return(
        <div className = "box">
            <div className="box2">
                <center>
                <h4>Recipe App</h4>
                <form onSubmit={submitHandler}>
                    <input 
                    type="text"
                    placeholder="Search here..."
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    />
                     <button type="submit" class="btn btn-primary" >Sign up</button>

                </form>
                {data.length>=1 ? <Products data={data}/>:null}
                </center>
            </div>
            
        </div>
    )
}
export default LoginFormSuccess;