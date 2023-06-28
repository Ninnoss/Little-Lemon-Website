// eslint-disable-next-line react/prop-types
const MenuItem = ({ img, name }) => {
  return (
    <div className="relative hover:cursor-pointer group">
      <figure className="">
        <img
          className="h-36 sm:h-52 w-72 md:w-96 rounded-2xl object-cover object-center brightness-75 group-hover:scale-105 duration-200 ease-in"
          src={img}
          alt={name}
          loading="lazy"
        />
        <figcaption className="sr-only">Restaurant Menu</figcaption>
      </figure>
      <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold font-karla text-3xl text-white">{name}</h3>
    </div>
  );
};

export default MenuItem;
