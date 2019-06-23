import page from 'page';

import { getLogger } from 'domain/logger';
import { getList, getDetailByName, onListFromNetwork, onDetailFromNetwork } from 'domain/middleware/network';
import { updateCurrentPage } from 'domain/store/reducers/main';

type Context = {
  params: {
    name?: string
  }
}

const logger = getLogger('Middleware/router');

const HOME_PAGE = (ctx: Context, next:any) => {
  logger.debug('Home route');
  getList().then(onListFromNetwork);
  updateCurrentPage({ name: 'HOME_PAGE' });
}

const DETAIL_PAGE = (ctx: Context, next:any) => {
  const name = ctx.params.name;
  getDetailByName(name).then(onDetailFromNetwork);
  updateCurrentPage({ name: 'DETAIL_PAGE' });
}


page('/detail/:name', DETAIL_PAGE);
page('', HOME_PAGE)

export default function startRouters() {
  page.start();
}
