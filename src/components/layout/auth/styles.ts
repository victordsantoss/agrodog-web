import defaultTheme from "@/configs/styles/theme/defaultTheme";

export const layoutStyle = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultTheme.palette.primary.main,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  main: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
  }
};
