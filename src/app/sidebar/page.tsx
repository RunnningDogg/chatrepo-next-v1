"use client";
import { LogIn, ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";
import { useState } from "react";

function Page() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className=" bg-slate-100 min-h-screen w-screen flex">
      {/* sidebar */}
      <aside
        className={`px-3 py-6 bg-teal-100 
        ${collapsed ? "w-1/12" : "w-2/12"} 
        duration-300 transition-all relative `}
      >
        sidebar
        <div className="absolute bottom-0 bg-slate-200 inset-x-0 flex justify-center ">
          {!collapsed ? (
            <ArrowLeftFromLine
              className="cursor-pointer"
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <ArrowRightFromLine
              className="cursor-pointer"
              onClick={() => setCollapsed(!collapsed)}
            />
          )}
        </div>
      </aside>
    </section>
  );
}

export default Page;
