import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    //  setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        //
        type="text"
        placeholder="Categoría"
        value={inputValue}
        onChange={onChange}
      />
    </form>
  );
};
