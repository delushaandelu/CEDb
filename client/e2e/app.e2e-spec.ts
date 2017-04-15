import { CedbPage } from './app.po';

describe('cedb App', function() {
  let page: CedbPage;

  beforeEach(() => {
    page = new CedbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
