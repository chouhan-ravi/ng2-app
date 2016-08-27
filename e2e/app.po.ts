export class MyNgappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-ngapp-app h1')).getText();
  }
}
