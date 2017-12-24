import { Vidaccion2Page } from './app.po';

describe('vidaccion2 App', () => {
  let page: Vidaccion2Page;

  beforeEach(() => {
    page = new Vidaccion2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
