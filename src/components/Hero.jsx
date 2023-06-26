import images from '../data/images';
import Button from './Button';
const Hero = () => {
  return (
    <section className="bg-primaryGreen flex flex-col md:flex-row justify-evenly  items-center px-8 py-4 mb-10">
      <div>
        <h1 className="text-primaryYellow font-markazi text-6xl md:text-8xl pt-3">Little Lemon</h1>
        <span className="font-markazi text-white text-4xl">Chicago</span> <br />
        <p className="text-white text-lg font-medium max-w-sm font-karla">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <div>
          {/* <button
            className="text-black hover:text-white bg-primaryYellow hover:bg-lightOrange rounded-md shadow-lg font-karla
        font-bold px-4 py-1.5 md:px-8 md:py-3 mt-4 w-1/2 transition-all duration-300">
            Reserve Table
          </button> */}
          <Button
            className="mt-4  hover:bg-lightOrange"
            type="button">
            Reserve Table
          </Button>

          <img
            className="hidden md:block h-44"
            src={images.pastaFork}
            alt="Fork Image pointing at Call to Action Button"
          />
        </div>
      </div>
      <div className="">
        <img
          className="w-[700px] opacity-80"
          src={images.nat}
          alt="Pasta Dish"
        />
      </div>
    </section>
  );
};

export default Hero;
