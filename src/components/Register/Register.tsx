import React from "react";
import './Register.sass';

import axios from 'axios';
import { useForm } from 'react-hook-form';

import { URI } from "../../constants/constants";

function Register() {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = async (values: any) => {
        console.log('values :>> ', values);
        const resposePostForm = await axios.post(URI, values)
        console.log('resposePostForm', resposePostForm)
    }

    // const saveForm = async () => {
    //     const resposePostForm = await axios.post(URI, {hello: 'world'})
    //     console.log('resposePostForm', resposePostForm)
    // }

    return (
        <div className="container">
            <h1>Anywhere in your app!</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__item">
                    <label
                        htmlFor="email"
                    >Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        ref={register({
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "iInvalid email address"
                            }
                        })}
                        />
                    <span>{errors.email && errors.email.message}</span>
                </div>
                <div className="form__item">
                    <label
                        htmlFor="password"
                    >Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={register({ required: true, minLength: 4 })}
                        />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
