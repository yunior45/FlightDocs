describe('Compare items from Grid View', function () {
    it('Navigate to site', function(){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    });

    it('Click on dresses tab, verify grid view', function () {
        element.all(by.css('a[title="Dresses"]')).get(1).click();
        element(by.css('li[id="grid"]')).click();
    });

    it('Hover over and click Add to compare (at least 2 items)', function () {
        var counter = 3;
        var item = 0;

        while (counter < 5){
            browser.actions().mouseMove(element.all(by.css('div[class="product-container"]')).get(item))
                .perform().then(function() {
                    browser.sleep(1000);
                    browser.actions().mouseMove(element(by.css('a[class="add_to_compare"]'))).perform()
                        .then(function () {
                            element(by.css('a[Cdata-id-product="'+counter+'"]')
                                && by.css('a[class="add_to_compare"]')).click();
                        })
                });
            counter++;
            item++;
        }
    });

    it('Click compare button', function () {
        element(by.css('form[class="compare-form"]')).click();
    });

    it('Validate the content', function () {
        browser.sleep(2000);
        element.all(by.css('td[class="comparison_feature_even comparison_infos product-3"]')).first().getText()
            .then(function (text) {
                expect(text).toBe('Cotton');
            });
        element.all(by.css('td[class="comparison_feature_even comparison_infos product-4"]')).first().getText()
            .then(function (text) {
                expect(text).toBe('Viscose');
            });
    });

    it('Click add to cart', function () {
        element(by.css('a[title="Add to cart"]')).click();
    });

    it('Click proceed to checkout button', function () {
        browser.sleep(1000);
        element(by.css('div[class="button-container"]')
            && by.css('a[title="Proceed to checkout"]')).click();
    });
});