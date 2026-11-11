// Іконки карток (вміст <svg viewBox="0 0 24 24">). Ключ — id групи цін або slug проблеми.
// Для нових записів без іконки показується листок.
const leaf = '<path d="M5 19C5 10 10 5 20 4c-1 10-6 15-15 15z"/><path d="M5 19 13 11"/><path d="M10 14.5h3.5M12 11.5h3"/>';

const icons: Record<string, string> = {
  // Групи послуг (prices.yaml → id)
  konsultatsiia: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.4 15.4 21 21"/><circle cx="10.5" cy="10.5" r="2.2" fill="currentColor" stroke="none"/>',
  chystka: leaf,
  pilingy: '<path d="M4 7.5 12 3.5l8 4-8 4z"/><path d="M4 12l8 4 8-4"/><path d="M4 16.5l8 4 8-4"/>',
  inyektsii: '<path d="M12 3c3.5 4.5 6 7.7 6 11a6 6 0 0 1-12 0c0-3.3 2.5-6.5 6-11z"/><path d="M12 11.5v5M9.5 14h5"/>',
  botulinoterapiia: '<path d="M17 3l4 4M19 5l-3 3"/><path d="M16 8 8 16l-3 .9.9-3L14 6z"/><path d="M10 10l1.6 1.6M12 8l1.6 1.6"/><path d="M5.5 18.5 3 21"/>',
  // Проблеми шкіри (problems.yaml → slug)
  akne: '<path d="M12 3c5 0 8 3.6 8 8.4C20 17 16.5 21 12 21s-8-4-8-9.6C4 6.6 7 3 12 3z"/><circle cx="9" cy="10" r=".9" fill="currentColor"/><circle cx="15" cy="9.5" r=".7" fill="currentColor"/><circle cx="13.5" cy="14.5" r="1.1" fill="currentColor"/><circle cx="8.5" cy="14" r=".6" fill="currentColor"/>',
  rozatsea: '<path d="M3 7c3-2 6 2 9 0s6-2 9 0"/><path d="M3 12c3-2 6 2 9 0s6-2 9 0"/><path d="M3 17c3-2 6 2 9 0s6-2 9 0"/>',
  pigmentatsiia: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3.5M12 18v3.5M2.5 12H6M18 12h3.5M5.3 5.3l2.5 2.5M16.2 16.2l2.5 2.5M5.3 18.7l2.5-2.5M16.2 7.8l2.5-2.5"/>',
  novoutvorennya: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.4 15.4 21 21"/><circle cx="10.5" cy="10.5" r="2.2" fill="currentColor" stroke="none"/>',
  'vypadinnya_volossya': '<path d="M6 21c0-7 1-12 6-17"/><path d="M11 21c0-6 1.5-10 5-14"/><path d="M16 21c0-4 1-7 3-9"/><path d="M3 21h18"/>',
  antiage: '<path d="M8.5 3h7M10 3v13.5a2 2 0 0 0 4 0V3"/><path d="M10 11h4"/><path d="M19 12.5c1 1.4 1.6 2.3 1.6 3.1a1.6 1.6 0 0 1-3.2 0c0-.8.6-1.7 1.6-3.1z"/>',
};

export function icon(key: string): string {
  return icons[key] ?? leaf;
}
