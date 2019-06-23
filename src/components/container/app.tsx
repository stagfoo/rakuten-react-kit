import * as React from 'react';
import { state } from 'domain/store/main';

import List from 'components/presentational/list';
import Detail from 'components/presentational/detail';
import { onClickItem } from 'domain/middleware/user';

export function App() {
  const _state = state();
  const content = (pageName => {
    switch (pageName) { case 'HOME_PAGE':
        return <List
          list={_state.allItems}
          onClickItem={onClickItem}
          />;
      case 'DETAIL_PAGE':
        return <Detail detail={_state.detail} loading={_state.loading}/>;
      default:
        return <p>Page not found</p>;
    }
  })(_state.currentPage.name);

  return (
      <div>
        <style>
            {`
            body,button {
              font-size: 42px;
              font-family: monospace;
            }
            button {
              padding: 8px;
            }
            `}
        </style>
          { content }
      </div>
  );
}
