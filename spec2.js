describe('Delete items', function () {
    it('navigate', function () {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    });
    
    it('Add items and validate', function () {
        var counter = 0;
        var item = 1;

        while(counter < 3){
            browser.actions().mouseMove(element.all(by.css('div[class="product-container"]')).get(counter))
                .perform().then(function () {
                    browser.sleep(1000);
            });
            element(by.css('a[data-id-product="'+item+'"]')).click().then(function () {
                browser.sleep(1000);
            });
            element(by.css('div[class="button-container"]')
                && by.css('span[title="Continue shopping"]')).click();
            item++;
            counter++;
        }

        browser.sleep(1000);
        element.all(by.css('span[class="ajax_cart_quantity"]')).get(0).getText().then(function (text) {
                expect(text).toBe('7');
        });
    });

    it('Hover over button and click x', function(){
        browser.actions().mouseMove(element(by.css('a[title="View my shopping cart"]'))).perform()
            .then(function(){
                browser.sleep(1000);
                browser.actions().mouseMove(element(by.css('span[class="remove_link"]')))
                    .perform().then(function(){
                        element(by.css('span[class="remove_link"]')).click();
                        browser.sleep(1000);
            })
        });
    });

    it('Validate content', function(){
        browser.sleep(1000);
        element.all(by.css('span[class="ajax_cart_quantity"]')).get(0).getText().then(function (text) {
            expect(text).toBe('6');
        });
        browser.sleep(1000);
        browser.actions().mouseMove(element(by.css('a[title="View my shopping cart"]'))).perform();
        element(by.css('span[class="price cart_block_total ajax_block_cart_total"]')).getText()
            .then(function (text) {
                expect(text).toBe('$121.04');
            })
    })

});