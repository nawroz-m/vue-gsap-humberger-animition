import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
  },
};
