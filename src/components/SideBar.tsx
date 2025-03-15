import {
  FaHome,
  FaBook,
  FaUserTie,
  FaBell,
  FaCalendarAlt,
  FaUsersCog,
  FaCogs,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: FaHome, active: true },
  { name: "Courses", icon: FaBook, active: false },
  { name: "Faculty", icon: FaUserTie, active: false },
  { name: "Reminders", icon: FaBell, active: false },
  { name: "Schedules", icon: FaCalendarAlt, active: false },
  { name: "Students", icon: FaUsersCog, active: false },
  { name: "Setting", icon: FaCogs, active: false },
];

const Navbar = () => {
  return (
    <div className="h-screen w-64 bg-blue-100 p-4 flex flex-col justify-between shadow-md">
      <div className="mt-8">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center space-x-3 font-semibold cursor-pointer ${
                item.active ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <item.icon />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
