import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Learning() {
    let [data,setData]=useState([])

    useEffect(()=>{
        showArticle()
    },[])

    const showArticle=async()=>{
        let result=await fetch("http://localhost:3000/getarticle")
        result=await result.json()
        console.log(result);
        setData(result)
    }
  return (
    <div>
        <div className="article">
            <h1 style={{textAlign:"center"}}>Articles</h1>
            {
                data.map((item,index)=>
                    <div className="articles" style={{margin:"20px"}}>
                        <h2>{index+1}.</h2>
                        <h2>{item.articleTitle}</h2>
                        <p>{item.articleText}</p>
                    </div>
                )
            }
            <br />
            <br />
            <div style={{margin:"15px"}}>
            <h2>Learn Through games</h2>
            <button><Link to='/level1'>Play Game</Link></button>
            </div>
           
        </div>
    </div>
  )
}

export default Learning