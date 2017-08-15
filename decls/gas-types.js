// @flow

type $HttpResponse = {
  getContentText(): string,
};
type $UrlFetchApp = {
  fetch(string): $HttpResponse,
};
type $Logger = {
  log(string): void,
};
declare var UrlFetchApp: $UrlFetchApp;
declare var Logger: $Logger;
