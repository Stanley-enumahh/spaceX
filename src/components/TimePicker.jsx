export function TimeComponent({ selectedTime, setSelectedTime }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="time" className="font-bold text-xs text-neutral-200">
        Time:
      </label>
      <input
        type="time"
        className="bg-transparent border-neutral-600 border outline-none px-3 py-2 text-xs rounded-md"
        id="time"
      />
    </div>
  );
}
