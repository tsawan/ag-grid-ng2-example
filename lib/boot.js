System.register(['angular2/platform/browser', 'angular2/core', './MainComponent', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, MainComponent_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MainComponent_1_1) {
                MainComponent_1 = MainComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(MainComponent_1.MainComponent, router_1.ROUTER_PROVIDERS.concat([core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]));
        }
    }
});
//# sourceMappingURL=boot.js.map