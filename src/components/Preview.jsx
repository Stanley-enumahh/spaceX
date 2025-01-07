export default function Preview({
  event,
  Days,
  guest,
  setStep,
  selectedDate,
  formattedDate,
}) {
  const PreviewStyle = {
    background: `linear-gradient(65deg, ${event.color1}, ${event.color2})`,
  };
  const imageStyle = {
    border: `solid 3px ${event.color2}`,
  };

  return (
    <div
      style={PreviewStyle}
      className="w-full overflow-hidden h-full flex-col justify-between text-white relative flex justify-cente items-center"
    >
      <div className=" gap-2 flex-col w-[70%] justify-center items-center flex">
        <p className="capitalize font-bold text-3xl mt-[80px] text-center">
          {event.topic}
        </p>
        <p className="text-xs text-center">{event.description}</p>
      </div>

      <div className="absolute bottom-[30px] px-6 h-fit w-full flex flex-row justify-between">
        <div className="h-full flex flex-col z-20">
          <span className="flex flex-row gap-1 text-sm">
            <p className="">{Days[selectedDate.getDay()]},</p>
            <p>{formattedDate}</p>
          </span>
        </div>
        <span className="left-[-100px] bg-opacity-40 z-10 rounded-full bottom-0 absolute bg-red-500 h-[200px] w-[200px]"></span>

        <div className="flex flex-col h-[200px] items-center justify-center  rounded-full gap-2">
          <span
            style={imageStyle}
            className="flex flex-col items-center justify-center p-3 rounded-full"
          >
            <img
              src={event.hostImage}
              alt=""
              className=" rounded-full object-cover w-[130px] h-[130px]"
            />
          </span>
          <span className="flex flex-col justify-center items-center">
            <p className="Capitalize text-sm">{event.hostName}</p>
            <p className="font-bold">@{event.Xname}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus eos minus rerum architecto officia eveniet et nostrum, tempore a.
