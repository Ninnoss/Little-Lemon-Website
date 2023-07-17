import { useState } from 'react';
import ReactPlayer from 'react-player/file';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import images from '../../data/images';

const RestaurantVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideoToggle = () => {
    setPlayVideo(!playVideo);
  };

  return (
    <div className="relative overlay">
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
