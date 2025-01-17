import { useLocation } from "react-router-dom";

export default function PreviewPage() {
  const location = useLocation();
  const imageData = location.state?.imageData;

  return (
    <div className="bg-[#dbd4eb] gap-4 items-center w-full h-screen flex justify-center flex-col">
      <h1>Preview</h1>
      {imageData ? (
        <img
          src={imageData}
          alt="Preview"
          className="w-[70%] h-[80%] object-cover"
        />
      ) : (
        <p>No image to preview.</p>
      )}
    </div>
  );
}
