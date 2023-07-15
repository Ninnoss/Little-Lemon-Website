import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/file';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import images from '../../data/images';

const RestaurantVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    setPlayVideo(inView);
  }, [inView]);

  const handleVideoToggle = () => {
    setPlayVideo(!playVideo);
  };

  return (
    <div
      ref={ref}
      className="relative overlay">
      <ReactPlayer
        url={images.mealVideo}
        playing={playVideo}
        type="video/mp4"
        loop={true}
        muted={true}
        width="100%"
        height="100%"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-20 h-20 rounded-full border-2 border-yellow-400 flex items-center justify-center cursor-pointer"
          onClick={handleVideoToggle}>
          {playVideo ? (
            <BsPauseFill
              color="#fff"
              fontSize={30}
            />
          ) : (
            <BsFillPlayFill
              color="#fff"
              fontSize={30}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantVideo;

// import { useState, useEffect, useRef } from 'react';
// import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
// import { useInView } from 'react-intersection-observer';
// import images from '../../data/images';

// const RestaurantVideo = () => {
//   const [playVideo, setPlayVideo] = useState(false);
//   const vidRef = useRef();
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     if (inView) {
//       setPlayVideo(true);
//       vidRef.current.play();
//     } else {
//       setPlayVideo(false);
//       vidRef.current.pause();
//     }
//   }, [inView]);

//   const handleVideoToggle = () => {
//     setPlayVideo(!playVideo);
//     if (playVideo) {
//       vidRef.current.pause();
//     } else {
//       vidRef.current.play();
//     }
//   };
//   return (
//     <div
//       ref={ref}
//       className="h-[50vh] sm:h-[75vh] lg:h-screen relative">
//       <video
//         ref={vidRef}
//         src={images.mealVideo}
//         type="video/mp4"
//         loop
//         controls={false}
//         muted
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div
//           className="w-20 h-20 rounded-full border-2 border-yellow-500 flex items-center justify-center cursor-pointer overlay"
//           onClick={handleVideoToggle}>
//           {playVideo ? (
//             <BsPauseFill
//               color="#fff"
//               fontSize={30}
//             />
//           ) : (
//             <BsFillPlayFill
//               color="#fff"
//               fontSize={30}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantVideo;
