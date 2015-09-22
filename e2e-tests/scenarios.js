'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /MapView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/MapView");
  });


  describe('MapView', function() {

    beforeEach(function() {
      browser.get('index.html#/MapView');
    });


    it('should render MapView when user navigates to /MapView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('addText', function() {

    beforeEach(function() {
      browser.get('index.html#/addText');
    });


    it('should render addText when user navigates to /addText', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
