import React,{useEffect} from 'react'
import { useStateProvider } from '../context/stateWrap'


const Stories = () => {

    const {isLoading, hits} = useStateProvider();

    // console.log(hits);

   
    // if(isLoading){
    //     return (
    //         <>
    //             <h1>LOADING...</h1>
    //         </>
    //     )
    // }

    // useEffect(()=>{
    //     console.log(state,'AFTER 5 SECONDS');
    //   },[state]);


  return (
    <>
    <div className="stories">
        { isLoading ? <h1>LOADING</h1> :
            hits.map((value)=>{
                const {title,author,objectID,url} = value;
                return (
                <>
                <div className="card" key={objectID}>
                    <h3>{title}</h3>
                    <p>
                        By <span>{author}</span> |
                    </p>
                    <div className="card_button">
                        <a href={url} target="_blank">
                            Read more
                        </a>
                        <a href="#">Remove</a>
                    </div>
                </div>
                </>
                )
            })
        }
    </div>
    </>
  )
}

export default Stories