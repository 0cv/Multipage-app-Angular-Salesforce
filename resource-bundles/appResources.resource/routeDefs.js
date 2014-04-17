define(['app', 'require'], function(app, require) {
    app.registerProvider(
        'routeDefs',
        [
            '$stateProvider',
            '$urlRouterProvider',
            '$couchPotatoProvider',
            function (
                $stateProvider,
                $urlRouterProvider,
                $couchPotatoProvider
            ) {
                console.log('in routeDefs.js');
                this.$get = angular.noop;
                
                $stateProvider
                    .state('header', {
                        abstract: true,
                        resolve: {
                            a: $couchPotatoProvider.resolveDependencies(['controllers/main'])
                        },
                        views: {
                            'main': {
                                templateUrl: require.toUrl('views/header.html'),
                                controller: 'main'
                            }
                        },
                        onEnter: function(){
                            console.log("enter header");
                        }
                    })
                    .state('header.sidebar', {
                        abstract: true,
                        resolve: {
                            a: $couchPotatoProvider.resolveDependencies(['controllers/sidebar'])
                        },
                        views: {
                            'sidebar': {
                                templateUrl: require.toUrl('views/sidebar.html'),
                                controller: 'sidebar'
                            }
                        },
                        onEnter: function(){
                            console.log("enter header.sidebar");
                        }
                    })
                    .state('header.sidebar.view1', {
                        url:'/ngPage1',
                        resolve: {
                            a: $couchPotatoProvider.resolveDependencies(['controllers/page1'])
                        },
                        views: {
                            'view': {
                                templateUrl: require.toUrl('views/page1.html'),
                                controller: 'page1'
                            }
                        },
                        onEnter: function(){
                            console.log("enter header.sidebar.view1");
                        }
                    })
                    .state('header.sidebar.view2', {
                        url:'/ngPage2',
                        resolve: {
                            a: $couchPotatoProvider.resolveDependencies(['controllers/page2'])
                        },
                        views: {
                            'view': {
                                templateUrl: require.toUrl('views/page2.html'),
                                controller: 'page2'
                            }
                        },
                        onEnter: function(){
                            console.log("enter header.sidebar.view2");
                        }
                    })
                    .state('header.view3', {
                        url:'/ngPage3',
                        resolve: {
                            a: $couchPotatoProvider.resolveDependencies(['controllers/page3'])
                        },
                        views: {
                            'other': {
                                templateUrl: require.toUrl('views/page3.html'),
                                controller: 'page3'
                            }
                        },
                        onEnter: function(){
                            console.log("enter header.view3");
                        }
                    });
                $urlRouterProvider.otherwise('/ngPage1');
            }
        ]
    );
});