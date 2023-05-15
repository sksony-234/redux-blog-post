import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loadUsers } from '../redux/action';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PostListing from './PostListing';


const Home1 = (term) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    return (
        <div className="home">
            <div className="add-user">
                <Button variant="contained" color="primary"
                    onClick={() => navigate('/adduser')}
                >Add Post</Button>
            </div>
            <PostListing filter={term}/>
        </div>
    )
}

export default Home1