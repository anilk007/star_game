import React from 'react';

import nojson from './data/no.json';

import categories from './data/categories.json';




const ReadJsonComponent = () => {


  console.log("nojson", nojson);

  console.log("nojson type of", typeof nojson);

  let jsonString = JSON.stringify(categories);

  console.log("jsonString", jsonString);

  let jsonObject = JSON.parse(JSON.stringify(categories));

  console.log("nojson object", JSON.parse(JSON.stringify(categories)));

  const handleCategory = (id) => {
    console.log("handleCategory");

    console.log("handleCategory id :" + id);

    let fileteredArray = jsonObject.filter( (item) => {
      if (item.id === id){
        console.log("item :" + item);
        console.log("id :" + item.id);
        console.log("item.child-services item.hasOwnProperty:" + item.hasOwnProperty("child-services"));
        console.log("item[child-services]" + item["child-services"]);
      }

      return (item.id === id);
      

    }
    
    );

    console.log(fileteredArray);

  }

  return (<>
    <h1>Read Json.. </h1>

    <h4>{jsonString}</h4>

    {
      jsonObject.map( (category, index) => {
        console.log(category.service_name);
        return (
        <div key={index}>
          < div > <button  onClick={() => handleCategory(category.id)}> {category.service_name} </button> </div>
        </div>
        );

      }
      )


    }





  </>);


}


export default ReadJsonComponent;