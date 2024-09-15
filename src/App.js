
import React, { Component } from 'react';

const Array =
[{
  name: "Carlomagno",
  position: "Sr Developer",
  coworkerOnCogent: true,
  startOnCongent: "2019"

},

{
name: "Sai",
  position: "Lead developer",
  coworkerOnCogent: true,
  startOnCongent: "2017"
}
]



class Comp  extends Component {
  
  
  render() { 
    return <div>
            {
              Array.map((item) => {
                return(
                  <div>
                    <p>
                      {item.name + " is a " + item.position + " and he start to work on cogent at " + item.startOnCongent + "."}

                      
                    </p>
                    </div>
                )
              })
            }
    
    </div>
  }
}
 

export default Comp;
