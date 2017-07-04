import { VantageDashboardPage } from './app.po';

describe('vantage-dashboard App', () => {
  let page: VantageDashboardPage;

  beforeEach(() => {
    page = new VantageDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
