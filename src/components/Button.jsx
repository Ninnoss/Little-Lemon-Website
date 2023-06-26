/* eslint-disable react/prop-types */

function Button({ type = 'submit', className = '', processing, children }) {
  return (
    <button
      type={type}
      className={
        `text-black hover:text-white bg-primaryYellow  transition-all duration-300  rounded-md shadow-lg font-karla font-bold px-4 py-2 ${processing && 'opacity-25'} ` + className
      }
      disabled={processing}>
      {children}
    </button>
  );
}

export default Button;
