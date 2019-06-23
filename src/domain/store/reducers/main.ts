import { getLogger } from 'domain/logger';
import { store, Page, Item, DetailItem } from 'domain/store/main';

const logger = getLogger('State');

export function updateCurrentPage(currentPage: Page) {
  logger.debug(`Update current page ${currentPage.name}`);
  return store.swap(oldState => ({ ...oldState, currentPage }));
}

export function updateAllItems(items: Array<Item>) {
  logger.debug(`Update all items ${items.length} items`);
  return store.swap(oldState => ({ ...oldState, allItems: items }));
}

export function updateDetailItem(detail: DetailItem) {
  logger.debug(`Update detail item ${detail.name}`);
  return store.swap(oldState => ({ ...oldState, detail }));
}

export function updateLoading(loading: boolean) {
  return store.swap(oldState => ({ ...oldState, loading }));
}
