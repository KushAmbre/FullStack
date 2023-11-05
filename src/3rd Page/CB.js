import React from 'react';

const CB = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor : 'Black' }}>
       <h1 className='KK'> KK Recipe Court</h1>
      <img
        src="https://geekrobocook.com/wp-content/uploads/2021/05/Muradabadi-chicken-biryani.jpg"
        className="KK"
        style={{ width: '400px', height: '300px', margin: '0 auto' }}
        alt="..."
      />

      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}className='JJ'>
        <h2>Ingredients:</h2>
        <h3>For Marinating the Chicken:</h3>
        <ul>
          <li>500 grams chicken, cut into pieces</li>
          <li>1 cup yogurt</li>
          <li>1 tablespoon ginger-garlic paste</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1 teaspoon red chili powder</li>
          <li>1 teaspoon garam masala</li>
          <li>1 tablespoon lemon juice</li>
          <li>Salt to taste</li>
        </ul>

        <h3>For the Rice:</h3>
        <ul>
          <li>2 cups basmati rice</li>
          <li>Water for cooking rice</li>
          <li>2-3 green cardamom pods</li>
          <li>2-3 cloves</li>
          <li>1-inch cinnamon stick</li>
          <li>Salt to taste</li>
        </ul>

        <h3>For the Biryani:</h3>
        <ul>
          <li>2 tablespoons oil</li>
          <li>2 tablespoons ghee (clarified butter)</li>
          <li>1 large onion, thinly sliced</li>
          <li>2 tomatoes, chopped</li>
          <li>2 green chilies, slit</li>
          <li>1/2 cup fresh coriander leaves, chopped</li>
          <li>1/2 cup fresh mint leaves, chopped</li>
          <li>A pinch of saffron strands soaked in 2 tablespoons of warm milk</li>
        </ul>

        <h2>Instructions:</h2>

        <h3>Marinate the Chicken:</h3>
        <ol>
          <li>In a mixing bowl, combine chicken pieces with yogurt, ginger-garlic paste, turmeric powder, red chili powder, garam masala, lemon juice, and salt. Mix well and let it marinate for at least 30 minutes.</li>
        </ol>

        <h3>Cook the Rice:</h3>
        <ol>
          <li>Wash the basmati rice until the water runs clear.</li>
          <li>In a large pot, bring water to a boil, and add the washed rice, green cardamom pods, cloves, cinnamon stick, and salt.</li>
          <li>Cook the rice until it's 70% cooked (still slightly undercooked), then drain and set it aside.</li>
        </ol>

        <h3>Prepare the Biryani:</h3>
        <ol>
          <li>Heat oil and ghee in a large, heavy-bottomed pot.</li>
          <li>Add the sliced onions and sauté until they turn golden brown.</li>
          <li>Add the marinated chicken and cook until it changes color and is partially cooked.</li>
          <li>Add chopped tomatoes and green chilies. Cook until the tomatoes are soft.</li>
          <li>Add half of the chopped coriander and mint leaves. Mix well.</li>
        </ol>

        <h3>Layer the Biryani:</h3>
        <ol>
          <li>In the same pot, layer half of the partially cooked rice over the chicken mixture.</li>
          <li>Sprinkle the remaining chopped coriander and mint leaves on top.</li>
          <li>Drizzle the saffron milk over the rice for color and flavor.</li>
          <li>Layer the remaining rice on top.</li>
        </ol>

        <h3>Dum Cooking (Slow Cooking):</h3>
        <ol>
          <li>Cover the pot with a tight-fitting lid or seal it with aluminum foil to trap the steam.</li>
          <li>Place the pot on a very low flame (sim) and let it cook for about 20-25 minutes. Alternatively, you can place a tava (griddle) under the pot to distribute heat evenly and prevent burning.</li>
          <li>After 20-25 minutes, turn off the heat and let it sit for another 10 minutes without opening the lid. This allows the biryani to absorb the flavors.</li>
        </ol>

        <h3>Serve:</h3>
        <ul>
          <li>Gently fluff the biryani with a fork, mixing the layers.</li>
          <li>Serve hot with raita or a side salad.</li>
        </ul>
      </div>
    </div>
  );
};

export default CB;
