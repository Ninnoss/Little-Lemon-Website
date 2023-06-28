import Button from '../components/Button';
import MenuItem from '../components/MenuItem';
import images from '../data/images';
import { menuItems } from '../data/menuItems';
import { useState } from 'react';

const Menu = () => {
  const categoryBtns = ['Appetizers', 'Food', 'Drinks', 'Desserts'];

  const [selectedCategory, setSelectedCategory] = useState('Appetizers');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const itemsToDisplay = menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="h-[170rem]">
      <h1 className="text-center font-markazi text-3xl md:text-6xl text-primaryGreen py-6 ">Little Lemon Menu</h1>

      <div className="flex flex-col md:flex-row  md:justify-evenly px-6">
        <div>
          <h2 className="font-markazi text-primaryGreen text-2xl md:text-4xl mb-4">Our Menu</h2>
          <p className="text-highlightBlack text-lg text-justify md:text-xl max-w-sm md:max-w-lg font-karla">
            At Little Lemon, we take pride in our diverse and enticing menu. Explore a variety of Italian dishes that showcase the essence of Italian culinary
            traditions. From appetizers to desserts, our menu offers a delightful selection of antipasti, pasta, risotto, seafood, meat, and vegetarian options.
            Each dish is thoughtfully prepared by our talented chefs, ensuring a memorable dining experience. Join us and savor the flavors of Italy with every
            bite.
          </p>
        </div>
        <figure className="max-w-screen-lg mt-4">
          <img
            className="h-80 md:h-[30rem]"
            src={images.menuBg}
            alt="Restaurant Menu"
          />
          <figcaption className="sr-only">Restaurant Menu</figcaption>
        </figure>
      </div>

      {/* Category Buttons */}
      <div className="py-6 flex flex-wrap md:flex-nowrap  justify-center gap-x-10">
        {categoryBtns.map((cat) => (
          <Button
            onClick={() => handleCategoryClick(cat)}
            key={cat}
            type="button"
            className={`bg-lightOrange hover:bg-primaryGreen text-white px-6 rounded-xl ${selectedCategory === cat ? 'bg-primaryGreen' : ''}`}>
            {cat}
          </Button>
        ))}
      </div>

      <div className="py-10 flex justify-center flex-wrap gap-10">
        {itemsToDisplay.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            img={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;