import Header from "@/sections/dashboard/Header"
import {MapView} from "@/app/(dashboard)/map-finder/mapView"
import GoogleSearch from "./GoogleSearch"
import MapComponent from "./googlemap"
import { ThemeProvider } from "@/components/theme-provider"
import { MapProvider } from "@/utils/MapProvider";



export default function Page() {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
  <MapProvider>
    <div className="bg-white dark:bg-black min-h-screen">
      <Header/>
      <div className="p-5 sm:p-5 md:py-10 md:px-28">
        <div className="mx-auto">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white text-slate-900/90 pb-6">Map Finder</h2>
            <div className="bg-white dark:bg-black rounded-md">
              {/* <MapComponent/> */}
              <GoogleSearch/>
              <MapView/>
            </div>
        </div>
      </div>
    </div>
    </MapProvider>
  </ThemeProvider>
  )
}