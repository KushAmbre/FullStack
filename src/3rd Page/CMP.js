import React from 'react';

const CMP = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor : 'Black' }}>
         <h1 className='KK'> KK Recipe Court</h1>
      <img
        src="https://eu.ooni.com/cdn/shop/articles/20220211142754-margherita-9920.jpg?crop=center&height=800&v=1644590277&width=800"
        className="KK"
        style={{ width: '400px', height: '300px', margin: '0 auto' }}
        alt="..."
      />

      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}className='JJ'>
        <h2>Ingredients:</h2>

        <h3>For the Pizza Dough:</h3>
        <ul>
          <li>2 1/4 teaspoons active dry yeast</li>
          <li>1 cup warm water (110°F/43°C)</li>
          <li>1 teaspoon sugar</li>
          <li>2 1/2 cups all-purpose flour</li>
          <li>1 teaspoon salt</li>
          <li>2 tablespoons olive oil</li>
        </ul>

        <h3>For the Pizza Sauce:</h3>
        <ul>
          <li>1 can (14 ounces) crushed tomatoes</li>
          <li>2 cloves garlic, minced</li>
          <li>1 teaspoon dried oregano</li>
          <li>Salt and black pepper to taste</li>
        </ul>

        <h3>For Topping:</h3>
        <ul>
          <li>8 ounces fresh mozzarella cheese, sliced</li>
          <li>Fresh basil leaves</li>
          <li>2 tablespoons extra-virgin olive oil</li>
        </ul>

        <h2>Instructions:</h2>

        <h3>Prepare the Pizza Dough:</h3>
        <ol>
          <li>In a small bowl, combine the warm water, sugar, and active dry yeast. Let it sit for about 5-10 minutes, or until it becomes frothy.</li>
          <li>In a large mixing bowl, combine the flour and salt. Add the yeast mixture and olive oil. Mix until a dough forms.</li>
          <li>Knead the dough on a lightly floured surface for about 5-7 minutes until it becomes smooth and elastic.</li>
          <li>Place the dough in an oiled bowl, cover with a clean kitchen towel, and let it rise in a warm place for about 1-2 hours, or until it has doubled in size.</li>
        </ol>

        <h3>Prepare the Pizza Sauce:</h3>
        <ol>
          <li>In a small saucepan, heat the crushed tomatoes over medium heat.</li>
          <li>Add minced garlic, dried oregano, salt, and black pepper. Simmer for 10-15 minutes until the sauce thickens. Remove from heat and let it cool.</li>
        </ol>

        <h3>Assemble and Bake the Margherita Pizza:</h3>
        <ol>
          <li>Preheat your oven to the highest temperature it can go (usually around 500°F/260°C).</li>
          <li>Divide the pizza dough into two equal portions. Roll out each portion into a thin round pizza crust on a floured surface.</li>
          <li>Transfer the pizza crusts to a baking sheet or pizza stone.</li>
          <li>Spread the pizza sauce evenly over the crusts, leaving a small border around the edges.</li>
          <li>Arrange the sliced fresh mozzarella cheese over the sauce.</li>
          <li>Bake the pizzas in the preheated oven for 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.</li>
          <li>Remove the pizzas from the oven and top with fresh basil leaves.</li>
          <li>Drizzle extra-virgin olive oil over the top.</li>
          <li>Slice the Margherita pizzas and serve immediately.</li>
        </ol>
      </div>
    </div>
  );
};

export default CMP;
