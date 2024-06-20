import { styled } from "@stitches/react";

const ButtonElement = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "700",
  border: "none",
  cursor: "pointer",

  variants: {
    type: {
      save: {
        height: "45px",
        width: "85px",
        fontSize: "20px",
        color: "rgba(245, 243, 247, 1)",
        backgroundColor: "rgba(251, 78, 159, 1)",
        borderRadius: "5px",
      },
      cancel: {
        height: "45px",
        width: "85px",
        fontSize: "20px",
        color: "rgba(251, 78, 159, 1)",
        backgroundColor: "transparent",
        borderRadius: "5px",
      },
      close: {
        backgroundColor: "transparent",
        fontSize: "24px",
        color: "rgba(201, 80, 153, 0.7)",
      },
    },
  },
});

export default function ButtonSettings({ children, onClick, type }) {
  return (
    <ButtonElement type={type} onClick={onClick}>
      {children}
    </ButtonElement>
  );
}
