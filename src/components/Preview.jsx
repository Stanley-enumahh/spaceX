import mic from "../assets/ei_1736824815604-removebg-preview.png";
import noProfile from "../assets/blank-profile-picture-973460_1280.png";

export default function Preview({ event, Days, formData, guestArray, DivRef }) {
  const imageStyle = {
    border: `solid 4px ${event.color2}`,
  };

  console.log(guestArray.length);

  return (
    <div
      ref={DivRef}
      style={{
        backgroundImage: `url(${event.bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-[700px] md:w-[1040px] overflow-hidden h-[350px] md:h-[435px] flex-col justify-between text-white relative flex items-center z-50"
    >
      <span className="left-[-100px] bg-opacity-45 z-10 rounded-full top-[-250px] absolute bg-red-500 h-[500px] w-[500px]"></span>
      <span
        className={`${
          event.bgImage ? "hidden" : "flex"
        } absolute top-[60px] left-[-190px] rotate-[35deg]`}
      >
        <img src={mic} alt="" className="w-[500px] h-[500px] opacity-50" />
      </span>

      <div
        className="absolute top-0 right-0 w-full h-full"
        style={{
          background: `linear-gradient(45deg, ${event.color1}, ${event.color2}`,
          opacity: 0.8,
        }}
      ></div>
      <div className=" gap-2 z-50 flex-col w-[70%] justify-center items-center flex">
        <p className="capitalize font-bold text-3xl mt-[50px] text-center">
          {formData.topic}
        </p>

        <p className="text-xs text-center">{formData.description}</p>
        <p
          style={{ backgroundColor: event.color2 }}
          className="text-center text-xs font-semibold py-1 px-3 text-black rounded-xl"
        >
          #{formData.hashtag}
        </p>
      </div>

      <div className="absolute bottom-[20px] px-8 h-fit w-full flex flex-row justify-between items-end">
        <div className="h-fit gap-7 items-cente justify-between flex flex-col z-50">
          <ul className="flex flex-row w-fit text-white gap-4 ">
            {guestArray.map((speaker) => (
              <li
                key={speaker.id}
                className="flex flex-col w-fit h-fit gap-1 cursor-pointer   items-center rounded-lg"
              >
                <img
                  src={speaker.guestImage ? speaker.guestImage : noProfile}
                  alt={speaker.guestName}
                  className="w-[80px] border-4 border-r-white shadow-lg h-[100px] rounded object-cover"
                />
                <p className="text-neutral-200 text-sm capitalize">
                  {speaker.guestName}
                </p>
              </li>
            ))}
          </ul>

          <div
            // style={{ backgroundColor: event.color1 }}
            className="flex flex-col bg-red-5 justify-center text-sm text-white gap-1 bg-opacity-65"
          >
            <span className="flex flex-row gap-2">
              <p className="font-semibold">Date: {event.selectedDate},</p>
              <p className="font-semibold">{event.selectedTime}</p>
            </span>
            <p className="font-semibold">venue: @{formData.Xhandle} X space</p>
          </div>
        </div>

        <div
          className={`flex ${
            guestArray.length < 1 ? "mr-[60px] h-[250px]" : "mr-0 h-[230px]"
          } flex-col h-[270px] items-center justify-center gap-1`}
        >
          <p className="font-bold text-sm">host:</p>
          <span
            style={imageStyle}
            className="flex flex-col items-center justify-center p-3 rounded-full"
          >
            <img
              src={event.hostImage}
              alt={formData.hostName}
              className={`rounded-full object-cover ${
                guestArray.length >= 1
                  ? "[130px] h-[130px]"
                  : "h-[140px] w-[140px]"
              } w-[130px] h-[130px]`}
            />
          </span>
          <span className="flex flex-col justify-center items-center">
            <p className="capitalize text-sm">{formData.hostName}</p>
            <p className="font-bold">@{formData.Xhandle}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
