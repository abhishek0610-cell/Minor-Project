import React, { useState } from "react";
import { FaBook, FaComments } from "react-icons/fa";
import Layout from "../Layout/Layout";
import semester1 from "../assets/image/Semester1/mid2.jpg";
import semester2 from "../assets/image/Semester2/mid2.jpg";
import semester3 from "../assets/image/Semester3/mid2.jpg";
import semester4Pdfs from "../assets/pdfs/4th-sem.pdf"; // Example PDF for Semester 4
import semester5Pdfs from "../assets/pdfs/5th-sem.pdf"; // Example PDF for Semester 5
import semester6Pdfs from "../assets/pdfs/6th-sem.pdf"; // Example PDF for Semester 6

const StudyTerminal = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [activeTab, setActiveTab] = useState("questionPaper");
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState("");

  const semesters = [
    { name: "Semester 1", pdfs: [], image: semester1 },
    { name: "Semester 2", pdfs: [], image: semester2 },
    { name: "Semester 3", pdfs: [], image: semester3 },
    { name: "Semester 4", pdfs: [semester4Pdfs] },
    { name: "Semester 5", pdfs: [semester5Pdfs] },
    { name: "Semester 6", pdfs: [semester6Pdfs] },
    // Add more semesters and their PDF paths here
  ];

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDiscussionSubmit = (e) => {
    e.preventDefault();
    if (newDiscussion.trim() !== "") {
      setDiscussions([...discussions, { id: Date.now(), text: newDiscussion }]);
      setNewDiscussion("");
    }
  };

  const getContent = () => {
    const semester = semesters.find((sem) => sem.name === selectedSemester);
    return semester ? semester : {};
  };

  const { pdfs, image } = getContent();

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold">B.Tech CSE Study Terminal</h1>
            <p className="text-gray-200">
              Select a semester to access resources and participate in discussions.
            </p>
          </div>

          {/* Semester Selection */}
          <div className="p-6 flex flex-col lg:flex-row lg:space-x-8">
            <div className="mb-4 lg:mb-0 lg:w-1/2">
              <label
                htmlFor="semester"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Semester
              </label>
              <select
                id="semester"
                value={selectedSemester}
                onChange={handleSemesterChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a semester</option>
                {semesters.map((semester) => (
                  <option key={semester.name} value={semester.name}>
                    {semester.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tabs for Question Papers and Discussions */}
          {selectedSemester && (
            <>
              <div className="mb-6">
                <div className="flex border-b-2">
                  <button
                    onClick={() => handleTabChange("questionPaper")}
                    className={`flex-1 py-2 text-center ${
                      activeTab === "questionPaper"
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "hover:bg-gray-200 text-gray-600"
                    }`}
                  >
                    <FaBook className="inline mr-2" />
                    Question Papers
                  </button>
                  <button
                    onClick={() => handleTabChange("discussion")}
                    className={`flex-1 py-2 text-center ${
                      activeTab === "discussion"
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "hover:bg-gray-200 text-gray-600"
                    }`}
                  >
                    <FaComments className="inline mr-2" />
                    Discussions
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === "questionPaper" && (
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Question Papers for {selectedSemester}
                    </h3>
                    {image ? (
                      // Display image for Semester 1, 2, or 3
                      <div className="mb-6">
                        <img
                          src={image}
                          alt={selectedSemester}
                          className="rounded-lg shadow-lg w-full"
                        />
                      </div>
                    ) : (
                      // Display PDFs for Semester 4, 5, 6, etc.
                      <div className="space-y-4 max-h-64 overflow-y-auto">
                        {pdfs.map((pdf, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 p-3 rounded-lg shadow"
                          >
                            <a
                              href={pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Download PDF
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {activeTab === "discussion" && (
                  <div className="mt-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Global Discussions
                      </h3>
                      <div className="space-y-4 max-h-64 overflow-y-auto">
                        {discussions.length > 0 ? (
                          discussions.map((discussion) => (
                            <div
                              key={discussion.id}
                              className="bg-gray-100 p-3 rounded-lg shadow"
                            >
                              {discussion.text}
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500">No discussions yet.</p>
                        )}
                      </div>
                      <form
                        onSubmit={handleDiscussionSubmit}
                        className="mt-4 flex items-center"
                      >
                        <input
                          type="text"
                          value={newDiscussion}
                          onChange={(e) => setNewDiscussion(e.target.value)}
                          placeholder="Type your message here..."
                          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="submit"
                          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default StudyTerminal;
