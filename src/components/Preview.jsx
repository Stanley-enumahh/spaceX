import mic from "../assets/ei_1736824815604-removebg-preview.png";
import noProfile from "../assets/blank-profile-picture-973460_1280.png";

export default function Preview({ event, formData, guestArray, DivRef }) {
  const imageStyle = {
    border: `solid 4px ${event.color2}`,
  };

  return (
    <div
      ref={DivRef}
      style={{
        backgroundImage: `url(${event.bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full md:w-[1040px] md:mb-0 mb-[300px] overflow-hidden h-[260px] md:h-[435px] flex-col justify-between text-white relative flex items-center z-50"
    >
      <span className="left-[-50px] md:left-[-100px] bg-opacity-45 z-10 rounded-full top-[-150px] md:top-[-250px] absolute bg-red-500 md:h-[500px] w-[250px] h-[250px] md:w-[500px]"></span>
      <span
        className={`${
          event.bgImage ? "hidden" : "flex"
        } absolute top-[100px] md:top-[60px] left-[-90px] md:left-[-190px] rotate-[35deg]`}
      >
        <img
          src={mic}
          alt=""
          className="w-[240px] md:w-[500px] h-[250px] md:h-[500px] opacity-50"
        />
      </span>

      <div
        className="absolute top-0 right-0 w-full h-full"
        style={{
          background: `linear-gradient(45deg, ${event.color1}, ${event.color2}`,
          opacity: 0.8,
        }}
      ></div>
      <div className="gap-1 leading-4 md:leading-normal md:gap-2 z-50 flex-col w-[88%] md:w-[70%] justify-center items-center flex">
        <p className="capitalize font-bold md:text-3xl mt-4 md:mt-[50px] text-center">
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

      <div className="absolute bottom-1 md:bottom-[20px] px-3 md:px-8 h-fit w-full flex flex-row justify-between items-end">
        <div className="h-fit gap-2 md:gap-7 justify-between flex flex-col z-50">
          <p className="font-semibold text-xs md:hidden flex">
            venue: @{formData.Xhandle} X space
          </p>
          <ul className="flex flex-row w-fit text-white gap-2 md:gap-4 ">
            {guestArray.map((speaker) => (
              <li
                key={speaker.id}
                className="flex flex-col w-fit h-fit gap-0 md:gap-1 cursor-pointer   items-center rounded-lg"
              >
                <img
                  src={speaker.guestImage ? speaker.guestImage : noProfile}
                  alt={speaker.guestName}
                  className="w-[35px] md:w-[80px] border-2 md:border-4 border-r-white shadow-lg h-[40px] md:h-[100px] rounded object-cover"
                />
                <p className="text-neutral-200 text-xs md:text-sm capitalize">
                  {speaker.guestName}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:text-sm text-xs leading-4 md:leading-normal bg-red-5 justify-center text-white md:gap-1 bg-opacity-65">
            <span className="flex flex-row gap-1 md:gap-2">
              <p className="font-semibold">Date: {event.selectedDate},</p>
              <p className="font-semibold">{event.selectedTime}</p>
            </span>
            <p className="font-semibold md:flex hidden text-xs">
              venue: @{formData.Xhandle} X space
            </p>
          </div>
        </div>

        <div
          className={`flex ${
            guestArray.length < 1 ? "mr-[60px] h-[250px]" : "mr-0 h-[230px]"
          } flex-col items-center justify-end md:justify-center gap-1`}
        >
          <p className="font-bold md:flex hidden text-sm">host:</p>
          <span
            style={imageStyle}
            className="flex flex-col items-center justify-center p-2 md:p-3 rounded-full"
          >
            <img
              src={event.hostImage ? event.hostImage : noProfile}
              alt={formData.hostName}
              className={`rounded-full object-cover ${
                guestArray.length >= 1
                  ? "w-[80px] md:w-[130px] h-[80px] md:h-[130px]"
                  : "h-[140px] w-[140px]"
              } `}
            />
          </span>
          <span className="flex flex-col leading-4 md:leading-normal justify-center items-center">
            <p className="capitalize text-xs md:text-sm text-nowrap">
              {formData.hostName}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
