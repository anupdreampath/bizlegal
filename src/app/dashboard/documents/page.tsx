import { FileText, Download, FolderOpen } from "lucide-react";

const folders = [
  {
    name: "Formation Documents",
    files: [
      { name: "Articles of Organization (Stamped)", date: "Mar 12, 2026", size: "245 KB" },
      { name: "Operating Agreement", date: "Mar 5, 2026", size: "1.2 MB" },
      { name: "Organizational Resolutions", date: "Mar 5, 2026", size: "180 KB" },
      { name: "Membership Certificates", date: "Mar 5, 2026", size: "95 KB" },
    ],
  },
  {
    name: "State Filings",
    files: [
      { name: "Initial Statement of Information", date: "Mar 6, 2026", size: "120 KB" },
      { name: "Name Reservation Confirmation", date: "Feb 28, 2026", size: "45 KB" },
    ],
  },
  {
    name: "Tax Documents",
    files: [
      { name: "EIN Confirmation Letter", date: "Pending", size: "—" },
    ],
  },
  {
    name: "Compliance Records",
    files: [
      { name: "Compliance Calendar 2026", date: "Mar 12, 2026", size: "88 KB" },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-[1.75rem] text-black">Documents</h1>
        <p className="font-sans text-[0.9rem] text-gray-600 mt-1">All documents related to your LLC, organized by category.</p>
      </div>

      {/* Summary */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-[1rem] border border-gray-200 p-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-green-800" />
          </div>
          <div>
            <p className="font-serif text-[1.5rem] text-black leading-none">8</p>
            <p className="font-sans text-[0.75rem] text-gray-400 mt-0.5">Total Documents</p>
          </div>
        </div>
        <div className="bg-white rounded-[1rem] border border-gray-200 p-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-ivory-200 rounded-lg flex items-center justify-center">
            <FolderOpen className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="font-serif text-[1.5rem] text-black leading-none">4</p>
            <p className="font-sans text-[0.75rem] text-gray-400 mt-0.5">Folders</p>
          </div>
        </div>
        <div className="bg-white rounded-[1rem] border border-gray-200 p-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="font-serif text-[1.5rem] text-black leading-none">1</p>
            <p className="font-sans text-[0.75rem] text-gray-400 mt-0.5">Pending</p>
          </div>
        </div>
      </div>

      {/* Folders */}
      <div className="space-y-6">
        {folders.map((folder) => (
          <div key={folder.name} className="bg-white rounded-[1rem] border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
              <FolderOpen className="w-4 h-4 text-green-800" />
              <h2 className="font-sans font-bold text-[0.9rem] text-black">{folder.name}</h2>
              <span className="font-sans text-[0.7rem] text-gray-400 bg-ivory-100 px-2 py-0.5 rounded-full">
                {folder.files.length} files
              </span>
            </div>
            <div className="divide-y divide-gray-100">
              {folder.files.map((file) => (
                <div key={file.name} className="flex items-center gap-4 px-6 py-3.5 hover:bg-ivory-100 transition-colors cursor-pointer">
                  <FileText className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[0.85rem] text-black truncate">{file.name}</p>
                  </div>
                  <p className="font-sans text-[0.75rem] text-gray-400 hidden sm:block flex-shrink-0">{file.size}</p>
                  <p className="font-sans text-[0.75rem] text-gray-400 hidden md:block flex-shrink-0">{file.date}</p>
                  <button className="p-1.5 text-gray-300 hover:text-green-800 transition-colors cursor-pointer" aria-label="Download">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
