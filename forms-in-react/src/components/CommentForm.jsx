import React, { useState } from 'react'
import Comments from './Comments';
import {useFormik} from 'formik';

function CommentForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // })

     const validate = (values) => {
        const errors = {};

        if (!values.username.trim()) {
            errors.username = "Username cannot be empty";
        }

        if (!values.remarks.trim()) {
            errors.remarks = "Remarks cannot be empty";
        }

        if (values.rating < 1 || values.rating > 5) {
            errors.rating = "Rating must be between 1 and 5";
        }

        return errors;
    };

    const formik=useFormik({
        initialValues:{
            username:'',
            remarks:'',
            rating:5,
        },validate, onSubmit:values=>{
            alert(JSON.stringify(values,null,2));
        }
    })
    let handleInputChange = (e) => {
        console.log(e.target.value);
        setFormData((currData) => {
            return { ...currData, [e.target.name]: e.target.value }
        })
    }

    let [isValid, setIsValid]=useState(true);
    let handleSubmitEvent = (e) => {

        if(!formData.username){
            console.log("username is null");
            setIsValid(false);
            e.preventDefault();
            return;
        }

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
            {/* <form action="" onSubmit={handleSubmitEvent}> */}
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                {/* <input id="username" name="username" type="text" placeholder='Enter username' value={formData.username} onChange={handleInputChange} /> */}
                <input id="username" name="username" type="text" placeholder='Enter username' value={formik.values.username} onChange={formik.handleChange} />
                {/* {!isValid && <p style={{color:"red"}}>Username cannot be empty</p>} */}
                {formik.errors.username?<p style= {{color:"red"}}>{formik.errors.username}</p>:null}
                <br></br>
                <br></br>
                <br></br>
                <label htmlFor="remarks">Remarks</label>
                {/* <textarea id="remarks" name="remarks" placeholder='Add few remarks...' value={formData.remarks} onChange={handleInputChange}>Remarks</textarea> */}
                 <textarea id="remarks" name="remarks" placeholder='Add few remarks...' value={formik.values.remarks} onChange={formik.handleChange}>Remarks</textarea>
                   {formik.errors.remarks &&
                    <p style={{ color: "red" }}>
                        {formik.errors.remarks}
                    </p>
                }
                <br></br>
                <br></br>
                <br></br>
                <label htmlFor="rating">Ratings</label>
                {/* <input id="rating" type="number" name="rating" placeholder='rating' min={1} max={5} value={formData.rating} onChange={handleInputChange} /> */}
                   <input id="rating" type="number" name="rating" placeholder='rating' min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} />
                <br></br>
                <br></br>
                <br></br>
                <button type='submit'>Add Comment</button>
            </form>
            {/* <Comments props={props}/> */}
        </div>
    )
}

export default CommentForm
