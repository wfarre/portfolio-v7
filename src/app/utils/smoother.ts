import { ScrollSmoother } from "gsap/all";

let smootherInstance: ScrollSmoother | null = null;

export const setSmoother = (smoother: ScrollSmoother) => {
  smootherInstance = smoother;
};

export const getSmoother = () => smootherInstance;
