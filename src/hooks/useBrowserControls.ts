export default function useBrowserControls() {
  return {
    setDocumentTitle(title: string) {
      document.title = title;
    },
    setBodyTheme(theme: 'light' | 'dark' | 'system') {
      switch (theme) {
        case 'light':
          document.body.classList.add('light');
          break;

        case 'dark':
          document.body.classList.add('dark');
          break;

        case 'system': {
          document.body.classList.remove('light', 'dark');
          break;
        }

        default:
          return;
      }
    },
  };
}
