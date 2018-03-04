import { VocabularyPage } from './app.po';

describe('vocabulary App', () => {
  let page: VocabularyPage;

  beforeEach(() => {
    page = new VocabularyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
