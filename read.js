describe('computer list app - read function', function() {
    browser.ignoreSynchronization = true;

    //element locators are defined before the actual tests
    var searchbox = element(by.css('#searchbox'));
    var required = element(by.css('#main > form > fieldset > div.clearfix.error > div > span'));
    var zeroResults = element(by.css('#main > div.well > em'));
    var firstComputer = element(by.css('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'));
    var searchSubmit = element(by.css('#searchsubmit'));
	var nextButton=element(by.css('#pagination > ul > li.next > a'));

    //wait for element to be present function with a timeout of 3 seconds
    function waitfor(element) {
        browser.wait(function() {
            return element.isDisplayed();
        }, 3000);
    }

    it('should be able to navigate to the 3rd page', function() {

        browser.get('http://computer-database.herokuapp.com/computers');
        waitfor(nextButton);
        nextButton.click();
		waitfor(nextButton);
        nextButton.click();
        waitfor(firstComputer);
        expect(browser.getCurrentUrl()).toEqual('http://computer-database.herokuapp.com/computers?p=2');//this is the url for the 3rd page
    });
	
	it('should display the correct message if there is nothing found', function() {

        browser.get('http://computer-database.herokuapp.com/computers');
        waitfor(searchbox);
        searchbox.sendKeys('-*/-*/-a*sefasdffasdf');
		searchSubmit.click();
		waitfor(zeroResults);
        expect(zeroResults.getText()).toEqual('Nothing to display');
    });
	
	

});