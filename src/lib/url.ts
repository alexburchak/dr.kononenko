// Додає BASE_PATH до внутрішніх посилань, щоб сайт працював і на github.io/<репозиторій>/, і на власному домені.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
