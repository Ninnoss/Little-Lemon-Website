// eslint-disable-next-line react/prop-types
const Card = ({ name, price, img, description }) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow relative">
      <img
        className="rounded-t-lg max-h-[200px] w-full "
        src={img}
        alt={name}
      />
      <div className="p-5">
        <div className="flex justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <span>{price}</span>
        </div>

        <p className="mb-3 font-normal h-28   text-gray-700 dark:text-gray-400">{description}</p>

        <button className="  text-black hover:text-white bg-primaryYellow hover:bg-primaryGreen transition-all duration-300  rounded-md shadow-lg font-karla font-bold px-4 py-1.5 md:px-8 md:py-3 mt-4  ">
          Order Delivery
        </button>
      </div>
    </div>
  );
};

export default Card;
