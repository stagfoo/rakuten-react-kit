import { getLogger } from 'domain/logger';
import page from 'page';
const logger = getLogger('Middleware/user');


export function onClickItem(item:string){
  logger.info(`Loading here ${item}`);
  page(`/detail/${item}`)
}
