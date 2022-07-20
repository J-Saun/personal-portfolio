import useDarkMode from "../../utils/dark_mode";

export default function ThemeToggle() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      {/* <div className=""> */}
      {colorTheme === "light" ? (
        <>
          <a onClick={() => setTheme("light")} className="text-indigo-200">
            <i class="fa-solid fa-sun fa-2x"></i>
          </a>
        </>
      ) : (
        <>
          <a onClick={() => setTheme("dark")} className="text-gray-900">
            <i class="fa-solid fa-moon fa-2x"></i>
          </a>
        </>
      )}
      {/* </div> */}
    </>
  );
}
import { useEffect, useState } from "react";
