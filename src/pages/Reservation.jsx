import RadioButtons from '../components/ReservationPage/RadioButtons';
import { BsCalendar2Date } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';
// import images from '../data/images';
const TableReservation = () => {
  return (
    <section
      className="h-[70rem] px-10 xl:px-56 py-10 bg-primaryGreen bg-contain  bg-center"
      // style={{ backgroundImage: `url(${images.greenLemonBg})` }}
    >
      <h1 className="text-primaryYellow font-markazi  text-6xl ">Reservations</h1>
      <div>
        <form className="pt-16">
          <RadioButtons />
          <fieldset>
            <label
              htmlFor="datePicker"
              className="inline-flex items-center bg-white cursor-pointer gap-x-3 px-4 py-2 rounded-lg">
              <BsCalendar2Date className="text-primaryGreen w-5 h-5" />
              <span className="text-primaryGreen text-xl font-medium">Select Date</span>
              <FaAngleDown className="text-primaryGreen" />
              <input
                id="datePicker"
                type="date"
                className="hidden"
              />
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default TableReservation;
