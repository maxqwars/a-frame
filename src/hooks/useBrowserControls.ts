export default function useBrowserControls() {
  return {
    setDocumentTitle(title: string) {
      document.title = title;
    },
    setBodyTheme(theme: 'light' | 'dark' | 'system') {
      switch (theme) {
        case 'light':
          document.body.classList.remove('dark-body');
          document.body.classList.add('light-body');
          break;

        case 'dark':
          document.body.classList.remove('light-body');
          document.body.classList.add('dark-body');
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
