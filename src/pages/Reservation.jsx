import ReservationForm from '../components/ReservationPage/ReservationForm';

const TableReservation = () => {
  return (
    <section className="h-[170rem] px-8 md:px-32 lg:px-52 xl:px-80 py-10 bg-primaryGreen bg-contain bg-center">
      <h1 className="text-primaryYellow font-markazi text-6xl">Reservations</h1>
      <ReservationForm />
    </section>
  );
};

export default TableReservation;
