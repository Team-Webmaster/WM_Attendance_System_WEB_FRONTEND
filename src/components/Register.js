import React, { useRef } from 'react';

function Register(props) {

    const nameRef = useRef('');
    const nicRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const addressRef = useRef('');
    const telephoneRef = useRef('');
    let userType=0;
    const submitFormHandler = (event) => {
        event.preventDefault();
        const userData = {
            name: nameRef.current.value,
            nic: nicRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            address: addressRef.current.value,
            telephone: telephoneRef.current.value,
            profile_pic: "1234.png",
            type:userType,
            no_of_annual_leaves: 20
        };
        props.submitHandler(userData);
    }


    return (
        <div>
            <form onSubmit={submitFormHandler} >
                <div>
                    <label>Name :</label>
                    <input type='text' ref={nameRef} />
                </div>
                <div>
                    <label>NIC :</label>
                    <input type='text' ref={nicRef} />
                </div>
                <div>
                    <label>E-mail :</label>
                    <input type='email' ref={emailRef} />
                </div>
                <div>
                    <label>Password :</label>
                    <input type='password' ref={passwordRef} />
                </div>
                <div>
                    <label>Confirm Password :</label>
                    <input type='password' ref={confirmPasswordRef} />
                </div>
                <div>
                    <label>Address :</label>
                    <input type='text' ref={addressRef} />
                </div>
                <div>
                    <label>Telephone :</label>
                    <input type='text' ref={telephoneRef} />
                </div>
                <div>
                    <button type='submit' >Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
