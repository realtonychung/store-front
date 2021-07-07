import { useEffect, useState } from "react";

export default function useAnimatedLetters(setHeight) {
  useEffect(() => {
    const name = "AnthonyChung";
    const textWrapper = document.querySelector(".title .letters");

    textWrapper.innerHTML = "I'm Anthony Chung".replace(
      /([^\x00-\x80]|\w|')/g,
      (x) =>
        `<span class=${name.includes(x) ? "letter-name" : "letter"}>${x}</span>`
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".title .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 1200,
      })
      .add({
        targets: ".title .line",
        translateX: [
          0,
          document.querySelector(".title .letters").getBoundingClientRect()
            .width + 10,
        ],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
      })
      .add(
        {
          targets: ".title .letter",
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 700,
          delay: (_, i) => 34 * (i + 1),
        },
        "-=775"
      )
      .add(
        {
          targets: ".title .letter-name",
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          delay: (_, i) => 34 * (i + 1),
        },
        "-=600"
      )
      .add(
        {
          targets: ".letter-name",
          color: "#46a58f",
        },
        "-=300"
      )
      .add({
        targets: ".line1",
        opacity: 0,
        duration: 500,
        easing: "easeOutExpo",
        delay: 400,
      });
  }, []);
}
