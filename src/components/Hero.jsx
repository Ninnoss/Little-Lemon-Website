import images from '../data/images';

const Hero = () => {
  return (
    <section className="bg-primaryGreen flex flex-col md:flex-row justify-evenly items-center   px-8 py-4">
      <div>
        <h1 className="text-primaryYellow font-markazi text-8xl">Little Lemon</h1>
        <span className="font-markazi text-white text-4xl">Chicago</span> <br />
        <p className="text-white text-lg font-medium max-w-sm font-karla">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <div>
          <button
            className="text-black hover:text-white bg-primaryYellow hover:bg-lightOrange rounded-md shadow-lg font-karla
        font-bold px-8 py-3 mt-4 w-1/2">
            Reserve Table
          </button>

          <img
            className="h-44  self-start ml-7 "
            src={images.pastaFork}
            alt="Fork Image pointing at Call to Action Button"
          />
        </div>
      </div>
      <div className="relative md:top-10">
        <img
          className="h-[500px] md:h-[700px] w-[500px]"
          src={images.FlyingPasta}
          alt="Pasta Dish"
        />
      </div>
    </section>
  );
};

export default Hero;
