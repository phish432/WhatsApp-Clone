import { useCallback, useState } from "react";

function useShow(defaultValue: boolean) {
  const [show, setShow] = useState<boolean>(defaultValue);

  const open = useCallback(() => setShow(true), []);
  const close = useCallback(() => setShow(false), []);
  const toggle = useCallback(() => setShow((prev) => !prev), []);

  return [show, open, close, toggle] as const;
}

export default useShow;
