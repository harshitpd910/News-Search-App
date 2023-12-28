// import React, { useContext } from "react";
// import { useReducer } from "react";
// import { createContext } from "react";

const initialState = {
    isLoading:true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits:[],
};  


const reducer = (state,action) => {

    switch(action.type){
        case 'loadchange':{
            return {

                ...state,
                isLoading:false,
                
            };
        }

        case 'get_stories':{
            return{
                ...state,
                hits: action.payload.hits,
               
            };
        }
    }

}

// const dataGet = createContext();

// // const[state,dispatch] = useReducer(reducer,initialState);



// const StateWrap = ({children,initialState,reducer}) => {

//     // console.log(state);
//     return(
//     <dataGet.Provider value = {{initialState,reducer}}>
//         {children}
//     </dataGet.Provider>
//     )

// };

// const useStateProvider = () => useContext(dataGet);


// export {initialState,reducer,StateWrap,useStateProvider}

export {initialState,reducer}