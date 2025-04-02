import React, { useEffect,useState } from 'react'
// import  "./Eat.css"
const Eat = () => {
    const  [mealData, setMealData] = useState([])
     const [area, setAreaData] = useState("Indian")
     const  [inputData, setInputData] = useState("")


     
    useEffect(() => {
      const FetchApiData=async()=>{
        const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        const data=await api.json();
        console.log(data);
        setMealData(data.meals)
      }
      FetchApiData();
    }, [area])
    


   const submitHandler=async(e)=>{
    e.preventDefault();
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
    const data=await api.json();
    console.log(data.meals);
    setMealData(data.meals);
    setInputData(" ")
   }
   


  return (
   

   
  <>
   <div className="my-3" style={{width:"1200px",margin:"auto"}}> 
    <div className="mx-auto text-center">
<button
  onClick={()=>setAreaData("Canadian")} 
 type="button" className="btn btn-primary mx-3">Canadian</button>
<button 
onClick={()=>setAreaData("British")}
 type="button" className="btn btn-secondary mx-3">British</button>
<button 
onClick={()=>setAreaData("Indian")} 
type="button" className="btn btn-success mx-3">Indian</button>
<button 
onClick={()=>setAreaData("Russian")}
 type="button" className="btn btn-danger mx-3">Russian</button>
<button 
onClick={()=>setAreaData("Chinese")}
 type="button" className="btn btn-warning mx-3">Chinese</button>
<button 
onClick={()=>setAreaData("American")}
 type="button" className="btn btn-info mx-3">American</button>
<button
 onClick={()=>setAreaData("Italian")}
 type="button" className="btn btn-light mx-3">Italian</button>
<button 
onClick={()=>setAreaData("Mexican")} 
type="button" className="btn btn-dark mx-3">Mexican</button>
    </div>
   

</div>
  <form onSubmit={submitHandler} className="mx-auto text-center my-3" >
      <input onChange={(e)=>setInputData(e.target.value)} type="text" />
    </form>

    
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"2rem",
        flexWrap:"wrap",
        marginTop:"55px",
        width:"1500px"

    }}>
        {mealData.map((data)=><div key={data.idMeal} style={{maxWidth:"280px",textAlign:"center"}}>
            <div>
                <img src={data.strMealThumb} alt="" style={{width:"230px", border:"2px solid yellow",borderRadius:"5%"}} />
            </div>
            <h5>{data.strMeal}</h5>
        </div>)}
    </div>
    
    </>
  )
}

export default Eat