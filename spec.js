describe('Flightdocs Automation challenge', function () {

    it('Navigate to site', function(){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    });

    it('Click dress tab', function () {
        element.all(by.css('a[title="Dresses"]')).get(1).click();
    });

    it('filter and select dress', function () {
        element(by.css('li[class="last"]')).click().then(function () {
            element(by.css('a[title="Printed Summer Dress"]')).click().then(function () {
                browser.sleep(1000);
                element(by.css('a[id="color_16"]')).click();
            })
        })
    });

    it('select color and size', function () {
        element(by.css('a[id="color_16"]')).click().then(function () {
            var select = element(by.css('div[class="selector"]'));
            select.$('[value="2"]').click().then(function () {
                element(by.css('button[class="exclusive"]')).click()
            })
        })
    });

    it('Click continue shopping button', function () {
        browser.sleep(1000);
        element(by.css('div[class="button-container"]')
            && by.css('span[title="Continue shopping"]')).click();
    });

    it('Hover over womens tab and select t-shirt', function () {
        browser.sleep(1000);
        browser.actions().mouseMove(element(by.css('a[title="Women"]'))).perform();
        element(by.css('a[title="T-shirts"]')).click();
    });

    it('select a blue shirt', function () {
        browser.actions().mouseMove(element(by.css('div[class="product-container"]'))).perform()
        element(by.css('a[id="color_2"]')).click();
    });
    
    it('Change quantity, color, size and add to cart', function () {
        browser.sleep(1000);
        element.all(by.css('a[data-field-qty="qty"]')).get(0).click();
        element(by.css('div[class="selector"]')).click().then(function () {
            var size_dropDown = element(by.css('select[name="group_1"]'));
            size_dropDown.$('[value="1"]').click()
        });
        var color = element(by.css('ul[id="color_to_pick_list"]'));
        color.$('a[name="Blue"]').click();
        element(by.css('button[class="exclusive"]')).click();
    });

    it('Click continue shopping button', function () {
        browser.sleep(1000);
        element(by.css('div[class="button-container"]')
            && by.css('span[title="Continue shopping"]')).click();
    });

    it('change quantity to 3, color, and size', function () {
        browser.sleep(1000);
        var counter = 0;
        var qty = null;
        while(counter < 2){
            element.all(by.css('a[data-field-qty="qty"]')).get(1).click();
            qty = element(by.css('input[name="qty"]')).getText();
            counter = qty;
        }
        element(by.css('div[class="selector"]')).click().then(function () {
            var size_dropDown = element(by.css('select[name="group_1"]'));
            size_dropDown.$('[value="1"]').click()
        });
        browser.sleep(1000);
        var color = element(by.css('ul[id="color_to_pick_list"]'));
        color.$('a[name="Orange"]').click();
        element(by.css('button[name="Submit"]')).click();
    });
    
    it('Click Proceed', function () {
        browser.sleep(1000);
        element(by.css('div[class="button-container"]')
            && by.css('a[title="Proceed to checkout"]')).click();
    })
});
