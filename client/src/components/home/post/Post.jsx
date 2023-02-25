import React from 'react'
import { Box, Typography, styled} from '@mui/material';

const Container = styled(Box)`
border: 1px solid #d3cede;
`;

const Image = styled('img')`
 width: '100%'
`;

const Post = ({post}) => {
  return (
    <Container>
        <Image src={post.picture} alt="blog" />
        <Typography>{post.categories}</Typography>
        <Typography>{post.title}</Typography>
        <Typography>{post.username}</Typography>
        <Typography>{post.description}</Typography>
    </Container>
  )
}

export default Post;