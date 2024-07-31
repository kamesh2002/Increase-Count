import React, { useEffect,useState } from 'react'
import axios from "axios";


function Posts() {
    const [posts,setPosts] = useState([]);


    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>setPosts(response.data))
        
        .catch(err=>console.log(err));

    },[]);





  return (
    <div style={{display:"flex",flexWrap:"wrap",height:"100vh",justifyContent:'space-around'}}>
        { posts.map((post,index)=>(
        <div style={{width:"200px",border:"2px solid black",margin:10}}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>

    ))}
    </div>
  );
}

export default Posts