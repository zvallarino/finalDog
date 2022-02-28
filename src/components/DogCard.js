import { useState, useEffect } from "react";
import { Card, CardMedia } from "@material-ui/core";
import {
  Typography
}
from '@material-ui/core';
import axios from 'axios';


function DogCard({singleDog}) {

  const [loading,setLoading] = useState(true)
  const [loadingRandom, setLoadingRandom] = useState(true)
  const [singleImage, setsingleImage] = useState("")
  const [click,setOnClick] = useState(false)


  useEffect(() => {
    const fetchSingleImage = async () => {
      setLoading(true);
      const response = await axios.get(`https://dog.ceo/api/breed/${singleDog[0]}/images/random`);
      setsingleImage(response.data.message)
      setLoading(false);
      } 
      fetchSingleImage();
    
  }, []);

  function RandomPhoto(){
    const fetchSingleImage = async () => {
      setLoadingRandom(true);
      const response = await axios.get(`https://dog.ceo/api/breed/${singleDog[0]}/images/random`);
      setsingleImage(response.data.message)
      setLoadingRandom(false);
      } 
      fetchSingleImage();
  }


  function handleClick (e){
    setOnClick(dogs =>!dogs)
    console.log("firing")
  }

  function subBreedHandle(){
    if(singleDog[1].length===0){
      return
    }

    return singleDog[1].map(
      (breed)=>
        <Typography
          key = {breed}
          variant = "h3">
          {breed}
        </Typography>
  
   )
  }

  return (
    <>
    <Card
    variant="outlined"
    sx={{ width: "auto"}}
    >
   
        <Typography
        onClick = {handleClick}
        variant = 'h1'
        >
          {singleDog[0]}
        </Typography>
     {
     click?
        <CardMedia
          component="img"
          height = "100%"
          width = "100%"
          image={singleImage}
          onClick = {RandomPhoto}
          alt="Dog"
        />
        :
        null
        }
    {subBreedHandle()}
    </Card>
    </>
  );
}

export default DogCard;