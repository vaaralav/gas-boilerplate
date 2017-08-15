// @flow
import print from './print';
import upperFirst from 'lodash/upperFirst';

Logger.log(UrlFetchApp.fetch('https://google.fi').getContentText());

export type Msg = {
  msg: string,
};

const msg: Msg = {
  msg: upperFirst('hello world!'),
};

print(msg);

const foo = () => {
  const foo = {msg: foo};
  const bar = Object.assign({}, foo);
  print(foo);
  print(bar);
}

global.foo = foo;