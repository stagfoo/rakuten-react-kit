/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

type Props = {
  list: Array<{name: string, url: string}>,
  detailRoute: ( name: string ) => string
}

// Exports List as a importable function
export default function List( { list, detailRoute } : Props) {
  const content = list.map((item, index) =>
      <article key={index}>
          <a href={detailRoute(item.name)} >
            <div className='result'>{item.name}</div>
          </a>
      </article>);

  return <div>{content}</div>;
}
