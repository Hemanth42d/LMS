import Progress from "./Progress";
import RightSideBar from "./RightSideBar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full mt-8">
      <div className="flex-1 p-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white p-4 rounded-lg text-center text-xl font-bold"
            >
              100 <br /> Students
            </div>
          ))}
        </div>
        <Progress />
      </div>
      <RightSideBar />
    </div>
  );
};

export default Dashboard;
