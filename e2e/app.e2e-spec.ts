import { MyFisrtAppPage } from './app.po';

describe('my-fisrt-app App', () => {
  let page: MyFisrtAppPage;

  beforeEach(() => {
    page = new MyFisrtAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
