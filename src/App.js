import React, {useState} from 'react'
import "./index.css"
import axios from 'axios'
function App() {

  const [image, setImage]= useState('')

  const handleChange=()=>{
    axios.get('https://api.generated.photos/api/v1/faces?api_key=xgOONDjrKRLzxe9w9CDxgA&order_by=random')
    .then( res=>{
      const uri= res.data.faces[0].urls[4][512]
      uri && setImage(uri)
    }).catch(err=>{
      console.log(err.message)
    })

  }
  return (
    <div className="App">
     {image && <img src={image} alt='image'/>}
     <button type='button' onClick={handleChange}>New Image</button>
    </div>
  );
}

export default App;
