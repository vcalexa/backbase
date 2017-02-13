describe('computer list app - create function', function() {
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
	var numberOfComputers=element(by.css('#pagination > ul > li.current > a'));
	
	
	//function to wait for element to be present with a timeout of 3 seconds
	function waitfor(element){
		browser.wait(function() {
	return element.isDisplayed();
	}, 3000);
	}
		
		
  it('should NOT create a computer with missing name', function() {
	
	browser.get('http://computer-database.herokuapp.com/computers');
	browser.driver.manage().window().maximize();
	waitfor(addComputer);

	addComputer.click();
	submit.click();
	expect(required.getText()).toEqual('Required');
  }); 
  
  it('should NOT create a computer instance with invalid date', function() {
	
	browser.get('http://computer-database.herokuapp.com/computers');
	
	waitfor(addComputer);
	addComputer.click();
	waitfor(name);
	name.sendKeys('Testcase1');
	introduced.sendKeys('abc');
	submit.click();
	waitfor(submit);   //the assertion in this case is simply the presence of the submit button
					   //which should not be there except if the form contains errors
  }); 
  
  it('should create a computer instance with name Testcase1', function() {
	
	browser.get('http://computer-database.herokuapp.com/computers');
	
	waitfor(addComputer);
	addComputer.click();
	waitfor(name);
	name.sendKeys('Testcase1');
	submit.click();
	waitfor(message);
	expect(message.getText()).toEqual('Done! Computer Testcase1 has been created');
	
	
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
  });
  
  it('should create a computer instance and increment the number of computers', function() {
	
	browser.get('http://computer-database.herokuapp.com/computers');
	
	
	var numberParser = function(webElement){
            return new Promise(function(){
                webElement.getText().then(function (text) {
                    var firstNumber = parseInt(text.slice(-4));//get the last characters of the string to get the no of computers
                    waitfor(addComputer);
                    addComputer.click();
                    waitfor(name);
                    name.sendKeys('TC3');
                    submit.click();
                    webElement.getText().then(function (text) {
                        var secondNumber = parseInt(text.slice(-4));
                        expect(firstNumber+1).toBe(secondNumber);//this is the actual assertion that the number is incremented by 1
                    })
                })
            });
        };
		numberParser(numberOfComputers);
	waitfor(message);
	
  });
});