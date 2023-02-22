import { Outlet } from "react-router-dom";
import NavigationMenu from "../components/NavigationMenu";

export default function Root () {
  return (
    <>
      <NavigationMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
