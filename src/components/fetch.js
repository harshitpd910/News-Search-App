// import { useReducer } from "react";
// import { initialState,reducer } from "../reducer/reducer";




// const dataCall = async (url) => {
//     try {

//         const [state,dispatch] = useReducer(reducer,initialState);
//         const response = await fetch(url);
//         const data = await response.json();

//         console.log(data);

//         dispatch({type : 'loadchange'});        
//     } 
    
//     catch (error) {
//         console.log(error);
        
//     }
   
// };

// export {dataCall};