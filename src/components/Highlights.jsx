import Card from './Card';
import { specialsDishes } from '../data/dishes';

const Highlights = () => {
  return (
    <section className="h-[40rem] px-4 py-6">
      <div className="flex items-center justify-evenly">
        <h2 className="font-karla text-5xl font-semibold ">Specials</h2>
        <button
          className="text-black hover:text-white bg-primaryYellow hover:bg-primaryGreen transition-all duration-300  rounded-md shadow-lg font-karla
        font-bold px-4 py-1.5 md:px-14 md:py-3 mt-4 ">
          Explore Menu
        </button>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-x-6 py-6">
        {specialsDishes.map((dish) => {
          return (
            <Card
              key={dish.id}
              name={dish.name}
              price={dish.price}
              img={dish.img}
              description={dish.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Highlights;
