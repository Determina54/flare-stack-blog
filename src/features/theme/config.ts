// 添加新主题，这里需要同步更新
export const themeNames = ["default", "fuwari"] as const;
export type ThemeName = (typeof themeNames)[number];

export interface ThemeConfig {
  viewTransition: boolean; // 是否开启路由级的 viewTransition 过渡动画
  pendingMs?: number; // 默认1000ms
}

export const themes: Record<ThemeName, ThemeConfig> = {
  default: {
    viewTransition: true,
    pendingMs: 0,
  },
  fuwari: {
    viewTransition: false,
    pendingMs: 1000,
  },
};
