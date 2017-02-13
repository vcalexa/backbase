describe('computer list app', function() {
	browser.ignoreSynchronization = true;
	
	//element locators are defined before the actual tests
	var searchbox=element(by.css('#searchbox'));
	var message=element(by.css('#main > div.alert-message.warning'));
    var addComputer=element(by.id('add'));
	var name=element(by.id('name'));
	var introduced=element(by.id('introduced'));
	var discontinued=element(by.id('discontinued'));
	var company=element(by.id('company'));
    var submit=element(by.css('#main > form > div > input'));
	//wait for element to be present function with a timeout of 3 seconds
	function waitfor(element){
		browser.wait(function() {
    return element.isDisplayed();
}, 3000);
	}
		
		
		
  it('should create a computer instance with name Testcase1', function() {
    
    browser.get('http://computer-database.herokuapp.com/computers');
	
	waitfor(addComputer);
	addComputer.click();
	waitfor(name);
	name.sendKeys('Testcase1');
	submit.click();
	waitfor(message);
	expect(message.getText()).toEqual('Done! Computer Testcase1 has been created');
    
    
    //expect(todoList.get(2).getText()).toEqual('write first protractor test');
	//var completedAmount = element.all(by.css('.done-true'));
    
  });
  
  it('should create a computer instance with name TC2, dates and company', function() {
    
    browser.get('http://computer-database.herokuapp.com/computers');
	waitfor(addComputer);
	addComputer.click();
	waitfor(name);
	name.sendKeys('TC2');
	introduced.sendKeys('2017-02-13');
	discontinued.sendKeys('2018-02-13');
	company.sendKeys('Netronics');
	submit.click();
	waitfor(message);
	expect(message.getText()).toEqual('Done! Computer TC2 has been created');
    browser.driver.sleep(2500);
  });
});