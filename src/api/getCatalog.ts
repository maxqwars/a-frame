import initApi from '@/functions/initApi';

const api = initApi();

export async function getCatalog(limit: number, page: number, itemsPerPage: number) {
  return await api.getTitleUpdates({ limit, page, items_per_page: itemsPerPage, filter: ['code', 'posters', 'id'] });
}
