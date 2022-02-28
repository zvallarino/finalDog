import { Button, ButtonGroup } from '@material-ui/core';


function Pagination({ postsPerPage, totalPosts, paginate,leftArrowFunction,rightArrowFunction }){
  const pageNumbers = [];


  for (let i = 1; i<=Math.ceil(totalPosts/ postsPerPage); i++){
    pageNumbers.push(i);
  }

  return(
    <>
      <ButtonGroup spacing ={3} direction ="row">
      <Button
        color = "secondary"
        variant="contained"
        onClick = {leftArrowFunction}>
        Left
      </Button>
      {pageNumbers.map(number => 
            <Button 
              key = {number}
              variant="contained"
              color = "primary"
              onClick = {()=>paginate(number)}>
                {number}
            </Button>)
        }
      <Button
        color = "secondary"
        variant="contained"
        onClick = {rightArrowFunction}
      >
          Right
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Pagination;