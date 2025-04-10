import { useEffect } from "react";
import {
  registerHoverTargets,
  unregisterHoverTargets,
} from "../components/Cursor";

export const useCursorTarget = (
  ref: React.RefObject<HTMLElement | null>,
  active: boolean = true
) => {
  useEffect(() => {
    if (!active || !ref.current) return;

    const el = ref.current;
    registerHoverTargets(el);

    return () => {
      unregisterHoverTargets(el);
    };
  }, [ref, active]);
};
