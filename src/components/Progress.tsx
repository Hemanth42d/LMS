import { useState } from "react";

const Progress = () => {
  interface TableRow {
    name: string;
    course: string;
    progress: number;
    status: "Done" | "Progress" | "Pending";
  }

  const data: TableRow[] = [
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Done",
    },
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Done",
    },
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Progress",
    },
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Progress",
    },
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Pending",
    },
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Pending",
    },
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Pending",
    },
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Pending",
    },
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Pending",
    },
    {
      name: "M Hemanth",
      course: "User Research and Pers...",
      progress: 33,
      status: "Pending",
    },
  ];

  const statusStyles: Record<TableRow["status"], string> = {
    Done: "bg-green-200 text-green-700",
    Progress: "bg-blue-200 text-blue-700",
    Pending: "bg-red-200 text-red-700",
  };

  const dotStyles: Record<TableRow["status"], string> = {
    Done: "bg-green-500",
    Progress: "bg-blue-500",
    Pending: "bg-red-500",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("CSE-A8");
  const items = ["CSE-A8", "CSE-A9", "CSE-A10", "CSE-A11", "CSE-A12"];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage: number = 4;
  const totalPages: number = Math.ceil(data.length / rowsPerPage);
  const startIndex: number = (currentPage - 1) * rowsPerPage;
  const displayedRows: TableRow[] = data.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="p-4 w-full">
      <div>
        <div className="w-full h-2/4 flex justify-between items-center">
          <h1 className="text-4xl p-4 mb-4">Progress</h1>
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-blue-100 text-black outline-none rounded-2xl"
            >
              {selectedItem} ▼
            </button>
            {isOpen && (
              <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg">
                {items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedItem(item);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <table className="w-full text-sm border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left font-medium">Student</th>
              <th className="p-3 text-left font-medium">Course/lessons</th>
              <th className="p-3 text-left font-medium">Progress</th>
              <th className="p-3 text-left font-medium">Status</th>
              <th className="p-3 text-left font-medium">Submit</th>
            </tr>
          </thead>
          <tbody className="space-y2">
            {displayedRows.map((item, index) => (
              <tr key={index} className="border-t border-gray-200 mb-2">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.course}</td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-24 h-2 bg-gray-200 rounded-full">
                      <div
                        className="absolute top-0 left-0 h-2 bg-green-500 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span>{item.progress}%</span>
                  </div>
                </td>
                <td className="p-3">
                  <div
                    className={`flex items-center space-x-2 w-3/4 px-2 py-1 rounded-full ${
                      statusStyles[item.status]
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        dotStyles[item.status]
                      }`}
                    ></span>
                    <span>{item.status}</span>
                  </div>
                </td>
                <td className="p-3 text-gray-500">Submitted</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          ◀
        </button>
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Progress;
