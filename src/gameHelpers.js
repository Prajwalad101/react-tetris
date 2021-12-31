export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Returns a multidimensional array with columns and rows equal to STAGE_WIDTH and STAGE_HEIGHT respectively

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));
