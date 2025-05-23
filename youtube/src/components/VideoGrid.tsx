import { timeStamp } from "console";
import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "How to debate",
    image: "photo.jpg",
    thumbnail: "channel.jpg",
    views: "800k",
    timeStamp: "10 hours ago",
  },
  {
    title: "How to debate",
    image: "photo.jpg",
    thumbnail: "channel.jpg",
    views: "800k",
    timeStamp: "10 hours ago",
  },
  {
    title: "How to debate",
    image: "photo.jpg",
    thumbnail: "channel.jpg",
    views: "800k",
    timeStamp: "10 hours ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbnail={video.thumbnail}
            views={video.views}
            timeStamp={video.timeStamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
