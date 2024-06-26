import { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";

function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <button
      className="border p-2 rounded-full flex items-center shadow-md"
      onClick={() => setShowEventModal(true)}
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}

export default CreateEventButton;
