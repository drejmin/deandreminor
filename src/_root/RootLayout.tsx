import Bottombar from "@/components/shared/Bottombar"
import RightSidebar from "@/components/shared/RightSidebar"
import { Outlet } from "react-router-dom"
import { ModeToggle } from "@/components/mode-toggle"


function RootLayout() {
  return (
    <div className="w-full md:flex">
    {/* <RightSidebar/> */}
    <ModeToggle/>

    <section className="flex h-full flex-1">
      <Outlet/>
    </section>

    {/* <Bottombar/> */}
  </div>
)
}

export default RootLayout
