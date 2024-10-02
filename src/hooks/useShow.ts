import { useState } from "react";

function useShow(defaultValue: boolean) {
  const [show, setShow] = useState<boolean>(defaultValue);

  const open = () => setShow(true);
  const close = () => setShow(false);
  const toggle = () => setShow((prev) => !prev);

  return [show, open, close, toggle] as const;
}

export default useShow;
