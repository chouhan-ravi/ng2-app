import { MyNgappPage } from './app.po';

describe('my-ngapp App', function() {
  let page: MyNgappPage;

  beforeEach(() => {
    page = new MyNgappPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('my-ngapp works!');
  });
});
