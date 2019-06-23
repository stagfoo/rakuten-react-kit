import { store } from 'domain/store/main';
import render from 'renderer';
import startRouters from 'domain/middleware/router';

store.addWatch('renderLoop', render);
startRouters();
