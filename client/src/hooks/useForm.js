import { useState } from "react";

export const useForm = (init) => {
  const [values, setValues] = useState(init);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues((prev) => ({ ...prev, success: true }));
  };

  return [values, handleChange, handleSubmit];
};
