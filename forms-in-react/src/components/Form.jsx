import React, { useState } from 'react'

const Form = () => {
    // const [username, setUsername]=useState("");
    // const [fullname, setFullname]=useState("");
    // function changeUsername(e){
    //     console.log("username is changed");
    //    setUsername(e.target.value);
    // }
    // function changeFullname(e){
    //     console.log("full name is changed");
    //     setFullname(e.target.value);
    // }

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
    })
    let handleInputChange = (e) => {
        let fieldName = e.target.name;
        console.log(fieldName);
        let newVal = e.target.value;
        console.log(newVal);

        setFormData((currData) => {

            return { ...currData,[fieldName]: newVal };
        })
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
        })

    }
    return (

        <div>
            <form action="" onChange={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="userName" id="username" placeholder='Enter username...' onChange={handleInputChange} value={formData.userName} />
                <label htmlFor="fullname">Full name</label>
                <input type="text" name="fullName" id="fullname" placeholder='Enter full name...' onChange={handleInputChange} value={formData.fullName} />

                <button >Submit</button>
            </form>

        </div>
    )
}

export default Form
