import { timeStamp } from "console";
import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "How to debate",
    image: "photo.jpg",
    thumbnail: "channel.jpg",
    views: "800k",
    author: "Adarsh",
    timeStamp: "10 hours ago",
  },
  {
    title: "How to debate",
    image: "photo.jpg",
    thumbnail: "channel.jpg",
    views: "800k",
    author: "Adarsh",
    timeStamp: "10 hours ago",
  },
  {
    title: "How to debate",
    image: "photo.jpg",
    thumbnail: "channel.jpg",
    views: "800k",
    author: "Adarsh",
    timeStamp: "10 hours ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbnail={video.thumbnail}
            views={video.views}
            author={video.author}
            timeStamp={video.timeStamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
