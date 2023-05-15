import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from './PostCard';




const PostListing = (filter) => {
  const { users } = useSelector(state => state.data);
  const {term} = filter.filter;
  return (
    <div>
        <div className="post-list">
            {!users && <div>
                <h3>Add Some Posts...</h3>
            </div>}
            {users && users.filter((item)=>{
              return term.toLowerCase()===""?item:
              item.title.toLowerCase().includes(term);
            }).map((post) => (
                <PostCard key={post.id} data={post} />
                
            ))}
        </div>
    </div>
  )
}

export default PostListing