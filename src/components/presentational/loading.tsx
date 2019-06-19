import * as React from 'react';

export function Loading(props) {
  return props.loading ? (<div>Now loading ...</div>) : <div>{props.children}</div>
}
