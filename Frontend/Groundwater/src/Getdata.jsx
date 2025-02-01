import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Getdata() {
    const [data, setData] = useState([]);

    useEffect(() => {
        showData();
    }, []);

    const showData = async () => {
        let result = await fetch("http://localhost:3000/getpost");
        result = await result.json();
        console.log(result);
        setData(result);
    };

    return (
        <div className="container text-center py-5">
            <h1>Suggestion Box</h1>
            <div className="row justify-content-center">
                {data.map((item) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
                        <div className="card shadow-sm p-3">
                            <h2 className="h5">{item.textbody}</h2>
                            <h3 className="h6 text-muted">{item.createAt}</h3>
                            <h3 className="h6 text-primary">Posted by: {item.postedBy.fullname}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-primary">
                    <Link to='/' className="text-white text-decoration-none">Home</Link>
                </button>
            </div>
        </div>
    );
}

export default Getdata;
