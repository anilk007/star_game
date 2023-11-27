//import React from 'react';


const DestructureArrayComponent = () => {


    const Avengers = [
    
      {
    
        fname: 'tony',
    
        lname: 'stark',
    
        age: 30,
    
        gender: 'M',
    
        powers: ['inteligence', 'money'],
    
      },
    
      {
    
        fname: 'natasha',
    
        lname: 'romonov',
    
        age: 23,
    
        gender: 'M',
    
        powers: ['inteligence', 'slow ageing'],
    
      },
    
    ];
    
     
    
    function Select(stringToSelect, from = []) {
    
    
    }
    
     
    
    const list = Select('fname','lname', Avengers);
    
     
    
    console.log(list);
    
    return (<>
        
     
      <div>Destructure Array ...</div>

      

    


  </>);

}


export default DestructureArrayComponent;