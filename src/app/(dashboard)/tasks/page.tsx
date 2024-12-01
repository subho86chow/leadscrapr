import Header from "@/sections/dashboard/Header"
import { DataTableTasks, Tasks } from "./DataTableTasks"
import { Info } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider"


const data: Tasks[] = [
  {
    "id": "2862188579931098",
    "date": "2024-11-23",
    "status": "pending",
    "tool": ""
  },
  {
    "id": "4101890781317550",
    "date": "2024-11-13",
    "status": "pending",
    "tool": ""
  },
  {
    "id": "2822234543197311",
    "date": "2024-11-10",
    "status": "failed",
    "tool": "ai_analysis"
  },
  {
    "id": "2780251510808568",
    "date": "2024-11-04",
    "status": "failed",
    "tool": ""
  },
  {
    "id": "1081632464145141",
    "date": "2024-11-28",
    "status": "success",
    "tool": ""
  },
  {
    "id": "4547998481751166",
    "date": "2024-11-15",
    "status": "pending",
    "tool": "ai_analysis"
  },
  {
    "id": "2898633435258397",
    "date": "2024-11-24",
    "status": "processing",
    "tool": "lighthouse_report"
  },
  {
    "id": "6029480290323418",
    "date": "2024-11-11",
    "status": "processing",
    "tool": "lighthouse_report"
  },
  {
    "id": "2058327203421972",
    "date": "2024-11-12",
    "status": "success",
    "tool": ""
  },
  {
    "id": "3588604228324735",
    "date": "2024-11-01",
    "status": "expired",
    "tool": ""
  },
  {
    "id": "9402608221320089",
    "date": "2024-11-19",
    "status": "success",
    "tool": "lighthouse_report"
  },
  {
    "id": "2349432541122304",
    "date": "2024-10-31",
    "status": "processing",
    "tool": ""
  },
  {
    "id": "4737770636192902",
    "date": "2024-11-14",
    "status": "failed",
    "tool": "ai_analysis"
  },
  {
    "id": "9681411527354065",
    "date": "2024-11-22",
    "status": "expired",
    "tool": "lighthouse_report"
  },
  {
    "id": "9206661188127511",
    "date": "2024-11-15",
    "status": "processing",
    "tool": ""
  },
  {
    "id": "4545869704963078",
    "date": "2024-11-22",
    "status": "expired",
    "tool": "lighthouse_report"
  },
  {
    "id": "9948792892549475",
    "date": "2024-11-11",
    "status": "expired",
    "tool": "lighthouse_report"
  },
  {
    "id": "2069182333261704",
    "date": "2024-11-29",
    "status": "processing",
    "tool": ""
  },
  {
    "id": "2603223263057601",
    "date": "2024-11-09",
    "status": "success",
    "tool": "ai_analysis"
  },
  {
    "id": "9158233410428867",
    "date": "2024-11-28",
    "status": "pending",
    "tool": "lighthouse_report"
  },
  {
    "id": "3713005573070327",
    "date": "2024-11-05",
    "status": "pending",
    "tool": ""
  },
  {
    "id": "8624848530146296",
    "date": "2024-11-19",
    "status": "failed",
    "tool": ""
  },
  {
    "id": "2325164496971631",
    "date": "2024-11-23",
    "status": "expired",
    "tool": ""
  },
  {
    "id": "6160295679263224",
    "date": "2024-11-27",
    "status": "processing",
    "tool": "lighthouse_report"
  },
  {
    "id": "2345218851433082",
    "date": "2024-11-03",
    "status": "success",
    "tool": ""
  },
  {
    "id": "5401188967899557",
    "date": "2024-10-30",
    "status": "pending",
    "tool": "ai_analysis"
  },
  {
    "id": "4168790413786598",
    "date": "2024-11-10",
    "status": "pending",
    "tool": ""
  },
  {
    "id": "8308722461768942",
    "date": "2024-11-12",
    "status": "expired",
    "tool": "lighthouse_report"
  },
  {
    "id": "7490734618108127",
    "date": "2024-11-20",
    "status": "pending",
    "tool": "ai_analysis"
  },
  {
    "id": "2076259279851356",
    "date": "2024-11-27",
    "status": "pending",
    "tool": "lighthouse_report"
  }
];
 

export default function Page() {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <div className="bg-white dark:bg-black min-h-screen">
      <Header/>
      <div className="p-5 sm:p-5 md:py-10 md:px-28">
        <div className="mx-auto">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white text-slate-900/90 pb-6">Tasks</h2>
          <div className="bg-white dark:bg-black rounded-md">
            <DataTableTasks data={data}/>
          </div>
          <div className="flex items-center gap-1 py-4">
          <Info className="w-3.5 h-3.5" />
          <p className="text-xs sm:text-xs md:text-sm">Once tasks are finished results will be available for 30 days to download</p>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}