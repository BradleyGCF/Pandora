import React, { useState } from 'react';
import { ButtonPrimary, InputDefSmIcon } from '../../main';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 m-auto">
      <InputDefSmIcon
      children="Label PlaceHolder"
      type="text"
      value={formData.lastName}
      onChange={handleChange}
      />
      <InputDefSmIcon
        children="Label PlaceHolder"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
      />
      <ButtonPrimary className='w-30' children="Button" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
