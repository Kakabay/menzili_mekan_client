import { motion } from 'framer-motion';
import { useEffect } from 'react';
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube';

export const YoutubeWindow = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  function onPlayerReady(event: { target: YouTubePlayer }) {
    event.target.pauseVideo();
  }

  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ ease: 'linear' }}
      className="fixed top-0 right-0 bottom-0 left-0 z-[3000] px-5 overflow-hidden w-full h-screen bg-black">
      <YouTube
        className="w-full h-full"
        videoId="https://www.youtube.com/watch?v=HIAcT5roxWY"
        opts={opts}
        onReady={onPlayerReady}
      />
    </motion.div>
  );
};
