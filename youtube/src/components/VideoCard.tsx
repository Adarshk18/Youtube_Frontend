export function VideoCard() {
  return (
    <div>
      <img src="/photo.jpg" className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src="/channel.jpg" className={"rounded-full w-10 h-10"}></img>
        </div>
        <div className="col-span-11 pl-5">
          <div className="col-span-11 pl-5">
            TRUMP JUST DESTROYED SOUTH AFRICA'S PRESIDENT | Absolute Cinema of
            Geopolitics!
          </div>

          <div className="col-span-11 pl-5 text-gray-400">
            878,322 views 10 hours ago
          </div>
        </div>
      </div>
    </div>
  );
}
