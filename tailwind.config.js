function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }

    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        theme: {
          primary: 'var(--theme-primary)',
          secondary: 'var(--theme-secondary)',
          accent: 'var(--theme-accent)',
        },
      },
      backgroundColor: {
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
        accent: withOpacity('--color-accent'),
        mainbg: withOpacity('--color-background-main'),
      },
      textColor: {
        primary: {
          main: withOpacity('--color-text-primary-main'),
          muted: withOpacity('--color-text-primary-muted'),
          inverted: withOpacity('--color-text-primary-inverted'),
          accent: withOpacity('--color-primary'),
        },
      },
      borderColor: {
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
        accent: withOpacity('--color-accent'),
      },
    },
  },
  plugins: [],
};
