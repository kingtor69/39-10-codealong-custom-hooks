import React from 'react';
import useFormFields from './hooks/useFormFields';

const SignupForm = () => {
    const [formData, handleChange] = useFormFields({
        username: '',
        email: '',
        password: ''
    });

    return (
        <form>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
        </form>
    );
};

export default SignupForm;
