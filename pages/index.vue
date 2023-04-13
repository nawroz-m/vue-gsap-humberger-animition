<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="burger"
    class="openmenu"
    width="30"
    height="22"
    fill="none"
  >
    <path
      class="top"
      fill="#fff"
      d="M2 0h26s2 0 2 2v0s0 2 -2 2h-26s-2 0 -2 -2v0s0 -2 2 -2"
    />
    <polyline
      class="mid"
      fill="#fff"
      stroke="#fff"
      stroke-width="3"
      points="6,11 24,11"
      stroke-linecap="round"
    />
    <path
      class="bot"
      fill="#fff"
      d="M2 18h26s2 0 2 2v0s0 2 -2 2h-26s-2 0 -2 -2v0s0 -2 2 -2"
    />
  </svg>
</template>
<style lang="scss">
* {
  text-align: center;
  background-color: gray;
}
svg {
  margin: 55px;
  -webkit-perspective: 800px;
}
</style>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    this.SVGAnimationElement();
  },
  methods: {
    SVGAnimationElement() {
      const controlit = document.querySelector("#burger");
      const menuToggle = gsap.timeline({ paused: true, reversed: true });
      menuToggle
        .set(".openmenu", { className: "-=closemenu" })
        .set(".openmenu", { className: "+=openmenu" })
        .to(
          ".top",
          0.2,
          {
            y: "-9px",
            transformOrigin: "50% 50%",
            onComplete: function () {
              // Change the color to red
              document.querySelector(".top").style.fill = `black`;
            },
          },
          "burg"
        )
        .to(
          ".bot",
          0.2,
          {
            y: "9px",
            transformOrigin: "50% 50%",
            onComplete: function () {
              // Change the color to red
              document.querySelector(".bot").style.fill = `black`;
            },
          },
          "burg"
        )
        .to(
          ".mid",
          0.2,
          {
            scale: 0.1,
            transformOrigin: "50% 50%",
            onComplete: function () {
              // Change the color to red
              document.querySelector(".mid").style.fill = "black";
            },
          },
          "burg"
        )
        .add("rotate")
        .to(".top", 0.2, { y: "8.9" }, "rotate")
        .to(".bot", 0.2, { y: "-8.9" }, "rotate")
        .to(
          ".top",
          0.2,
          { rotationZ: 45, transformOrigin: "50% 50%" },
          "rotate"
        )
        .to(
          ".bot",
          0.2,
          { rotationZ: -45, transformOrigin: "50% 50%" },
          "rotate"
        );

      controlit.addEventListener("click", function () {
        document.querySelector(".bot").style.fill = "white";
        document.querySelector(".top").style.fill = "white";
        document.querySelector(".mid").style.fill = "white";

        menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
      });
    },
  },
};
</script>
