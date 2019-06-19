/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getLogger } from 'domain/logger';
import { Item, DetailItem, DetailItemFromNetwork } from 'domain/store/main';
import { updateAllItems, updateFilteredItems, updateDetailItem, updateLoading } from 'domain/store/reducers/main';

type Pokemon = { pokemon: { pokemon: { name: string; url: string } }[] };

const logger = getLogger('Middleware/network');
const URL = 'https://pokeapi.co/api/v2/type/1/';
const URL_DETAIL = 'https://pokeapi.co/api/v2/pokemon/';

export async function getList() {
  logger.debug('Requesting list from network', '- list -');
  const resp = await fetch(URL);
  if (resp.ok) {
    const data: Pokemon = await resp.json();
    return data.pokemon.map(e => ({
      name: e.pokemon.name,
      url: e.pokemon.url
    }));
  } else throw new TypeError('getList response is not Ok');
}

export async function getDetailByName(name: string) {
  logger.debug('Requesting from network', '- element -', name);
  updateLoading(true);
  const resp = await fetch(`${URL_DETAIL}${name}`);
  if (resp.ok) {
    return resp.json();
  } else throw new TypeError('getDetailByName response is not Ok');
}

function camelCaseImageFront(detail: DetailItemFromNetwork): DetailItem {
  return {
    ...detail,
    sprites: {
      frontDefault: detail.sprites.front_default
    }
  };
}

export function onListFromNetwork(list: Array<Item>) {
  logger.debug('List from network');
  updateAllItems(list);
  updateFilteredItems(list);
}

export function onDetailFromNetwork(detail: DetailItemFromNetwork) {
  logger.debug('Detail from network');
  updateDetailItem(camelCaseImageFront(detail));
  updateLoading(false);
}
