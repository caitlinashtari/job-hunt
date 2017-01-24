import { JobsHuntPage } from './app.po';

describe('jobs-hunt App', function() {
  let page: JobsHuntPage;

  beforeEach(() => {
    page = new JobsHuntPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
