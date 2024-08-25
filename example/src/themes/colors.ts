export const COLORS = {
  /** #FFFF00 Yellow */
  accent: 'yellow',
  /** #FFFFFF White */
  white: 'white',
  /**
   * #F1FFFA Mint Cream
   * @param alpha `number`
   * @defaultValue `1`
   * @returns `rgba(29, 30, 44, ${alpha})`
   */
  mainLightAlpha: (alpha = 1) => `rgba(242, 255, 250, ${alpha})`,
  /**
   * #1D1E2C Raisin Black
   * @param alpha `number`
   * @defaultValue `1`
   * @returns `rgba(29, 30, 44, ${alpha})`
   */
  mainDarkAlpha: (alpha = 1) => `rgba(29, 30, 44, ${alpha})`,
};
