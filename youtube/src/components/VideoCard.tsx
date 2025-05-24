export function VideoCard(props: any) {
  return (
    <div className="p-3 cursor-pointer">
      <img src={props.image} className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src={props.thumbnail} className={"rounded-full w-10 h-10"}></img>
        </div>
        <div className="col-span-11 pl-5">
          <div>{props.title}</div>
          <div>{props.author}</div>

          <div className="text-gray-400">
            {props.views} views | {props.timeStamp}
          </div>
        </div>
      </div>
    </div>
  );
}
