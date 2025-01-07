export default function StepsUI({ step }) {
  return (
    <div className="w-full md:w-[30%] md:mt-0 mt-10 md:bg-[#2c2d49] relative h-fit md:h-full md:justify-start justify-between items-center  flex flex-row md:flex-col gap-4">
      <div
        className={` ${
          step === 1 ? "bg-[#2d54f4]" : "bg-transparent"
        } rounded-sm text-sm shadow-sm w-full flex flex-row md:justify-start justify-center items-center gap-2 py-2 text-neutral-200 px-3`}
      >
        <span className="rounded-full text-xs border-white border py-1 px-[9px] ">
          1
        </span>{" "}
        <p className="md:flex hidden font-semibold">Details</p>
      </div>

      <div
        className={` ${
          step === 2 ? "bg-[#2d54f4]" : "bg-transparent"
        } rounded-sm text-sm shadow-sm w-full flex flex-row items-center md:justify-start justify-center gap-2 py-2 text-neutral-200 px-3`}
      >
        <span className="rounded-full text-xs border-white border py-1 px-[9px] ">
          2
        </span>{" "}
        <p className="md:flex hidden font-semibold">Organizer Details</p>
      </div>

      <div
        className={` ${
          step === 3 ? "bg-[#2d54f4]" : "bg-transparent"
        } rounded-sm text-sm shadow-sm w-full flex flex-row items-center gap-2 py-2 text-neutral-200 md:justify-start justify-center px-3`}
      >
        <span className="rounded-full text-xs border-white border py-1 px-[9px] ">
          3
        </span>{" "}
        <p className="md:flex hidden font-semibold">Guest speakers</p>
      </div>

      <div
        className={` ${
          step === 4 ? "bg-[#2d54f4]" : "bg-transparent"
        } rounded-sm text-sm shadow-sm w-full flex flex-row items-center gap-2 py-2 text-neutral-200 md:justify-start justify-center px-3`}
      >
        <span className="rounded-full text-xs border-white border py-1 px-[9px] ">
          4
        </span>{" "}
        <p className="font-semibold md:flex hidden">Flyer Appearance</p>
      </div>

      <div
        className={` ${
          step === 5 ? "bg-[#2d54f4]" : "bg-transparent"
        } rounded-sm text-sm shadow-sm w-full flex flex-row items-center gap-2 py-2 text-neutral-200 md:justify-start justify-center px-3`}
      >
        <span className="rounded-full text-xs border-white border py-1 px-[9px] ">
          5
        </span>{" "}
        <p className="md:flex hidden font-semibold">Preview</p>
      </div>
    </div>
  );
}
