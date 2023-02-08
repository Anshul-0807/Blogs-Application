import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const Container = styled(Box)`
margin: 50px 100px
`

const Image = styled('img')({
  width: '100%',
  height: '50vh',
  objectFit: 'cover'
})

const StyledFormControl = styled(FormControl)`
margin-top: 10px;
display: flex;
flex-direction: row;
`
const InputTextFeild = styled(InputBase)`
 flex: 1;
 margin: 0 30px;
 font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
width: 100%;
margin-top: 50px;
font-size: 18px;
border: none;
 &:focus-visible{
 outline: none;
}
`;

const initialPost = {
  title: '',
  description: '',
  picture: '',
  username: '',
  categories: '',
  createdDate: new Date()

}

const CreatePost = () => {

  const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState('')

  useEffect(() => {
    const getImage = () => {
      if(file){
        const data= new FormData();
        data.append("name", file.name);
        data.append("file", file);
      }
    }
  }, [])
  

  const handleChange = (e) => {
   setPost({...post, [e.target.name]: e.target.value})
  }

  return (
   <Container>
    <Image src={url} alt="banner"/>

    <StyledFormControl>
    <label htmlFor='fileInput'>
      <Add fontSize='large' color='action'/>
    </label>
      <input
       type="file" 
        id='fileInput'
        style={{display: 'none'}}
        onChange={(e) => setFile(e.target.files[0]) }
       />
       <InputTextFeild placeholder='Title' onChange={(e)  => handleChange(e)} name="title" />
       <Button variant='contained'>Publish</Button>
    </StyledFormControl>

   <Textarea 
    minRows={5}
    placeholder='Tell your story.......'
    onChange={(e)  => handleChange(e)}
    name="descreption"
   />
   </Container>
  )
}

export default CreatePost;