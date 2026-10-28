import React from 'react'
import { useState } from 'react'
import './Comment.css'
import CommentForm from './CommentForm'
function Comments() {
    // console.log(props.username)

    let [comments, setComments] = useState([{
        username: "@kj",
        remarks: "great job!",
        rating: 3
}])
let addNewComment=(comment)=>{
    setComments((currComments)=>[...currComments,comment]);

}
    return (
        <div>
            <h4>All Comments!</h4>
            {comments.map((comment,idx)=>{
                    return (
                    <div className='comment' key={idx}>        
                <span>{comment.remarks}</span>
                &nbsp;
                <span>(rating={comment.rating})</span>
                <p>- {comment.username}</p>
            </div>
               ) })}
            {/* <div className='comment'>        
                <span>{comments[0].remarks}</span>
                &nbsp;
                <span>(rating={comments[0].rating})</span>
                <p>- {comments[0].username}</p>
            </div> */}

            <hr />
            <CommentForm addNewComment={addNewComment}/>
        </div>
    )
}

export default Comments
