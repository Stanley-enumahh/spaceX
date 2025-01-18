import Form1 from "../components/form1";
import Form2 from "../components/form2";
import Preview from "../components/Preview";
import Form4 from "../components/form4.jsx";
import StepsUI from "../components/StepsUI";
import Form3 from "../components/form3.jsx";
import { useForm, FormProvider } from "react-hook-form";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { colorset } from "../components/colors.jsx";
import { colorset2 } from "../components/colors.jsx";

export default function FormBox() {
  // const DivRef = useRef(null);
  const formRef = useRef(null);

  const onDownload = async () => {
    if (formRef.current === null) return;

    try {
      const dataUrl = await toPng(formRef.current);
      const link = document.createElement("a");
      link.download = "my-X-space.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const methods = useForm();
  const [step, setStep] = useState(1);
  const [formData, setformData] = useState(null);
  const [guestArray, setGuestArray] = useState([]);

  const [event, setEvent] = useState({
    hostImage: null,
    selectedDate: null,
    selectedTime: null,
    selectedFont: "font-serif",
    color1: "black",
    color2: "#f4e8c1",
    bgImage: null,
  });
  const [guest, setGuest] = useState({
    guestName: "",
    guestImage: null,
  });
  function handleNext(data) {
    if (step < 5) {
      setStep((s) => s + 1);
    }
    setformData({ ...formData, ...data });
  }
  function handlePrev(data) {
    setformData(data);
    if (step > 1) setStep((s) => s - 1);
  }

  function handleSelectColor1(color) {
    setEvent({ ...event, color1: color });
  }
  function handleSelectColor2(color) {
    setEvent({ ...event, color2: color });
  }

  function handleAddGuest(guest) {
    if (guestArray.length >= 3) return;
    setGuestArray((guests) => [...guests, guest]);
    console.log(guestArray);
  }

  return (
    <div className="w-full h-screen md:p-4 items-center relative bg-[#dbd4eb] flex justify-center">
      <h1 className="font-bold absolute top-4 left-8 text-lg bg-[#2d54f4] duration-150 transition-all md:flex hidden shadow-md px-4 py-2 rounded-md text-white">
        Space X
      </h1>
      <div className="w-full md:w-[80%] md:gap-7 h-full md:h-[93%] p-5 rounded-md shadow-xl bg-[#222140] flex flex-col gap-[70px] md:justify-center ">
        <h1 className="font-bold hidden md:flex text-2xl text-neutral-200">
          Create new event
        </h1>

        <div className="w-full h-full gap-7 md:gap-5 bg-[#222140] flex flex-col md:flex-row justify-between relative">
          {step === 5 && (
            <div className="absolute right-[50px] md:right-[30px] bottom-4 md:top-[-47px] flex flex-row gap-5 h-fit">
              <button
                className="border text-xs border-[#2d54f4] w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg"
                onClick={() => setStep(1)}
              >
                Edit Options
              </button>

              <button
                onClick={onDownload}
                className="bg-red-500 text-xs w-fit text-white px-6 py-1 rounded hover:scale-95 duration-150 transition-all shadow-lg"
              >
                Download PNG
              </button>
            </div>
          )}

          <StepsUI step={step} />
          <FormProvider {...methods}>
            {step === 1 ? (
              <Form1
                event={event}
                setEvent={setEvent}
                handleNext={handleNext}
              />
            ) : step === 2 ? (
              <Form2
                handleNext={handleNext}
                handlePrev={handlePrev}
                event={event}
                setEvent={setEvent}
              />
            ) : step === 3 ? (
              <Form3
                guest={guest}
                guestArray={guestArray}
                setGuestArray={setGuestArray}
                setGuest={setGuest}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handleAddGuest={handleAddGuest}
              />
            ) : step === 4 ? (
              <Form4
                handleNext={handleNext}
                handlePrev={handlePrev}
                colorset={colorset}
                colorset2={colorset2}
                event={event}
                setEvent={setEvent}
                handleSelectColor1={handleSelectColor1}
                handleSelectColor2={handleSelectColor2}
              />
            ) : (
              <Preview
                setStep={setStep}
                guest={guest}
                event={event}
                setEvent={setEvent}
                formData={formData}
                guestArray={guestArray}
                // DivRef={DivRef}
                DivRef={formRef}
              />
            )}
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
