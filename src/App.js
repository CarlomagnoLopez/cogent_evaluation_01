import React , {Component} from 'react';
import './App.css';


const array =
 [
   {
  name: "Carlomagno",
  position: "Sr Developer",
  coworkerOnCogent: true,
  startOnCogent: "2019",
}, 

{
  name: "Sai",
  position: "lead Developer",
  coworkerOnCogent: true,
  startOnCogent: "2017",
},
{
  name: "Sai",
  position: "lead Developer",
  coworkerOnCogent: true,
  startOnCogent: "2017",
}]

class Array extends Component  {
  
  
  render() { 
    return <div>
            {
              array.map((item) => {
                return(
                  <div>
                    <h1>
                      {item.name + " is a "}
                      {item.position+ " and he started"}
                      { " working from  " + item.startOnCogent + "."} 
                    </h1>
                    </div>
                )
              })
            }
    
    </div>
  }
}
export default Array;

