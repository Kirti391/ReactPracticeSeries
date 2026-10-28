import React, { useState } from 'react'
import Comments from './Comments';

function CommentForm({addNewComment}) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    })
    let handleInputChange = (e) => {
        console.log(e.target.value);
        setFormData((currData) => {
            return { ...currData, [e.target.name]: e.target.value }
        })
    }
    let handleSubmitEvent = (e) => {
        console.log(formData);
        addNewComment(formData);
        e.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5,

        })
    }
    return (
        <div>
            <h4>Give a comment!</h4>
            <form action="" onSubmit={handleSubmitEvent}>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="text" placeholder='Enter username' value={formData.username} onChange={handleInputChange} />
                <br></br>
                <br></br>
                <br></br>
                <label htmlFor="remarks">Remarks</label>
                <textarea id="remarks" name="remarks" placeholder='Add few remarks...' value={formData.remarks} onChange={handleInputChange}>Remarks</textarea>
                <br></br>
                <br></br>
                <br></br>
                <label htmlFor="rating">Ratings</label>
                <input id="rating" type="number" name="rating" placeholder='rating' min={1} max={5} value={formData.rating} onChange={handleInputChange} />
                <br></br>
                <br></br>
                <br></br>
                <button>Add Comment</button>
            </form>
            {/* <Comments props={props}/> */}
        </div>
    )
}

export default CommentForm
