import React, { useState } from 'react';

export default function Search() {
  const [category, setCategory] = useState('');
  return (
    <div>
      <form>
        <label htmlFor="category">
          Category:
          <input
            id="category"
            type="text"
            value={category}
            placeholder="Which category ..."
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
