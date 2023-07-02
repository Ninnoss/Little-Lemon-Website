import { useState, useEffect } from 'react';
import ReservationPickers from './ReservationPickers';
import UserInfo from './UserInfo';
import ConfirmationMessage from './ConfirmationMessage';
import LoadingSpinner from './LoadingSpinner';
import Button from '../Button';

const ReservationForm = () => {
  const [reservationData, setReservationData] = useState({
    selectedSeating: '',
    selectedDate: '',
    selectedTime: '',
    selectedOccasion: '',
    selectedDiners: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    specialRequests: '',
    policyAgreement: false,
  });
  const { selectedSeating, selectedDate, selectedTime, selectedOccasion, selectedDiners, firstName, lastName, email, phoneNumber, policyAgreement } =
    reservationData;

  const [pickersCompleted, setPickersCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmationMsg, setShowConfirmationMsg] = useState(false);

  const handleReservationDataChange = (fieldName, value) => {
    setReservationData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Reservation Data:', reservationData);
    // Perform any additional actions or validations here

    // Reset the form fields
    setReservationData({
      selectedSeating: '',
      selectedDate: '',
      selectedTime: '',
      selectedOccasion: '',
      selectedDiners: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      specialRequests: '',
      policyAgreement: false,
    });

    // Show the loading spinner
    setLoading(true);

    // Show confirmation message
    setShowConfirmationMsg(true);

    // Hide the loading spinner after 3 seconds and hide the confirmation message after 5 seconds
    setTimeout(() => {
      setLoading(false);
      // Hide the confirmation message after 5 seconds
      setTimeout(() => {
        setShowConfirmationMsg(false);
      }, 5000);
    }, 3000);
  };

  // Check if all the pickers are completed to show the user info inputs below them
  useEffect(() => {
    const allPickersCompleted = selectedSeating !== '' && selectedDate !== '' && selectedTime !== '' && selectedOccasion !== '' && selectedDiners !== '';
    setPickersCompleted(allPickersCompleted);
  }, [selectedSeating, selectedDate, selectedTime, selectedOccasion, selectedDiners]);

  const showUserInfo = pickersCompleted && (
    <fieldset className="pt-12">
      <UserInfo
        data={{
          selectedSeating,
          selectedDate,
          selectedTime,
          selectedOccasion,
          selectedDiners,
          policyAgreement,
        }}
        onUserInfoChange={handleReservationDataChange}
      />
    </fieldset>
  );

  // Calculate the disabled state based on form completeness
  const disabled = !pickersCompleted || !firstName || !lastName || !email || !phoneNumber || !policyAgreement;

  return (
    <form
      className="pt-16"
      onSubmit={handleSubmit}>
      <ReservationPickers
        selectedSeating={selectedSeating}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        selectedOccasion={selectedOccasion}
        selectedDiners={selectedDiners}
        onReservationDataChange={handleReservationDataChange}
      />

      {showUserInfo}

      <div className="pt-44">
        <Button
          className="hover:bg-lightOrange block mx-auto px-8 text-xl"
          type="submit"
          disabled={disabled} // Disable the button if the form is incomplete
          processing={disabled} // Reduce the button opacity if the form is incomplete
        >
          {pickersCompleted ? 'Confirm Reservation' : 'Reserve Table'}
        </Button>
      </div>

      <LoadingSpinner loading={loading} />
      <ConfirmationMessage
        loading={loading}
        showConfirmationMsg={showConfirmationMsg}
      />
    </form>
  );
};

export default ReservationForm;
