import YouTube from "react-youtube";

const YoutubeWindow = ({ path }: { path: string }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={path} opts={opts} />;
};

export default YoutubeWindow;
