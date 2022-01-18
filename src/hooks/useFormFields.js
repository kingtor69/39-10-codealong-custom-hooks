import { useState } from 'react';

const useFormFields = (initialState) => {
	const [ formData, setFormData ] = useState(initialState);

	const handleChange = (e) => {
		setFormData((formData) => ({
			...formData,
			[e.target.name]: e.target.value
		}));
	};

	return [ formData, handleChange ];
};

export default useFormFields;
