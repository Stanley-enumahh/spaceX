import { DatePicker } from "antd";
import { useState } from "react";

export default function DateComponent({ event, setEvent }) {
  const [dateError, setDateError] = useState(false);
  const onDateChange = (date, dateString) => {
    setEvent({ ...event, selectedDate: dateString });
  };

  return (
    <div className=" flex flex-col gap-2">
      <label htmlFor="date" className="font-bold text-xs">
        Date:
      </label>
      <DatePicker
        onChange={onDateChange}
        needConfirm
        className="bg-transparent hover:bg-transparent text-white border-neutral-600 border outline-none px-2 py-2 text-xs rounded-md"
        id="date"
      />
      {/* {guestError ? (
        <p className="text-red-500 text-xs">speaker name is required</p>
      ) : (
        ""
      )} */}
    </div>
  );
}
