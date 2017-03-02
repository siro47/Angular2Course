import { Angular2CoursePage } from './app.po';

describe('angular2-course App', function() {
  let page: Angular2CoursePage;

  beforeEach(() => {
    page = new Angular2CoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
