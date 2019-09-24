

describe('Compare items from List View', function () {
    it('navigate', function () {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    });

    it('click dress tab', function () {
        element.all(by.css('a[title="Dresses"]')).get(1).click();
    });

    it('Change view to list view', function () {
        element(by.css('li[id="list"]')).click();
    });

    it('Click on Add to compare for several items', function () {
        var counter = 3;
        var item = 1;
        while(counter<5){
            element(by.css('a[Cdata-id-product="'+counter+'"]')
                && by.css('a[class="add_to_compare"]')).click();
            browser.actions().mouseMove(element.all(by.css('a[class="add_to_compare"]')).get(item)).perform();
            counter++;
            item++;
            browser.sleep(1000);
        }
    });

    it('Click compare button', function () {
        element(by.css('form[class="compare-form"]')).click();
    });

    it('Validate content', function () {
        browser.sleep(1000);
        element.all(by.css('td[class="comparison_feature_even comparison_infos product-3"]')).first().getText()
            .then(function (text) {
            expect(text).toBe('Cotton');
        });
        element.all(by.css('td[class="comparison_feature_even comparison_infos product-4"]')).first().getText()
            .then(function (text) {
                expect(text).toBe('Viscose');
            })
    });

    it('Click add to cart for an item', function () {
        element(by.css('a[title="Add to cart"]')).click();
    });

    it('Click Continue shopping button', function () {
        browser.sleep(1000);
        element(by.css('div[class="button-container"]')
            && by.css('span[title="Continue shopping"]')).click();
    });
});
