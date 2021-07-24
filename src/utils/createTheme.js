export const createTheme = theme => {
  const baseTheme = theme || {};

  return {
    ...baseTheme,
    colors: {
      primary: 'purple',
      ...baseTheme.colors,
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      ...baseTheme.spacing,
    },
    fonts: {
      primary:
        // eslint-disable-next-line max-len
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      heading: 'Open Sans',
      code:
        "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      ...baseTheme.fonts,
    },
    fontSizes: {
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      ...baseTheme.fontSizes,
    },
    fontWeights: {
      medium: 500,
      semibold: 600,
      bold: 700,
      ...baseTheme.fontWeights,
    },
  };
};
