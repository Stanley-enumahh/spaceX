import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateComponent({ selectedDate, setSelectedDate }) {
  return (
    <div className=" flex flex-col gap-2">
      <label htmlFor="date" className="font-bold text-xs">
        Date:
      </label>
      <DatePicker
        className="bg-transparent border-neutral-600 border outline-none px-3 py-2 text-xs rounded-md"
        id="date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}
