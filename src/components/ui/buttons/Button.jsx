import { styled } from "@stitches/react";

const ButtonElement = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "0.5rem",
  border: "none",
  borderRadius: "70px",
  boxShadow: "0 5px 15px 2px rgba(0, 0, 0, 0.7)",
  color: "#e4b8fa",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",

  variants: {
    type: {
      settings: {
        width: "140px",
        height: "40px",
        backgroundColor: "transparent",
      },
      timerControl: {
        width: "74px",
        height: "41px",
        backgroundImage:
          "linear-gradient(to right, rgba(135, 14, 216, 0.24) 0%, rgba(24, 35, 70, 0.32) 100%)",
        backgroundColor: "transparent",
        boxSizing: "border-box",
        padding: "1rem",
      },
      info: {
        width: "30px",
        height: "30px",
        padding: "0",
        backgroundImage:
          "linear-gradient(to right, rgba(135, 14, 216, 0.24) 0%, rgba(24, 35, 70, 0.32) 100%)",
        backgroundColor: "transparent",
      },
    },
    active: {
      true: {
        backgroundImage: "none",
        backgroundColor: "#FF005D",
      },
    },
  },
});

export default function Button({
  icon,
  text,
  type,
  runningStatus,
  button,
  onClick,
  onHover,
  onUnHover,
}) {
  const isActive =
    (runningStatus == "running" && button == "run") ||
    (runningStatus == "paused" && button == "pause");

  return (
    <ButtonElement
      type={type}
      active={isActive}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onUnHover}>
      {icon}
      {type != "settings" || <span>{text}</span>}
    </ButtonElement>
  );
}
