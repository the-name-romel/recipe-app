import React, { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const api = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=9a8900a03b5c47a9936deac4161263a4&number=9"
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe) => (
        <div key={recipe.title}><p>{recipe.title}</p></div>
      ))}
    </div>
  );
};

export default Popular;
