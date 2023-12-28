import React, { useReducer } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useStateProvider } from '../context/stateWrap';
import { initialState,reducer } from '../reducer/reducer';

// import { dataCall } from './fetch';
import { API } from './API';


const Search = () => {

  const {hits,isLoading} = useStateProvider();

//   // let [isLoading,setIsLoading] = useState(true);


//  const ss = 'ascd';
 

 

// console.log(state);

  // const loader = () => { return dispatch({type : 'loadchange'});}

  // useEffect(()=>{

    

  //     dataCall(`${API}query=${state.query}`);
  //     // console.log(state,'5555')
  // },[]);

  // const [state,dispatch] = useReducer(reducer,initialState);

  // const dataCall = async (url) => {
  //   try {
  
  //       // const [state,dispatch] = useReducer(reducer,initialState);
  //       const response = await fetch(url);
  //       const data = await response.json();
  
  
  //       dispatch({type : 'loadchange'}); 
  //       dispatch({type: 'get_stories',payload : {hits:data.hits }});
  //       // console.log(data.hits,'data11111');
  //    } 
    
  //   catch (error) {
  //       console.log(error);   
  //   }
   
  // };

  //  useEffect(()=>{

  //    dataCall(`${API}query=${state.query}`);
  //   console.log(state,'5555')
  //   },[]);
 
  
 




  return (
    <>
        {/* {isLoading ? <h1>LOADING...</h1> : <div>Stories and 
          {
            hits.map((value)=>{
              return <h4>{value.title}</h4>
            })
          }
           </div>} */}

    </>
  )
}

export default Search