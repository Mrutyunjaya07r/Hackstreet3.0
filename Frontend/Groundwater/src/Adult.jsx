import React from 'react';
import { Link } from 'react-router-dom';


function Adult() {
  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-3">
          <div className="card text-center shadow-sm">
            <img src="learning.jpeg" className="card-img-top" style={{height:"300px"}} alt="Learning" />
            <div className="card-body">
              <h5 className="card-title">Learning</h5>
              <Link to='/showarticle' className="btn btn-primary">Learning</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card text-center shadow-sm">
            <img src="https://tse3.mm.bing.net/th/id/OIP.WrpOmKAfey9iVF3EQDS3JQHaGm?pid=ImgDet&w=207&h=184&c=7&dpr=1.6" style={{height:"300px"}} className="card-img-top" alt="Beginner Level" />
            <div className="card-body">
              <h5 className="card-title">Beginner Level</h5>
              <Link to='/level1' className="btn btn-primary">Beginner Level</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card text-center shadow-sm">
            <img src="https://tse3.mm.bing.net/th/id/OIP.t3zCv4O79iffkAmLcAqiEQHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.6" style={{height:"300px"}} className="card-img-top" alt="Intermediate Level" />
            <div className="card-body">
              <h5 className="card-title">Intermediate Level</h5>
              <Link to='/level2' className="btn btn-primary">Intermediate Level</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card text-center shadow-sm">
            <img src="https://static.vecteezy.com/system/resources/previews/004/363/919/non_2x/level-up-emblem-element-game-development-graphic-vector.jpg" style={{height:"300px"}} className="card-img-top" alt="Advanced Level" />
            <div className="card-body">
              <h5 className="card-title">Advanced Level</h5>
              <Link to='/level3' className="btn btn-primary">Advanced Level</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adult;