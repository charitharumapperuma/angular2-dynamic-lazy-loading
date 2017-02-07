import { Angular2DynamicLazyLoadingPage } from './app.po';

describe('angular2-dynamic-lazy-loading App', function() {
  let page: Angular2DynamicLazyLoadingPage;

  beforeEach(() => {
    page = new Angular2DynamicLazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
