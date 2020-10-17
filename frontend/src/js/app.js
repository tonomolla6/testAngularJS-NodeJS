import angular from 'angular';

// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';
import 'angular-ui-router';

// Import our templates file (generated by Gulp)
import './config/app.templates';

// Import toaster.
import toaster from 'angular-toastr';

// Angular Messages.
import 'angular-messages';
import 'angular-ui-bootstrap';

// Import our app functionaity
import './layout';
import './components';
import './home';
import './profile';
import './article';
import './services';
import './auth';
import './settings';
import './editor';
import './download';
import './winners';
import './details_services';

// Create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.layout',
  'app.components',
  'app.home',
  'app.profile',
  'app.article',
  'app.services',
  'app.auth',
  'app.settings',
  'app.download',
  'app.editor',
  'app.winners',
  'app.details_services',
  'ngMessages',
  toaster,
  'ui.bootstrap'
];

// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
