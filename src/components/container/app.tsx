/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved. *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/app.jsx
 * This file defines the 'app' component and how it will be rendered.
 */

import * as React from 'react';
import { currentPage, filteredItems, detailItem, loading } from 'domain/store/selectors/main';
import List from 'components/presentational/list';
import Detail from 'components/presentational/detail';
import { detailRoute } from 'domain/middleware/router';

export function App() {

  const content = (pageName => {
    switch (pageName) { case 'HOME_PAGE':
        return <List
          list={filteredItems()}
          detailRoute={detailRoute}
          />;
      case 'DETAIL_PAGE':
        return <Detail detail={detailItem()} loading={loading()}/>;
      default:
        return <p>Page not found</p>;
    }
  })(currentPage().name);

  return (
      <div>
        <style>
            {`
            body {
              font-size: 42px;
              font-family: monospace;
            }
            article {
              padding: 16px;
            }
            `}
        </style>
          { content }
      </div>
  );
}
