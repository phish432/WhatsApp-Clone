import { useLayoutEffect, useRef, useState } from "react";

import ActionButton from "../ActionButton/ActionButton";

import "./ActionTooltip.css";

type Props = {
  buttons: {
    name: string;
    onClick: () => void;
  }[];
  position: "inside" | "outside";
  targetRect: DOMRect | undefined;
};

const ActionTooltip = (props: Props) => {
  const { buttons, position, targetRect } = props;

  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; right: number }>({
    top: 0,
    right: 0,
  });

  useLayoutEffect(() => {
    if (targetRect && tooltipRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      if (position === "inside") {
        setTooltipPos({
          top: targetRect.top,
          right: window.innerWidth - targetRect.right,
        });
      } else {
        setTooltipPos({
          top: targetRect.top - tooltipRect.height / 2,
          right: window.innerWidth - targetRect.right,
        });
      }
    }
  }, [position, targetRect]);

  if (!targetRect) {
    return null;
  }
  return (
    <div
      className="actionTooltip"
      ref={tooltipRef}
      style={{ top: tooltipPos.top, right: tooltipPos.right }}
    >
      {buttons.map((action) => (
        <ActionButton
          key={action.name}
          onClick={action.onClick}
        >
          {action.name}
        </ActionButton>
      ))}
    </div>
  );
};

export default ActionTooltip;
