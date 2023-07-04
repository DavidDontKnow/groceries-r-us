import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav>
        <h1>Groceries-R-Us</h1>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/recipes">Recipes</a>
          </li>
          <li>
            <a href="/stores">Stores</a>
          </li>
        </ul>
      </nav>

      <section>
        <h2>About</h2>
        <p>
          Groceries-R-us is a website that helps you find the best recipes, and
          the best stores to buy the ingredients from.
        </p>
      </section>

      <section className="p-10">
        <h2>featured recipe</h2>
        <div className="featured text-center ">
          <h3>Chicken Parmesan</h3>
          <Image
            src="/chicken-parm.jpg"
            alt="Chicken Parmesan"
            width={300}
            height={300}
          />
          <div className="recipe-info">
            <h3>Ingredients</h3>
            <ul>
              <li>4 skinless, boneless chicken breast halves</li>
              <li>1 cup all purpose flour</li>
              <li>2 large eggs, beaten</li>
              <li>1 cup Italian seasoned bread crumbs</li>
              <li>1/2 cup grated Parmesan cheese</li>
              <li>2 cups marinara sauce</li>
              <li>1 cup shredded mozzarella cheese</li>
              <li>1/4 cup chopped fresh basil</li>
              <li>1/2 cup olive oil</li>
              <li>salt and pepper to taste</li>
            </ul>
            <h3>Directions</h3>
            <ol>
              <li>
                Preheat oven to 350 degrees F (175 degrees C). Lightly grease a
                baking sheet.
              </li>
              <li>
                place the chicken breasts between the two sheets of plastic wrap
                and pound them to an even thickness, about 1/2 inch (1.25 cm)
                thick
              </li>
              <li>Season the chicken breasts with salt and pepper.</li>
              <li>
                Set up three shallow bowls or plates. In the first bowl, place
                the flour. In the second bowl, beat the eggs. In the third bowl,
                mix together the breadcrumbs and grated Parmesan cheese.
              </li>
              <li>
                Dredge each chicken breast in the flour, shaking off any excess.
                Then dip it into the beaten eggs, allowing any excess to drip
                off. Finally, coat the chicken in the breadcrumb-Parmesan
                mixture, pressing it gently to adhere.
              </li>
              <li>
                Heat a large skillet over medium-high heat and add enough olive
                oil to coat the bottom of the pan. Place the breaded chicken
                breasts in the skillet and cook until golden brown on both
                sides, about 3-4 minutes per side. You may need to cook them in
                batches depending on the size of your skillet. Remove the cooked
                chicken breasts and place them on a paper towel-lined plate to
                drain any excess oil.
              </li>
              <li>
                In a baking dish, spread a thin layer of marinara sauce to cover
                the bottom. Place the browned chicken breasts on top of the
                sauce.
              </li>
              <li>
                Spoon additional marinara sauce over each chicken breast,
                covering them completely.
              </li>
              <li>
                Sprinkle the shredded mozzarella cheese over the chicken
                breasts.
              </li>
              <li>
                Place the baking dish in the preheated oven and bake for about
                20-25 minutes, or until the chicken is cooked through and the
                cheese is melted and bubbly.
              </li>
              <li>
                Remove the chicken Parmesan from the oven and let it rest for a
                few minutes.
              </li>
              <li>Garnish with chopped fresh basil leaves before serving.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
