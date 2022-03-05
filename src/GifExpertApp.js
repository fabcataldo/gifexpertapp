import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One punch"
  ]);

//   const handleAdd = () => {
    //   setCategories([...categories, 'nuevo elemento']);
//     setCategories( (cats) => [...cats, 'nuevo elemento ']);
//   };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {
          categories.map((category, index) => 
            <GifGrid 
              key={category+index}
              category={category}></GifGrid>
        )}
      </ol>
    </>
  );
};
