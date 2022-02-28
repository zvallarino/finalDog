import DogCard from "./DogCard";
import { useState } from "react";
import Pagination from "./Pagination";
import {
  Container,
  Grid
} from '@material-ui/core';

function DogFactory({loading, dogs}) {
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);
const paginate = (pageNumber) => setCurrentPage(pageNumber)

if(loading){
  return <h2>loading</h2>
}

const mapOfBreed = () => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dogs.slice(indexOfFirstPost, indexOfLastPost);
  return currentPosts.map((singleDog)=><DogCard
    key = {singleDog[0]}
    singleDog = {singleDog}
    />)
}

const leftArrowFunction = (e) => {
  if(currentPage===1){
    return
  }

  setCurrentPage(number=>number-=1)
}

const rightArrowFunction = (e) => {
  if(currentPage===Math.ceil(dogs.length/postsPerPage)){
    return
  }

  setCurrentPage(number=>number+=1)
}
  return (
      <Container>
          <Grid item xs = {12}>
            {mapOfBreed()}
          </Grid>
          <Grid item xs = {12}>
            <Pagination
            paginate = {paginate}
            setCurrentPage = {setCurrentPage}
            postsPerPage={postsPerPage}
            totalPosts ={dogs.length}
            rightArrowFunction = {rightArrowFunction}
            leftArrowFunction = {leftArrowFunction}
            />
          </Grid>
      </Container>
  );
}

export default DogFactory;