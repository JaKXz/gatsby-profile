import MobileDetect from "mobile-detect";
const isBrowser = typeof window !== "undefined";

const md = isBrowser && new MobileDetect(window.navigator.userAgent);

export default isBrowser
  ? md
  : Object.getOwnPropertyNames(MobileDetect.prototype).reduce(
      (acc, fn) => ({
        ...acc,
        [fn]: () => false,
      }),
      {},
    );

export const isPhone = isBrowser && md.mobile() && !md.tablet();
