import { useState } from "react";
import Form1 from "../components/form1";
import Form2 from "../components/form2";
import Preview from "../components/Preview";
import Form3 from "../components/form3";
import StepsUI from "../components/StepsUI";
import GuestPage from "../components/Guests";

const colorset = ["indigo", "#222140", "#343434", "#0c4767", "#37000a"];

const colorset2 = ["blue", "#62bbc1", "#ccc", "#ea2b1f", "#f4e8c1"];
const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export default function FormBox() {
  const [step, setStep] = useState(1);
  const [guestArray, setGuestArray] = useState([]);
  const [IsOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [event, setEvent] = useState({
    topic: "",
    hashtags: "",
    description: "",
    host: "",
    hostImage: null,
    hostName: "",
    Xname: "",
    selectedDate: "",
    selectedFont: "font-serif",
    color1: "#343434",
    color2: "blue",
    bgImage: null,
  });
  const [guest, setGuest] = useState({
    guestName: "",
    guestImage: null,
  });

  const formattedDate =
    selectedDate && selectedDate.toLocaleString().slice(0, 9);

  function handleSelectColor1(color) {
    setEvent({ ...event, color1: color });
  }

  function handleAddGuest(guest) {
    if (guestArray.length >= 3) return;
    setGuestArray((guests) => [...guests, guest]);
    setGuest({ ...guest, guestName: "" });
    setGuest({ ...guest, guestImage: null });
  }

  function handleSelectColor2(color) {
    setEvent({ ...event, color2: color });
  }
  function handleIsOpen() {
    setIsOpen((s) => !s);
  }

  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 5) setStep((s) => s + 1);
  }
  return (
    <div className="w-full h-screen md:p-4 items-center relative bg-[#dbd4eb] flex justify-center">
      <h1 className="font-bold absolute top-4 left-8 text-xl">TwiVent</h1>
      <div className="w-full md:w-[80%] md:gap-7 h-full md:h-[90%] p-5 rounded-md shadow-xl bg-[#222140] flex flex-col gap-[70px] md:justify-center ">
        <h1 className="font-bold hidden md:flex text-2xl text-neutral-200">
          Create new event
        </h1>

        <div className="w-full h-full gap-7 md:gap-5 bg-[#222140] flex flex-col md:flex-row justify-between relative">
          {step === 5 && (
            <div className="absolute right-[30px] top-[-47px] flex flex-row gap-5">
              <button
                className="border text-xs border-[#2d54f4] w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg"
                onClick={() => setStep(1)}
              >
                Edit options
              </button>

              <button className="bg-red-500 text-xs w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg">
                Save
              </button>
            </div>
          )}
          <StepsUI step={step} />
          {step === 1 ? (
            <Form1
              Days={Days}
              event={event}
              setEvent={setEvent}
              handleNext={handleNext}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setSelectedTime={setSelectedTime}
              selectedTime={selectedTime}
            />
          ) : step === 2 ? (
            <Form2
              handleNext={handleNext}
              handlePrev={handlePrev}
              event={event}
              setEvent={setEvent}
            />
          ) : step === 3 ? (
            <GuestPage
              guest={guest}
              guestArray={guestArray}
              setGuestArray={setGuestArray}
              setGuest={setGuest}
              handlePrev={handlePrev}
              handleNext={handleNext}
              handleAddGuest={handleAddGuest}
              handleIsOpen={handleIsOpen}
            />
          ) : step === 4 ? (
            <Form3
              handleNext={handleNext}
              handlePrev={handlePrev}
              colorset={colorset}
              colorset2={colorset2}
              event={event}
              setEvent={setEvent}
              handleIsOpen={handleIsOpen}
              handleSelectColor1={handleSelectColor1}
              handleSelectColor2={handleSelectColor2}
            />
          ) : (
            <Preview
              formattedDate={formattedDate}
              Days={Days}
              setStep={setStep}
              guest={guest}
              event={event}
              setEvent={setEvent}
              selectedDate={selectedDate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
