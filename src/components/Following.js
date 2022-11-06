import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Following = ({setValue}) => {
  const [data, setData] = useState();
  const id = useParams().id;
  const navigate = useNavigate();
  
  
  useEffect(() => {
    setValue(3);
    axios.get(`https://harsha-blogapp.herokuapp.com/api/user/${id}`)
    .then((res) => {
      setData(res.data.user.following); 
      console.log(data);
    });
  }, []);
  return (
    <div>
        <p style={{fontSize:70, textAlign: "center", color: "lightblue"}}>Following</p>
        <div style={{display:"flex", flexDirection:"column" }}>{ data && data.map((item)=>(
        //  <p key={item} style={{fontSize:50, textAlign: "center", color:"lightgreen"}}> { item.name } </p>
        <Button 
          onClick={() => navigate(`/user/${item._id}/`)}
          // variant="contained"
          sx={{ margin: 1, borderRadius: 2, height: "2em", fontSize:40, }}
          // color="red"
          
          style={{textJustify: "center"}}
        >
        <p style={{color: "lightgreen"}}>{item.name}</p>
        </Button>
        )
         )}</div>
    </div>  
  )
}

export default Following

