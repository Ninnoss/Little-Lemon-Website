import RadioButtons from '../components/ReservationPage/RadioButtons';
import DateComponent from '../components/ReservationPage/DateComponent';
import TimePicker from '../components/ReservationPage/TimePicker';

const TableReservation = () => {
  return (
    <section
      className="h-[70rem] px-10 md:px-32 lg:px-52 xl:px-80   py-10 bg-primaryGreen bg-contain  bg-center"
      // style={{ backgroundImage: `url(${images.greenLemonBg})` }}
    >
      <h1 className="text-primaryYellow font-markazi  text-6xl ">Reservations</h1>
      <div>
        <form className="pt-16">
          <fieldset className="flex flex-col items-start sm:flex-row sm:justify-between ">
            <RadioButtons />
          </fieldset>

          <fieldset className="flex flex-col items-start sm:flex-row sm:justify-between ">
            <DateComponent />
            <TimePicker />
          </fieldset>

          {/* <fieldset>
            <label>
              <input />
            </label>
          </fieldset> */}
        </form>
      </div>
    </section>
  );
};

export default TableReservation;
