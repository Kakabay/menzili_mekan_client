import useGetPages from "@/react-query/useGetPages";
import { useZusHome } from "@/zustand/useZusHome";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactPlayer from "react-player/youtube";

export const YoutubeWindow = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const setActiveVideo = useZusHome((state) => state.setActiveVideo);

  const { data } = useGetPages();

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ ease: "linear" }}
      className="fixed top-0 right-0 bottom-0 left-0 z-[3000] px-5 overflow-hidden w-full h-screen flex justify-center items-center bg-black/50"
    >
      <div
        className="cursor-pointer absolute top-[70px] right-[30px] z-[5000] p-5"
        onClick={() => setActiveVideo(false)}
      >
        <img
          width={30}
          height={30}
          src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
          alt="close"
          className="w-[30px] h-[30px]"
        />
      </div>
      <div className="md:w-full md:h-full w-full h-[300px]">
        <ReactPlayer
          url={data ? data[0].youtube_link : ""}
          width={"100%"}
          height={"100%"}
          controls
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </motion.div>
  );
};
