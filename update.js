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
	var required=element(by.css('#main > form > fieldset > div.clearfix.error > div > span'));
	var introText=element(by.css('#main > form > fieldset > div.clearfix.error > label'));
	//wait for element to be present function with a timeout of 3 seconds
	function waitfor(element){
		browser.wait(function() {
    return element.isDisplayed();
}, 3000);
	}
		
		
  
  
  
  
 /*  it('should create a computer instance with name Testcase2', function() {
    
    browser.get('http://computer-database.herokuapp.com/computers');
	
	waitfor(addComputer);
	addComputer.click();
	waitfor(name);
	name.sendKeys('Testcase2');
	submit.click();
	waitfor(message);
	expect(message.getText()).toEqual('Done! Computer Testcase2 has been created');
	
	
	
    //
    
    //expect(todoList.get(2).getText()).toEqual('write first protractor test');
	//var completedAmount = element.all(by.css('.done-true'));
    
  }); */
  

  
   
});