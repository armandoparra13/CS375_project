import React, { useState } from 'react';
import './SignUpPage.css';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        password: '',
        confirmPassword: '',
        gender: 'male'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();

        const dataToSend = {
            username: formData.name,
            email: formData.email,
            password: formData.password
        };

        try {
            const response = await axios.post('/signup', dataToSend);

            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        console.log(formData);
    };

    return (
        <div className="container">
            <h2>Harmony Plate Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input className="custom-input" id="name" name="name" required onChange={handleChange} value={formData.name} />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
                </div>
                <div className="input-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input className="custom-input" type="date" id="dob" name="dob" required onChange={handleChange} value={formData.dob} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input className="custom-input" id="password" name="password" required onChange={handleChange} value={formData.password} />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Retype Password:</label>
                    <input className="custom-input" id="confirmPassword" name="confirmPassword" required onChange={handleChange} value={formData.confirmPassword} />
                </div>
                <div className="input-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" onChange={handleChange} value={formData.gender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="nonbinary">Nonbinary</option>
                    </select>
                </div>
                <div className="input-group">
                    <button className="input-group-button" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;