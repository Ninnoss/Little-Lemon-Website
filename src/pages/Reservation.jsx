import ReservationForm from '../components/ReservationPage/ReservationForm';

const TableReservation = () => {
  return (
    <section className="pb-32 px-8 md:px-32 lg:px-52 xl:px-80 py-10 bg-primaryGreen bg-contain bg-center">
      <h1 className="text-primaryYellow font-markazi text-6xl text-center sm:text-left">Reservations</h1>
      <ReservationForm />
    </section>
  );
};

export default TableReservation;
