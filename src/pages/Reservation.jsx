import ReservationForm from '../components/ReservationPage/ReservationForm';
import images from '../data/images';

const TableReservation = () => {
  return (
    <section>
      <div className="pb-32 px-8 md:px-24 lg:px-52 xl:px-80 py-10 bg-primaryGreen bg-cover bg-center">
        <h1 className="text-primaryYellow font-markazi text-6xl text-center sm:text-left">Reservations</h1>
        <ReservationForm />
      </div>

      <h2 className="text-center bg-highlightGrey text-lightOrange font-bold text-2xl sm:text-3xl md:text-4xl  px-6 py-10">
        We are waiting for you here at Little Lemon!
      </h2>

      <div className="bg-highlightGrey pt-12 pb-28 px-4 flex flex-col sm:flex-row items-center justify-center gap-8">
        <figure>
          <img
            src={images.restaurantView}
            className="rounded-lg w-[300px] sm:w-[350px] h-[300px] "
            alt="Restaurant View"
            loading="lazy"
          />
          <figcaption className="sr-only">Restaurant View</figcaption>
        </figure>

        <figure>
          <img
            src={images.restauranFood}
            className="rounded-lg w-[300px] sm:w-[350px] h-[300px]"
            alt="Restaurant Food"
            loading="lazy"
          />
          <figcaption className="sr-only">Restaurant Food</figcaption>
        </figure>

        <figure>
          <img
            src={images.marioAdrianA}
            className="rounded-lg w-[300px] sm:w-[350px] h-[300px]"
            alt="The chefs Mario and Adrian"
            loading="lazy"
          />
          <figcaption className="sr-only">The chefs Mario and Adrian</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TableReservation;
