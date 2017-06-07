import { MonAppAngularPage } from './app.po';

describe('mon-app-angular App', () => {
  let page: MonAppAngularPage;

  beforeEach(() => {
    page = new MonAppAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
