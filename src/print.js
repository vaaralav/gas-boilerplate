// @flow
import type { Msg } from './index';

export default ({ msg }: Msg): void => {
  Logger.log(msg);
};
