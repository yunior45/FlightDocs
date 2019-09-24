exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome'
    },

    specs: ['spec.js', 'spec2.js','spec3.js', 'spec4.js']
};
