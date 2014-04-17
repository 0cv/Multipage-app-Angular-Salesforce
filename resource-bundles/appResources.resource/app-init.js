define(['app', 'routeDefs'], function(app) {

    // app.config(['routeDefsProvider', function(routeDefsProvider) {
    //     // in large applications, you don't want to clutter up app.config
    //     // with routing particulars.  You probably have enough going on here.
    //     // Use a service provider to manage your routing.
    // }]);

    app.run([
        '$couchPotato', '$state', '$stateParams', '$rootScope',
        function($couchPotato, $state, $stateParams, $rootScope) {
            console.log('in app-init.js');

            // by assigning the couchPotato service to the lazy property, we
            // the register functions will know to run-time-register components
            // instead of config-time-registering them.
            app.lazy = $couchPotato;

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);
});