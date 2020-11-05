function BoardConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.board', {
            url: '/board',
            controller: 'BoardCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'board/board.html',
            title: 'Board'
            //, resolve: {
            //     // popular: function(Articles) {
            //     //     return Articles.query();
            //     // }
            // }
        });
};

export default BoardConfig;