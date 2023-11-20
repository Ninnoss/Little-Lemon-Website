import { useEffect } from 'react';

const BloomerangForm = () => {
  useEffect(() => {
    // Dynamically load and initialize the Bloomerang donation form
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://crm.bloomerang.co/Content/Scripts/Api/Bloomerang-v2.js?nocache=2023-11-02';
    document.head.appendChild(script);

    script.onload = () => {
      // Once the Bloomerang script is loaded, start loading the donation form
      window.startBloomerangLoad();
    };

    // Clean up on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div>{/* Additional content or components can go here */}</div>;
};

export default BloomerangForm;
