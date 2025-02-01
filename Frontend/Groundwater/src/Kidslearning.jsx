import React from 'react'
import { Link } from 'react-router-dom'

function Kidslearning() {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Learning</h1>
        <div className="article">
            <div className="articlediv">
                <img src="img1.jpg"  alt="" style={{height:"200px",width:"300px",margin:"20px"}} />
                <p>The image provides a cross-sectional view of the ground, illustrating how groundwater is stored and accessed. It shows rain infiltrating the soil, percolating through layers of sand, gravel, and rock, and eventually reaching the water table. The water table marks the upper boundary of the saturated zone, where all pores and fractures in the ground are filled with water.</p>
            </div>
            <div className="articlediv">
                <p>The diagram illustrates the intricate journey of water through the groundwater system. Precipitation replenishes surface water bodies and infiltrates the ground, recharging aquifers. Groundwater flows through these underground formations, eventually discharging into springs, rivers, or the ocean.</p>
             <img src="img2.jpg" alt="" style={{height:"200px",width:"300px",margin:"20px"}} />
            </div>
            <div className="articlediv">
                <img src="img3.jpg"  alt="" style={{height:"200px",width:"300px",margin:"20px"}} />
                <p>Groundwater recharge is also known as deep percolation or deep drainage. It undergoes the hydrologic process, which moves surface water to groundwater. It is a primary method where water enters an aquifer. The recharge occurs at plant roots and is often known as a flux to the water table surface</p>
            </div>
            <div className="articlediv">
                <p>The groundwater is fresher and less prone to pollution. So, it is commonly used as a water supply for the public. Groundwater makes up about twenty percent of the freshwater supply of the entire world’s water, including permanent ice and oceans.</p>
             <img src="img4.jpg" alt="" style={{height:"200px",width:"300px",margin:"20px"}} />
            </div>
        </div>
        <h1 style={{textAlign:"center"}}>Learning Tutorial</h1>
        <div className="video" style={{border:"1px solid black",padding:"10px"}}>
            <video src="vid.mp4" style={{height:"500px",width:"700px",marginLeft:"250px",borderRadius:"10px",border:'2px soilid black',boxShadow:"2px 2px 3px 3px gray"}} controls></video>
        </div>
        <div className="btn" style={{textAlign:"center"}}>
            <button><Link to='/kids' style={{color:"white"}} >Missing Word Game</Link></button>
        </div>
    </div>
  )
}

export default Kidslearning