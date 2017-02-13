describe('computer list app', function() {
    browser.ignoreSynchronization = true;

    //element locators are defined before the actual tests
    var searchbox = element(by.css('#searchbox'));
    var message = element(by.css('#main > div.alert-message.warning'));
    var addComputer = element(by.id('add'));
    var name = element(by.id('name'));
    var introduced = element(by.id('introduced'));
    var discontinued = element(by.id('discontinued'));
    var company = element(by.id('company'));
    var submit = element(by.css('#main > form > div > input'));
    var required = element(by.css('#main > form > fieldset > div.clearfix.error > div > span'));
    var introText = element(by.css('#main > form > fieldset > div.clearfix.error > label'));
    var firstComputer = element(by.css('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'));
    var searchSubmit = element(by.css('#searchsubmit'));
	var deleteButton=element(by.css('#main > form.topRight > input'));
	var numberOfComputers=element(by.css('#pagination > ul > li.current > a'));

    //wait for element to be present function with a timeout of 3 seconds
    function waitfor(element) {
        browser.wait(function() {
            return element.isDisplayed();
        }, 3000);
    }

    it('should be able to delete a computer', function() {

        browser.get('http://computer-database.herokuapp.com/computers');

        waitfor(searchbox);
        searchbox.sendKeys('TC3');
        searchSubmit.click();
        waitfor(firstComputer);
        firstComputer.click();
		waitfor(deleteButton);
		deleteButton.click();
        waitfor(message);
        expect(message.getText()).toEqual('Done! Computer has been deleted');
    });
	
	it('should delete a computer and decrement the number', function() {

        browser.get('http://computer-database.herokuapp.com/computers');

       
		var numberParser = function(webElement){
            return new Promise(function(){
                webElement.getText().then(function (text) {
                    var firstNumber = parseInt(text.slice(-4));
                    waitfor(searchbox);
                    searchbox.sendKeys('TC3');
					waitfor(firstComputer);
                    firstComputer.click();
                    waitfor(deleteButton);
                    deleteButton.click();
                    webElement.getText().then(function (text) {
                        var secondNumber = parseInt(text.slice(-4));
                        expect(firstNumber-1).toBe(secondNumber);//assert the number of computers has decreased by 1
                    })
                })
            });
        };
		numberParser(numberOfComputers);
    });
	
	

});