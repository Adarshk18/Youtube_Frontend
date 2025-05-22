export function VideoCard(props: any) {
  return (
    <div>
      <img src={props.image} className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src={props.thumbnail} className={"rounded-full w-10 h-10"}></img>
        </div>
        <div className="col-span-11 pl-5">
            <div>
                {props.title}
            </div>
          <div className="col-span-11 pl-5">
            {props.author}
          </div>

          <div className="col-span-11 pl-5 text-gray-400">
            {props.views} views | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
