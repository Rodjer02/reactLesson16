import { Outlet } from "react-router-dom";

import Header from "./Header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer style={{ padding: "50px", textAlign: "center", color: "white" }}>
        made with ❤️ by{" "}
        <a href="https://github.com/Rodjer02" target="_blank">
          Rodjer02
        </a>
      </footer>
    </>
  );
}
