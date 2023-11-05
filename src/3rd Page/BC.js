import React from 'react';

const BC = () => {
  return (
    <div style={{ textAlign: 'center' , backgroundColor : 'Black'}}>
       <h1 className='KK'> KK Recipe Court</h1>
      <img
        className='KK'
        src="https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg"
        style={{ width: '400px', height: '300px', margin: '0 auto' }}
        alt="..."
      />
      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}className='JJ'>
        <h2>Ingredients:</h2>
        <h3>For Marinating the Chicken:</h3>
        <ul>
          <li>500 grams boneless chicken, cut into bite-sized pieces</li>
          <li>1/4 cup yogurt</li>
          <li>1 tablespoon ginger-garlic paste</li>
          <li>1/2 teaspoon red chili powder</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon garam masala</li>
          <li>1 tablespoon lemon juice</li>
          <li>Salt to taste</li>
        </ul>

        <h3>For the Sauce:</h3>
        <ul>
          <li>2 tablespoons butter</li>
          <li>1 tablespoon oil</li>
          <li>1 onion, finely chopped</li>
          <li>1 tablespoon ginger-garlic paste</li>
          <li>1 teaspoon red chili powder (adjust to your spice preference)</li>
          <li>1 teaspoon garam masala</li>
          <li>1 teaspoon ground coriander</li>
          <li>1 teaspoon ground cumin</li>
          <li>1 cup tomato puree (from about 3-4 tomatoes)</li>
          <li>1/2 cup heavy cream</li>
          <li>1/4 cup cashew paste (blend cashews with a little water to make a paste)</li>
          <li>Salt to taste</li>
          <li>1 tablespoon honey or sugar (adjust to taste)</li>
          <li>Fresh coriander leaves for garnish</li>
        </ul>

        <h2>Instructions:</h2>

        <h3>Marinate the Chicken:</h3>
        <ol>
          <li>In a bowl, mix together yogurt, ginger-garlic paste, red chili powder, turmeric, garam masala, lemon juice, and salt.</li>
          <li>Add the chicken pieces and ensure they are well coated with the marinade.</li>
          <li>Cover and refrigerate for at least 30 minutes, or longer for better flavor.</li>
        </ol>

        <h3>Cook the Chicken:</h3>
        <ol>
          <li>Heat a large pan or skillet over medium-high heat.</li>
          <li>Add the butter and oil.</li>
          <li>Add the marinated chicken and cook until it's no longer pink. Remove the chicken and set it aside.</li>
        </ol>

        <h3>Prepare the Sauce:</h3>
        <ol>
          <li>In the same pan, add chopped onions and sauté until they turn translucent.</li>
          <li>Add ginger-garlic paste and cook for a few more minutes until the raw smell disappears.</li>
          <li>Add red chili powder, garam masala, ground coriander, and ground cumin. Cook for a couple of minutes, stirring constantly.</li>
          <li>Add tomato puree and cook until the oil separates from the mixture.</li>
          <li>Stir in the heavy cream and cashew paste. Simmer for a few minutes.</li>
        </ol>

        <h3>Combine the Chicken and Sauce:</h3>
        <ol>
          <li>Return the cooked chicken to the pan and simmer for another 5-7 minutes, allowing the flavors to meld.</li>
          <li>Add honey or sugar to balance the flavors. Adjust the salt and spices to your taste.</li>
        </ol>

        <h3>Serve:</h3>
        <ul>
          <li>Garnish with fresh coriander leaves.</li>
          <li>Serve your homemade Butter Chicken with naan, rice, or your choice of bread.</li>
        </ul>
      </div>
    </div>
  );
};

export default BC;
