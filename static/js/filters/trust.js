(function () {

    'use strict';

    window.app.filter("trust", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(ansi_up.ansi_to_html(htmlCode));
        }
    }]);
}());
