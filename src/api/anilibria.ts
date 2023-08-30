import initApi from '@/functions/initApi';

const api = initApi();

export async function catalogReader(limit: number, page: number, itemsPerPage: number) {
  return await api.getTitleUpdates({ limit, page, items_per_page: itemsPerPage, filter: ['code', 'posters', 'id'] });
}

export async function search(query: string) {
  return await api.getTitleSearch({ search: query });
}

export async function recentUpdates() {
  return await api.getTitleUpdates({ filter: ['code', 'posters', 'id', 'name'] });
}

export async function getRelease(code: string) {
  return await api.getTitle({ code });
}
