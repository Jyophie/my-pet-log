import { style } from "@vanilla-extract/css";

export const profileInfo = style({
  margin: "2rem 1rem 1rem",
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  gap: "1.2rem",
});

export const profileImage = style({
  borderRadius: "50%",
});

export const text = style({
  fontSize: "1.4rem",
  fontWeight: "600",
});

export const image = style({
  position: "relative",
  height: "35rem",
});

export const videoImage = style({
  width: "100%",
  height: "35rem",

  backgroundSize: "cover",
  backgroundPosition: "center",

  "@media": {
    "(min-width: 744px)": {
      height: "41.8rem",
    },
  },
});

export const icon = style({
  marginTop: "1rem",
  marginLeft: "1rem",
});

export const greatChat = style({
  marginLeft: "1rem",
  marginTop: "0.8rem",
});

export const greatText = style({
  marginBottom: "0.1rem",
  fontSize: "1.4rem",
  fontWeight: "600",
});

export const nameTitle = style({
  marginTop: "0.5rem",

  fontSize: "1.4rem",
  fontWeight: "600",
});

export const title = style({
  fontSize: "1.4rem",
  fontWeight: "300",
});

export const description = style({
  marginBottom: "0.5rem",
  fontSize: "1.4rem",
  fontWeight: "300",
});

export const seeMore = style({
  color: "var(--Gray81)",
  fontSize: "1.4rem",
  fontWeight: "300",
});

export const comment = style({
  color: "var(--Gray81)",
  fontSize: "1.4rem",
  fontWeight: "300",
});

export const date = style({
  marginTop: "0.5rem",
  color: "var(--Gray72)",
  fontSize: "1.2rem",
  fontWeight: "300",
});

export const additionalContent = style({
  transition: "all 2s ease-in-out",
  maxHeight: "0",
  overflow: "hidden",
  visibility: "hidden",
});

export const showAdditionalContent = style({
  maxHeight: "100vh",
  visibility: "visible",
});

export const commentContainer = style({
  width: "100%",
  height: "100%",

  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",

  backgroundColor: "var(--White)",
});