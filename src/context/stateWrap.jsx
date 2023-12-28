import React, { useContext,useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { API } from "../components/API";


const dataGet = createContext();




const StateWrap = ({children}) => {

    // const[state,dispatch] = useReducer(reducer,initialState);

    


    // const dataCall = async (url) => {
    //     try {
      
    //         // const [state,dispatch] = useReducer(reducer,initialState);
    //         const response = await fetch(url);
    //         const data = await response.json();
      
      
    //         dispatch({type : 'loadchange'}); 
    //         dispatch({type: 'get_stories',payload : {hits:data.hits }});
    //         // console.log(data.hits,'data11111');
    //      } 
        
    //     catch (error) {
    //         console.log(error);   
    //     }
       
    //   };

    //    useEffect(()=>{

    

    //      dataCall(`${API}query=${state.query}`);
    //   console.log(state,'5555')
    //     },[]);
    // console.log(state);

    const [state,dispatch] = useReducer(reducer,initialState) ;

//   console.log(state);

  const dataCall = async (url) => {
    try {
  
        // const [state,dispatch] = useReducer(reducer,initialState);
        const response = await fetch(url);
        const data = await response.json();
  
  
        dispatch({type : 'loadchange'}); 
        dispatch({type: 'get_stories',payload : {hits:data.hits }});
        // console.log(data.hits,'data11111');
     } 
    
    catch (error) {
        console.log(error);   
    }
   
  };

   useEffect(()=>{

     dataCall(`${API}query=${state.query}`);
    // console.log(state,'5555')
    },[]);

    return(
    <dataGet.Provider value={{...state}} >
        {children}
    </dataGet.Provider>
    )

};

const useStateProvider = () => useContext(dataGet);

export {StateWrap,useStateProvider}

