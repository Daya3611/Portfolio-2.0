import {
  IconHome,
  IconList,
  IconReceipt,
  IconBrandGithub,
} from "@tabler/icons-react";

import PopUp from "@/components/PopUp";
import { Button } from "@/components/ui/button";
import Projects from "../Projects";
import Resume from "../Resume";

export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
      <div className="flex gap-6 bg-zinc-950 border border-zinc-800 px-6 py-3 rounded-full shadow-lg text-white">
        {/* Home normal */}
        {/* <button>
          <IconHome className="h-6 w-6" />
        </button> */}

        {/* Projects popup */}
        <PopUp
          title="Projects"
          description="Here are some selected projects."
          trigger={
            <button>
              <IconList className="h-6 w-6" />
            </button>
          }
        >
          <Projects />
        </PopUp>

        {/* Resume popup */}
        <PopUp
          title="Resume"
          description="Download or view resume."
          trigger={
            <button>
              <IconReceipt className="h-6 w-6" />
            </button>
          }
        >
          <Resume />
        </PopUp>

        {/* Github normal */}
        {/* <a href="https://github.com/yourname">
          <IconBrandGithub className="h-6 w-6" />
        </a> */}

      </div>
    </div>
  );
}
