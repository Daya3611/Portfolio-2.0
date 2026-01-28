import { projects } from "@/data/projects";
import Link from "next/link";
import { BsFillFolderFill } from "react-icons/bs";
import { 
  FiHome, 
  FiImage, 
  FiMonitor, 
  FiDownload, 
  FiFile, 
  FiMusic, 
  FiVideo,
  FiFolder,
  FiChevronRight,
  FiSearch,
  FiPlus,
  FiX
} from "react-icons/fi";
import { HiMiniComputerDesktop } from "react-icons/hi2";


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="hidden md:flex bg-zinc-900 border-b border-zinc-800 items-center px-2 h-12">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-t-lg">
            <FiDownload className="w-4 h-4" />
            <span className="text-sm">Projects</span>
            <button className="hover:bg-zinc-700 p-1 rounded">
              <FiX className="w-3 h-3" />
            </button>
          </div>
          <button className="hover:bg-zinc-800 p-2 rounded">
            <FiPlus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border-b border-zinc-800 px-2 md:px-4 py-2 md:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4 flex-1">
          <div className="flex items-center gap-1 md:gap-2">
            <button className="hover:bg-zinc-800 p-1.5 md:p-2 rounded">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="hidden md:block hover:bg-zinc-800 p-2 rounded text-zinc-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <span className="text-white">Projects</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="md:hidden hover:bg-zinc-800 p-2 rounded">
            <FiSearch className="w-5 h-5" />
          </button>
          <div className="hidden md:flex bg-zinc-800 rounded-md px-3 py-1.5 items-center gap-2 w-48 lg:w-64">
            <FiSearch className="w-4 h-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search Projects" 
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border-b border-zinc-800 px-2 md:px-4 py-2 flex items-center justify-between overflow-x-auto">
        <div className="flex items-center gap-1 md:gap-2">
          <button className="hover:bg-zinc-800 px-2 md:px-3 py-1.5 rounded flex items-center gap-2 text-sm whitespace-nowrap">
            <FiPlus className="w-4 h-4" />
            <span className="hidden md:inline">New</span>
          </button>
          <div className="hidden md:block w-px h-6 bg-zinc-700" />
          <button className="hover:bg-zinc-800 p-2 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
          </button>
          <button className="hover:bg-zinc-800 p-2 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button className="hover:bg-zinc-800 p-2 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden lg:block w-48 bg-zinc-950 border-r border-zinc-800 p-3 overflow-y-auto">
          <nav className="space-y-1">
           <Link href='/'>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded text-sm">
              <FiHome className="w-4 h-4" />
              <span>Home</span>
            </button>
           </Link>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded text-sm">
              <FiImage className="w-4 h-4 text-blue-400" />
              <span>Gallery</span>
            </button>

            <div className="h-px bg-zinc-800 my-2" />

            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded text-sm">
              <FiMonitor className="w-4 h-4 text-teal-400" />
              <span>Desktop</span>
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 bg-zinc-800 rounded text-sm">
              <FiDownload className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded text-sm">
              <FiFile className="w-4 h-4" />
              <span>Documents</span>
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded text-sm">
              <FiImage className="w-4 h-4" />
              <span>Pictures</span>
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded text-sm">
              <FiMusic className="w-4 h-4 text-pink-400" />
              <span>Music</span>
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded text-sm">
              <FiVideo className="w-4 h-4 text-purple-400" />
              <span>Videos</span>
            </button>

            <div className="h-px bg-zinc-800 my-2" />

            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 rounded text-sm">
              <HiMiniComputerDesktop className="w-4 h-4 text-blue-400"/>
              <span>This PC</span>
            </button>
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto bg-black">
          <div className="p-3 md:p-6">
            <div className="mb-4 hidden md:block">
              <h2 className="text-sm text-zinc-400 mb-4">All Projects</h2>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 md:gap-4">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="flex flex-col items-center p-2 md:p-3 hover:bg-zinc-900/50 rounded-lg transition group"
                >
                  <BsFillFolderFill className="w-12 h-12 md:w-14 md:h-14 text-yellow-400 mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-xs text-center break-words w-full line-clamp-2">
                    {project.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <aside className="hidden xl:block w-80 bg-zinc-950 border-l border-zinc-800 p-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-teal-600 rounded-lg mb-4">
              <FiDownload className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Projects ({projects.length} items)</h3>
            <p className="text-sm text-zinc-400">
              Select a single file to get more information and share your cloud content.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}