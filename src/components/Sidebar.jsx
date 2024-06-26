import CreateEventButton from "./CreateEventButton";
import Labels from "./Labels";
import SmallCalendar from "./SmallCalendar";

function Sidebar() {
  return (
    <aside className="p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}

export default Sidebar;
