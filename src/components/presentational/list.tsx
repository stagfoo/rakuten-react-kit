

import * as React from 'react';

type Props = {
  list: Array<{name: string, url: string}>,
  onClickItem: ( name: string ) => void
}

// Exports List as a importable function
export default function List( { list, onClickItem } : Props) {
  const content = list.map((item, index) =>
      <article key={index}>
          <button onClick={() => onClickItem(item.name)} >
            <div className='result'>{item.name}</div>
          </button>
      </article>);

  return <div>{content}</div>;
}
