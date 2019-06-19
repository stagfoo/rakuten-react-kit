/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/detail.jsx
 * This file defines the 'detail' component and how it will be rendered.
 */

import * as React from 'react';
import { DetailItem } from 'domain/store/main';
import { Loading } from 'components/presentational/loading';
// Exports List as a importable function
export default function Detail({ detail, loading }:
  { detail: DetailItem, loading: boolean }) {
  return <article>
        <a
          href='javascript:history.back()'
          type="button" className="btn btn-default">Back</a>
        <Loading loading={loading} >
          <p><b>Name:</b> {detail.name}</p>
          <p><b>Height:</b> {detail.height}</p>
          <p><b>Weight:</b> {detail.weight}</p>
          <p><img src={detail.sprites.frontDefault} alt={detail.name} /></p>
        </Loading>
  </article>;
}
