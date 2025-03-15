import Progress from "../components/Progress";
import RightSideBar from "../components/RightSideBar";
import SideBar from "../components/SideBar";
import { FaPlus, FaMobileAlt } from "react-icons/fa";

const Courses = () => {
  const courses = [
    { title: "Mobile App Development", date: "12/20" },
    { title: "Mobile App Development", date: "12/20" },
  ];

  return (
    <div className="flex w-screen">
      <SideBar />
      <div className="flex flex-col w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Recent Uploaded Courses
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-200 text-black rounded-md text-sm">
              Create Course <FaPlus />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 h-44">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-4 bg-blue-50 rounded-lg flex flex-col items-start"
              >
                <div className="p-3 bg-gray-200 rounded-full">
                  <FaMobileAlt className="text-gray-700 text-2xl" />
                </div>
                <h3 className="mt-2 text-gray-800 font-medium text-sm">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-500">
                  Uploaded on {course.date}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Progress />
      </div>
      <RightSideBar />
    </div>
  );
};

export default Courses;
