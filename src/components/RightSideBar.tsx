import IMG from "/images/haircut.jpeg";

const RightSideBar = () => {
  return (
    <div>
      <div className="w-full bg-white p-4 shadow-md flex flex-col h-full">
        <div className="flex items-center space-x-2 pt-4 justify-end">
          <img src={IMG} alt="Profile" className="w-10 h-10 rounded-full" />
          <span className="font-semibold">Hemanth</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            Reminders
          </h3>
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-blue-100 p-3 mb-3 rounded-lg">
              <p className="font-semibold">MEETING WITH JANE</p>
              <span className="text-gray-500 text-sm mr-14">
                JWV assignment
              </span>
              <span className="text-blue-500 text-sm ml-14 font-semibold">
                2:00 pm
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
