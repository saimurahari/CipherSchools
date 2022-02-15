import React from 'react'
import '../App.css'

const Products =({data}) =>{
    return(
        <div>
            <center>
            <div className="row">
                {data.map(data => 
                    <div class="card" style={{"width":"18rem"}}>
                        <img class="card-img-top" src={data.recipe.image} alt="card image"/>
                        <div class="card-body">
                            <center>
                                <h5 class="card-title">{data.recipe.label}</h5>
                                <p class="card-text">Total Amount of Calories: {Math.round(data.recipe.calories)}</p>
                                <a href="#" class="btn btn-primary">Buy</a>
                            </center>
                            </div>


                        </div>
                    
                    )}
                </div>
                </center>
        </div>
    )
}
export default Products;