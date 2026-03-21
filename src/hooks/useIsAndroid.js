import { useMemo } from "react";

const useIsAndroid = () => {
  const isAndroid = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /Android/i.test(navigator.userAgent);
  }, []);

  return isAndroid;
};

export default useIsAndroid;