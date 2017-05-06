import { MdlMobilePage } from './app.po';

describe('mdl-mobile App', () => {
  let page: MdlMobilePage;

  beforeEach(() => {
    page = new MdlMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
