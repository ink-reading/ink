export const MIN_SIDEBAR_WIDTH = 240;
export const MAX_SIDEBAR_WIDTH = 480;
const DEFAULT_SIDEBAR_WIDTH = 320;

let open = $state(true);
let width = $state(DEFAULT_SIDEBAR_WIDTH);

const sidebar = {
  get open() {
    return open;
  },

  get width() {
    return width;
  },

  setOpen(val: boolean) {
    open = val;
  },

  toggleOpen() {
    open = !open;
  },

  setWidth(val: number) {
    width = val;
  },
};

export default sidebar;
