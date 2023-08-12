export default function useBrowserControls() {
  return [
    function(title: string) {
      document.title = title
    }
  ];
}
