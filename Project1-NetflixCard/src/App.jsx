import { Fragment } from "react";

export const App = () =>{
  return (
    <Fragment>
      <NetflixSeries/>
      <NetflixSeries/>
      <NetflixSeries/>
      <NetflixSeries/>
      <NetflixSeries/>
    </Fragment>
  );
};

//* 1. Variables 
/*? You can embed any JavaScript variable within JSX by enclosing it in curly braces.
The Value of the variable will be inserted into the DOM at the Respective*/ 

// 2: Expressions 
/* JSX allows you to write JavaScript expression inside curly braces
This includes operations, function calls, and other JavaScripte expressions 
that produce a */

//* 3. Function Calls
/* Functions, especially those that returns JSX, can be involed directly within your JSX. */


  const NetflixSeries = () => {

    const name = "Business Proposal";
    const rating = "8.1";
    const summary = "A young woman pretends to be her friend and goes on her blind date in her place, only to discover that the date is her CEO. She must hide her true identity from him while he pursues her and insists they get married"

    const returnGenre = () => {
      const genre = "RomCom";
      return genre;
    };
    
  return (
  <div>
  <div>
    <img src="BP.jpg" alt="BP.jpg" width="30%" height="30%"/>
  </div>
   <h2>Name: {name} </h2>
  <h3> Rating:{5+ 3.1} </h3>
  <p> Summary: {summary} </p>
  <p>Genre: {returnGenre()} </p>
  </div>
  );
};

