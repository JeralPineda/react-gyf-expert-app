import { useState } from 'react';

import { GifGrid, AddCategory } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch Man']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>

      <AddCategory
        //
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
