import images from '../../data/images';
import Button from '../Button';
const Hero = () => {
  return (
    <section className="bg-primaryGreen flex flex-col md:flex-row justify-evenly  items-center px-8 py-4 mb-10">
      <div>
        <h1
          className="text-primaryYellow font-markazi text-6xl md:text-8xl pt-3"
          aria-label="Little Lemon - Chicago">
          Little Lemon
        </h1>
        <span className="font-markazi text-white text-4xl">Chicago</span> <br />
        <p className="text-white text-lg font-medium max-w-sm font-karla">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <div>
          <Button
            className="mt-4  hover:bg-lightOrange"
            type="button">
            Reserve Table
          </Button>

          <figure>
            <img
              className="hidden md:block h-44"
              src={images.pastaFork}
              alt="Fork image pointing at the Reserve Table button"
            />
            <figcaption className="sr-only">Fork image pointing at the Reserve Table button</figcaption>
          </figure>
        </div>
      </div>

      <figure>
        <img
          className="w-[700px] opacity-80"
          src={images.nat}
          alt="Pizza dish"
        />
        <figcaption className="sr-only">Pizza dish at Little Lemon</figcaption>
      </figure>
    </section>
  );
};

export default Hero;
