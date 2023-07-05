import React from "react";
import Image from "next/image";

const RecipesPage = () => {
  return (
    <section>
      <div>
        <h1>Recipes</h1>
        <p>this is the recipes page</p>
      </div>

      <div className="featured text-center ">
        <h3>Chicken Parmesan</h3>
        <Image
          src="/chicken-parm.jpg"
          alt="Chicken Parmesan"
          width={500}
          height={500}
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
              Preheat oven to 350 degrees F (175 degrees C).
              <strong>Lightly grease a</strong>
            </li>
            <li>
              Heat olive oil in a large skillet over medium-high heat. While oil
              is heating, place flour and bread crumbs in two separate shallow
              bowls. Mix eggs and Parmesan cheese in a third shallow bowl.
            </li>
            <li>
              Dip each chicken breast in the flour, shaking off excess, then dip
              in egg mixture and bread crumbs.
            </li>
            <li>
              Cook in preheated oil until golden brown on each side, about 3 to
              4 minutes per side.
            </li>
            <li>
              Place browned chicken breasts in a 9x13 inch baking dish. Cover
              with foil and bake in the preheated oven for 30 minutes.
            </li>
            <li>
              Remove foil, pour marinara sauce over chicken and sprinkle with
              mozzarella cheese. Bake uncovered for 10 more minutes, or until
              cheese is melted and chicken is done.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
