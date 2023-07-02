/* eslint-disable react/prop-types */
import PickersSummary from './PickersSummary';
const UserInfo = ({ onUserInfoChange, data }) => {

  const handleUserInfoChange = (fieldName, event) => {
    const { value } = event.target;
    onUserInfoChange(fieldName, value);
  };

  return (
    <>
      <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
        <label
          htmlFor="firstName"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:text-white before:text-4xl before:relative before:top-2.5">
            First Name
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-2  focus:ring-primaryYellow bg-white px-4 py-2 rounded-lg"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
            onChange={(event) => handleUserInfoChange('firstName', event)}
          />
        </label>

        <label
          htmlFor="lastName"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:text-white before:text-4xl before:relative before:top-2.5">
            Last Name
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-2 focus:ring-primaryYellow bg-white px-4 py-2 rounded-lg"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={(event) => handleUserInfoChange('lastName', event)}
          />
        </label>
      </div>

      <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
        <label
          htmlFor="email"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:text-white before:text-4xl before:relative before:top-2.5">
            Email
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-2 focus:ring-primaryYellow bg-white px-4 py-2 rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            onChange={(event) => handleUserInfoChange('email', event)}
          />
        </label>

        <label
          htmlFor="phoneNumber"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:text-white before:text-4xl before:relative before:top-2.5">
            Phone Number
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-2 focus:ring-primaryYellow bg-white px-4 py-2 rounded-lg"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            onChange={(event) => handleUserInfoChange('phoneNumber', event)}
          />
        </label>
      </div>

      <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
        <label
          htmlFor="specialRequests"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 ">Special Requests</span>
          <textarea
            className="w-[250px] h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-primaryYellow bg-white px-4 py-2 rounded-lg"
            id="specialRequests"
            name="specialRequests"
            placeholder="Enter any special requests"
            onChange={(event) => handleUserInfoChange('specialRequests', event)}></textarea>
        </label>

        <PickersSummary data={data} onUserInfoChange={onUserInfoChange} />
      </div>
    </>
  );
};

export default UserInfo;
