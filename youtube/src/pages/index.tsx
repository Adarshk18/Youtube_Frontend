import { VideoCard } from "../components/VideoCard";

export default function Home() {
  return (
    <div>
      <VideoCard
        title="How to debate"
        image={"photo.jpg"}
        thumbnail={"channel.jpg"}
        author={"800k"}
        views={"10 hours ago"}
      ></VideoCard>
    </div>
  );
}
