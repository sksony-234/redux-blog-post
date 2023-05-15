import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/action';



const PostCard = (post) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm("Are You Sure you want to delete")) {
            dispatch(deleteUser(id));
        }
    }
    // console.log("User from card", user.data);
    const { name, title, body, id } = post.data;
    let bodyData = body.slice(0, 200)

  return (
    <div className="card-item">
        <Box sx={{ minWidth: 275, maxWidth:325 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {bodyData}...
                    </Typography>
                </CardContent>
                <CardActions style={{display:'flex', justifyContent:"space-between"}}>
                    <Button size="small">Learn More</Button>
                    <Button size="small" style={{ color: "red" }} onClick={() => handleDelete(id)}>Delete</Button>
                </CardActions>
            </Card>
        </Box>
    </div>
  )
}

export default PostCard


