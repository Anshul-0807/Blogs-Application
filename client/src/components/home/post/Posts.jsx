import React from 'react'
import { useState, useEffect} from 'react';
import {API} from '../../../service/api';


const Posts = () => {

   const [posts , setPosts] = useState([]);

    useEffect(() => {
     const fetchData = async () => {
      let response =  await API.getAllPosts();
       if(response.isSuccess){
        setPosts(response.data);
       }
     }
     fetchData()
    }, [])
    

  return (
   <>
    {
        posts && posts.length > 0 ? posts.map(post => (
            <div>hello</div>
        )) : <div>No data available in display</div>
    }
   </>
  )
}

export default Posts;