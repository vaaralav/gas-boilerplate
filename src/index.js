// @flow
import print from './print';

Logger.log(UrlFetchApp.fetch('https://google.fi').getContentText());

export type Msg = {
  msg: string,
};

const msg: Msg = {
  msg: 'Hello World!',
};

print(msg);

function foo() {
  print('foo');
}

global.foo = foo;