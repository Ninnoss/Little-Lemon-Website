/* eslint-disable react/prop-types */

const Button = ({ text, color, bg, px, py, mt, hover, hoverText }) => {
    return (
      <button
        className={`text-${color} bg-${bg} px-${px} py-${py} mt-${mt} hover:bg-${hover} hover:text-${hoverText}
       rounded-md shadow-md font-karla font-bold   `}>
        {text}
      </button>
    );

};

export default Button;

        {
          /* <Button
          className="hover:bg-lightOrange"
          text={'Reserve Table'}
          hoverText={'red-500'}
          color={'black'}
          bg={'primaryYellow'}
          px={'8'}
          py={'3'}
          mt={'4'}
          hover={'lightOrange'}
        /> */
        }