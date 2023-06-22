import { useEffect } from "react";
export function useKey(k, action) {
  useEffect(() => {
    function esc(e) {
      if (e.code.toLowerCase() === k.toLowerCase()) {
        action();
      }
    }
    document.addEventListener("keydown", esc);

    return function () {
      document.removeEventListener("keydown", esc);
    };
  }, [action, k]);
}
