import { CognitevPage } from './app.po';

describe('cognitev App', () => {
  let page: CognitevPage;

  beforeEach(() => {
    page = new CognitevPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
