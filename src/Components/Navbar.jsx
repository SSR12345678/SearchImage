import React, { useContext} from 'react'
import PixabayContext from '../Context/PixabayContext'

const Navbar = () => {
  const {fetchImageByCatagory, setQuery} = useContext(PixabayContext);
  return (

    <>
  

    <div className='container text-center my-5'>

<button onClick={()=> fetchImageByCatagory("nature")} type="button" className="btn btn-outline-primary mx-3">Nature</button>
<button onClick={()=> fetchImageByCatagory("science")} type="button" className="btn btn-outline-warning mx-3">Science</button>
<button onClick={()=> fetchImageByCatagory("computer")} type="button" className="btn btn-outline-light mx-3">Computer</button>
<button onClick={()=> fetchImageByCatagory("animals")} type="button" className="btn btn-outline-info mx-3">Animals</button>
<button onClick={()=> fetchImageByCatagory("sports")} type="button" className="btn btn-outline-warning mx-3">Sports</button>
<button onClick={()=> fetchImageByCatagory("transportation")} type="button" className="btn btn-outline-info mx-3">Transportation</button>
<button onClick={()=> fetchImageByCatagory("travel")} type="button" className="btn btn-outline-light mx-3">Travel</button>
<button onClick={()=> fetchImageByCatagory("food")} type="button" className="btn btn-outline-primary mx-3">Food</button>


    </div>



    <div className="container text-center my-5" style={{width:'800px'}}> 
    <input type="text" onChange={(e)=>setQuery(e.target.value)} class="form-control bg-dark text-light"/>
    </div>  

    
    </>
  )
}

export default Navbar