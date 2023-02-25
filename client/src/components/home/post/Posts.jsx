import React from "react";
import { useState, useEffect } from "react";
import { API } from "../../../service/api";
import { Box, Grid } from "@mui/material";

// component
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts();
      if (response.isSuccess) {
        setPosts(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {
        posts && posts.length > 0 ? posts.map( post => ( 
          <Grid item lg = {3} sm={4} xs={12}>
             <Post post={post} />
          </Grid>
      )) : 
        <Box style={{ color: "#878787", margin: "30px 80px", fontsize: 18 }}>
          No data available in display
        </Box>
      }
    </>
  );
};

export default Posts;
