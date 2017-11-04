import { MarketStarterPage } from './app.po';

describe('market-starter App', function() {
  let page: MarketStarterPage;

  beforeEach(() => {
    page = new MarketStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
