import { LibraryServicePage } from './app.po';

describe('library-service App', () => {
  let page: LibraryServicePage;

  beforeEach(() => {
    page = new LibraryServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
