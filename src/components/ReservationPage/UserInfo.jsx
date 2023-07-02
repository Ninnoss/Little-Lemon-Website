const UserInfo = () => {
  return (
    <>
      <div className="flex flex-col items-start sm:flex-row sm:justify-between">
        <label
          htmlFor="firstName"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:text-white  before:text-4xl before:relative before:top-2.5  ">
            First Name
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-1 focus:ring-primaryYellow bg-white px-4 py-2 rounded-lg"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
          />
        </label>

        <label
          htmlFor="lastName"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:text-white before:text-4xl before:relative before:top-2.5">
            Last Name
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-1 focus:ring-primaryYellow bg-white px-4 py-2 rounded-lg"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
          />
        </label>
      </div>

      <div className="flex flex-col items-start sm:flex-row sm:justify-between">
        <label
          htmlFor="email"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:text-white before:text-4xl before:relative before:top-2.5">
            Email
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-1 focus:ring-primaryYellow bg-white px-4 py-2 rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>

        <label
          htmlFor="phoneNumber"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:text-white before:text-4xl before:relative before:top-2.5">
            Phone Number
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-1 focus:ring-primaryYellow bg-white px-4 py-2 rounded-lg"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            required
          />
        </label>
      </div>
    </>
  );
};

export default UserInfo;
