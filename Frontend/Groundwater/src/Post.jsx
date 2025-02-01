import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css'; // Import the CSS file

function Post() {
  let navigate = useNavigate();
  const [textbody, setTextbody] = useState("");

  const postData = async () => {
    let result = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("SIH2024")
      },
      body: JSON.stringify({
        textbody: textbody
      })
    });
    result = await result.json();
    console.log(result);
    alert('Post successfully');
    navigate('/showpost');
  };

  return (
    <div className="maindiv">
      <h1>Create your Suggestion</h1>
      <div className="con">
        <textarea
          name="Fill your suggestion"
          className="textarea"
          placeholder='Enter your suggestion about groundwater conservation'
          value={textbody}
          onChange={(e) => { setTextbody(e.target.value) }}
        ></textarea>
        <br />
        <br />
        <input
          type="submit"
          className="submit-button"
          value="Submit"
          onClick={() => { postData() }}
        />
      </div>
    </div>
  );
}

export default Post;
