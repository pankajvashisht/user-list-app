import React, {Fragment, createElement, ReactNode} from 'react';

interface ListViewElementProps<T> {
  data?: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

export default function ListViewElement<T>({data = [], renderItem}: ListViewElementProps<T>) {
  return createElement(
    Fragment,
    null,
    data.map((item, index) => <Fragment key={index}>{renderItem(item, index)}</Fragment>),
  );
}
