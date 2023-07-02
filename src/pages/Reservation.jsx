import RadioButtons from '../components/ReservationPage/RadioButtons';
import DateComponent from '../components/ReservationPage/DateComponent';
import TimePicker from '../components/ReservationPage/TimePicker';
import OccasionPicker from '../components/ReservationPage/OccasionPicker';
import DinersPicker from '../components/ReservationPage/DinersPicker';
import UserInfo from '../components/ReservationPage/UserInfo';

const TableReservation = () => {
  return (
    <section
      className="h-[170rem] px-10 md:px-32 lg:px-52 xl:px-80   py-10 bg-primaryGreen bg-contain  bg-center"
      // style={{ backgroundImage: `url(${images.greenLemonBg})` }}
    >
      <h1 className="text-primaryYellow font-markazi  text-6xl ">Reservations</h1>
      <div>
        <form className="pt-16">
          <fieldset className="flex flex-col items-start sm:flex-row sm:justify-between">
            <RadioButtons />
          </fieldset>

          <fieldset className="flex flex-col items-start sm:flex-row sm:justify-between">
            <DateComponent />
            <TimePicker />
          </fieldset>

          <fieldset className="flex flex-col items-start sm:flex-row sm:justify-between">
            <OccasionPicker />
            <DinersPicker />
          </fieldset>

          <fieldset
            className="pt-12">
            <UserInfo />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default TableReservation;
