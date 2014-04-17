define(['app'], function(app) {
    app.service('http', function($q){
        return {
            getAccounts: function() {
                var defer = $q.defer();
                ngMainController.getAccounts(
                    function(result, event) {
                        if(event.status) {
                            defer.resolve(result);
                        }
                        else defer.reject(event.message);
                    },
                    {escape:false, buffer: false}
                );
                return defer.promise;
            },
            getContacts: function() {
                var defer = $q.defer();
                ngMainController.getContacts(
                    function(result, event) {
                        if(event.status) {
                            defer.resolve(result);
                        }
                        else defer.reject(event.message);
                    },
                    {escape:false, buffer: false}
                );
                return defer.promise;
            }
        }
    });
});