angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("article/article-actions.html","<article-meta article=\"$ctrl.article\">\n\n  <span ng-show=\"$ctrl.canModify\">\n    <a class=\"btn btn-sm btn-outline-secondary\"\n      ui-sref=\"app.editor({ slug: $ctrl.article.slug })\">\n      <i class=\"ion-edit\"></i> Edit Article\n    </a>\n\n    <button class=\"btn btn-sm btn-outline-danger\"\n      ng-class=\"{disabled: $ctrl.isDeleting}\"\n      ng-click=\"$ctrl.deleteArticle()\">\n      <i class=\"ion-trash-a\"></i> Delete Article\n    </button>\n  </span>\n\n  <span ng-hide=\"$ctrl.canModify\">\n    <follow-btn user=\"$ctrl.article.author\"></follow-btn>\n    <favorite-btn article=\"$ctrl.article\">\n      {{ $ctrl.article.favorited ? \'Unfavorite\' : \'Favorite\' }} Article <span class=\"counter\">({{$ctrl.article.favoritesCount}})</span>\n    </favorite-btn>\n  </span>\n\n</article-meta>\n");
$templateCache.put("article/article.html","<div class=\"article-page\">\n\n  <!-- Banner for article title, action buttons -->\n  <div class=\"banner\">\n    <div class=\"container\">\n\n      <h1 ng-bind=\"::$ctrl.article.title\"></h1>\n\n      <div class=\"article-meta\">\n        <!-- Show author info + favorite & follow buttons -->\n        <article-actions article=\"$ctrl.article\"></article-actions>\n\n      </div>\n\n    </div>\n  </div>\n\n\n\n  <!-- Main view. Contains article html and comments -->\n  <div class=\"container page\">\n\n    <!-- Article\'s HTML & tags rendered here -->\n    <div class=\"row article-content\">\n      <div class=\"col-xs-12\">\n\n        <div ng-bind-html=\"::$ctrl.article.body\"></div>\n\n        <ul class=\"tag-list\">\n          <li class=\"tag-default tag-pill tag-outline\"\n            ng-repeat=\"tag in ::$ctrl.article.tagList\">\n            {{ tag }}\n          </li>\n        </ul>\n\n      </div>\n    </div>\n\n    <hr />\n\n    <div class=\"article-actions\">\n\n      <!-- Show author info + favorite & follow buttons -->\n      <article-actions article=\"$ctrl.article\"></article-actions>\n\n    </div>\n\n    <!-- Comments section -->\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\n\n        <div show-authed=\"true\">\n          <list-errors from=\"$crl.commentForm.errors\"></list-errors>\n          <form class=\"card comment-form\" ng-submit=\"$ctrl.addComment()\">\n            <fieldset ng-disabled=\"$ctrl.commentForm.isSubmitting\">\n              <div class=\"card-block\">\n                <textarea class=\"form-control\"\n                  placeholder=\"Write a comment...\"\n                  rows=\"3\"\n                  ng-model=\"$ctrl.commentForm.body\"></textarea>\n              </div>\n              <div class=\"card-footer\">\n                <img ng-src=\"{{::$ctrl.currentUser.image}}\" class=\"comment-author-img\" />\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\">\n                 Post Comment\n                </button>\n              </div>\n            </fieldset>\n          </form>\n        </div>\n\n        <div show-authed=\"false\">\n          <a ui-sref=\"app.login\">Sign in</a> or <a ui-sref=\"app.register\">sign up</a> to add comments on this article.\n        </div>\n\n        <comment ng-repeat=\"cmt in $ctrl.comments\"\n          data=\"cmt\"\n          delete-cb=\"$ctrl.deleteComment(cmt.id, $index)\">\n        </comment>\n\n\n      </div>\n    </div>\n\n  </div>\n\n\n\n</div>\n");
$templateCache.put("article/comment.html","<div class=\"card\">\n  <div class=\"card-block\">\n    <p class=\"card-text\" ng-bind=\"::$ctrl.data.body\"></p>\n  </div>\n  <div class=\"card-footer\">\n    <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\">\n      <img ng-src=\"{{::$ctrl.data.author.image}}\" class=\"comment-author-img\" />\n    </a>\n    &nbsp;\n    <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\" ng-bind=\"::$ctrl.data.author.username\">\n    </a>\n    <span class=\"date-posted\"\n      ng-bind=\"::$ctrl.data.createdAt | date: \'longDate\'\">\n    </span>\n    <span class=\"mod-options\" ng-show=\"$ctrl.canModify\">\n      <i class=\"ion-trash-a\" ng-click=\"$ctrl.deleteCb()\"></i>\n    </span>\n  </div>\n</div>\n");
$templateCache.put("auth/auth.html","<style>\n  .social {\n    margin: 15px;\n    margin-top: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n\n  .social a.github {\n    color: white;\n    background-color: black;\n    padding: 10px;\n    border: 1px solid black;\n    text-decoration: none;\n  }\n\n  .social a.github:hover {\n    color: black;\n    background-color: transparent;\n  }\n\n  .social a.google {\n    color: white;\n    background-color: #d6483e;\n    padding: 10px;\n    border: 1px solid #d6483e;\n    text-decoration:none;\n    margin: 5px;\n  }\n\n  .social a.google:hover {\n    color: #d6483e;\n    background-color: transparent;\n  }\n\n  .social p {\n    font-weight: bold;\n    width: 100%;\n    text-align: center;\n  }\n\n</style>\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/angular-toastr@2/dist/angular-toastr.css\"/>\n<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\n        <p class=\"text-xs-center\">\n          <a ui-sref=\"app.login\"\n            ng-show=\"$ctrl.authType === \'register\'\">\n            Have an account?\n          </a>\n          <a ui-sref=\"app.register\"\n            ng-show=\"$ctrl.authType === \'login\'\">\n            Need an account?\n          </a>\n        </p>\n        \n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\" ng-show=\"$ctrl.authType === \'register\'\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\"\n              ng-bind=\"::$ctrl.title\">\n            </button>\n\n          </fieldset>\n        </form>\n        <div class=\"social\">\n          <p>Quieres inicial sesion desde servicios externos?</p>\n          <a class=\"github\" href=\"http://localhost:3000/api/auth/github\"> Github </a>\n          <a class=\"google\" href=\"http://localhost:3000/api/auth/google\"> Google </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("customer_services/service.html","<style>\n</style>\n <div class=\"customer_service-page\">\n\n  <!-- Splash banner that only shows when not logged in -->\n  <!-- <div class=\"banner\" show-authed=\"false\">\n    <div class=\"container\">\n      <h1>{{$ctrl.appName}}</h1>\n      <p>Our services for sale to the public</p>\n    </div>\n  </div> -->\n\n\n  <div class=\"container page\">\n    <div class=\"row\">\n      <!-- Main view - contains tabs & article list -->\n      <div class=\"col-md-12\">\n        \n        <services-list services=\"$ctrl.services\"></services-list>\n        \n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("details_services/details_services.html","<style>\n.center {\n      display: flex;\n      flex-direction: column;\n      /* justify-content: center; */\n      align-items: center;\n      padding-bottom: 40px;\n    }\n\n    .padding h4 {\n      margin-top: 40px;\n    }\n\n    .banner {\n      height: 250px;\n      background-color: white;\n      background-image: url(https://i.postimg.cc/h4z3LJ15/server-90389.jpg) !important;\n      display: flex;\n      padding: 0px;\n    }\n\n    .banner3 {\n      background-color: #00000063;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      align-items: center;\n      padding: 40px;\n      height: 100%;\n    }\n\n    .page {\n      border-top: 4px solid #2a96f4;\n      min-height: 350px;\n    }\n\n    .inf {\n      display: flex;\n      justify-content: space-between;\n    }\n\n    .arround {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 100%;\n    }\n\n    .row {\n      height: 245px;\n    }\n\n</style>\n <div class=\"details-service-page primary\">\n\n  <!-- Splash banner that only shows when not logged in -->\n  <div class=\"banner\" show-authed=\"false\">\n    <div class=\"banner3\">\n      <h1>¿Quieres que nos ocupemos de todo?</h1>\n      <p></p>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n      <!-- Main view - contains tabs & article list -->\n      <div class=\"col-md-12 arround\">\n          <h2>Servicio seleccionado: <strong>{{$ctrl.service.title}}</strong></h2>\n          <div>\n            <h4>Descripcion</h4>\n            <p>{{$ctrl.service.description}}</p>\n          </div>\n          \n          <div class=\"inf\">\n            <h5>Precio: <strong>{{$ctrl.service.price}}</strong></h5>\n            <div class=\"button-primary\">Pedir infomacion</div>\n          </div>\n          \n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("download/download.html","<div class=\"download-page primary\">\n\n  <style>\n    .center {\n      display: flex;\n      flex-direction: column;\n      /* justify-content: center; */\n      align-items: center;\n      padding-bottom: 40px;\n    }\n\n    .padding h4 {\n      margin-top: 40px;\n    }\n\n    .banner {\n      height: 400px;\n      background-color: white;\n      background-image: url(https://i.postimg.cc/7ZFPhN5x/programming-1873854.png) !important;\n      display: flex;\n      padding: 0px;\n    }\n\n    .banner3 {\n      background-color: #00000063;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      align-items: center;\n      padding: 40px;\n    }\n\n    .banner3 .button-secundary {\n      padding: 15px 30px;\n      margin-top: 20px;\n    }\n\n    .page {\n      border-top: 4px solid #2a96f4;\n    }\n  </style>\n  <!-- Splash banner that only shows when not logged in -->\n\n  <!-- Splash banner that only shows when not logged in -->\n  <div class=\"banner\" show-authed=\"false\">\n    <div class=\"banner3\">\n      <h2>¿Como descargar FacturaScripts?</h2>\n      <div ng-click=\"$ctrl.prueba()\" class=\"button-secundary\">Descargar</div>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n      <!-- Main view - contains tabs & article list -->\n      <div class=\"col-md-12 center\">\n\n        <h1>¿Quieres instalar facturascript en tu servidor y personalizarlo?</h1>\n        <p>Como FacturaScripts es una aplicación web, necesita Apache, PHP y MySQL para poder ejecutarse. Siga los pasos\n          para instalar XAMPP y después FacturaScripts.</p>\n\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4QRXir81xlc\" frameborder=\"0\"\n          allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n          allowfullscreen></iframe>\n      </div>\n      <div class=\"col-md-12 padding\">\n        <h4>1. Descargue e instale XAMPP</h4>\n        <p>Instale XAMPP en Windows e inicie los servicios <strong>MySQL</strong> y <strong>Apache</strong>.</p>\n\n        <h4>2. Descargue FacturaScripts</h4>\n\n        <h4>3. Descomprima y copie FacturaScripts</h4>\n        <p>Descomprima FacturaScripts en C:/xampp/htdocs y renombre el directorio FacturaScripts a facturas, para mayor\n          comodidad. A continuación acceda localhost/facturas para ir al instalador. No necesita cambiar ningún valor\n          del instalador, simplemente pulse el botón aceptar.</p>\n\n        <h4>4. Usuario y contraseña</h4>\n        <p>Cuando le solicite usuario y contraseña escriba: admin como usuario y admin como contraseña.</p>\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("editor/editor.html","<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form>\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                ng-model=\"$ctrl.article.title\"\n                type=\"text\"\n                placeholder=\"Article Title\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                ng-model=\"$ctrl.article.description\"\n                type=\"text\"\n                placeholder=\"What\'s this article about?\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\"\n                rows=\"8\"\n                ng-model=\"$ctrl.article.body\"\n                placeholder=\"Write your article (in markdown)\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Enter tags\"\n                ng-model=\"$ctrl.tagField\"\n                ng-keyup=\"$event.keyCode == 13 && $ctrl.addTag()\" />\n\n              <div class=\"tag-list\">\n                <span ng-repeat=\"tag in $ctrl.article.tagList\"\n                  class=\"tag-default tag-pill\">\n                  <i class=\"ion-close-round\" ng-click=\"$ctrl.removeTag(tag)\"></i>\n                  {{ tag }}\n                </span>\n              </div>\n            </fieldset>\n\n            <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" ng-click=\"$ctrl.submit()\">\n              Publish Article\n            </button>\n\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("home/home.html","<style>\n  .banner {\n    height: 350px;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    background-color: white !important;\n    background-image: url(https://i.postimg.cc/zX08czBW/home-office-336377.jpg) !important;\n    background-size: cover !important;\n    background-position-y: -354px !important;\n  }\n\n  .banner2 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: #00000063;\n    width: 100%;\n    height: 100%;\n    color: white;\n    max-width: none;\n  }\n\n  .page {\n    border-top: 4px solid #2a96f4;\n    transform: translateY(-50px);\n  }\n</style>\n<div class=\"home-page primary\">\n\n  <!-- Splash banner that only shows when not logged in -->\n  <div class=\"banner\" show-authed=\"false\">\n    <div class=\"container banner2\">\n      <h1 class=\"logo-font\">FACTURASCRIPTS</h1>\n      <h2>Sencillo y <strong>personalizable.</strong></h2>\n    </div>\n    \n  </div>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <!-- Main view - contains tabs & article list -->\n      <div class=\"col-md-12\">\n        <!-- Tabs for toggling between feed, article lists -->\n\n        <!-- List the current articles -->\n        <!-- <article-list limit=\"10\" list-config=\"$ctrl.listConfig\"></article-list> -->\n        <services-banner></services-banner>\n        <hr class=\"space\">\n        <services-list services=\"$ctrl.services\"></services-list>\n        <hr class=\"space\">\n        <services-comments comments=\"$ctrl.comments\"></services-comments>\n      </div>\n\n      <!-- Sidebar where popular tags are listed -->\n\n      <!-- End the row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer>\n  <div class=\"container\">\n    <a class=\"logo-font\" ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName | lowercase\"></a>\n    <span class=\"attribution\">\n      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\n      Code licensed under MIT.\n    </span>\n  </div>\n</footer>\n");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-light\">\n\n  \n\n  <div class=\"container\">\n\n    <a class=\"navbar-brand\"\n      ui-sref=\"app.home\"\n      ng-bind=\"::$ctrl.appName | lowercase\">\n    </a>\n\n    <!-- Show this for logged out users -->\n    <ul show-authed=\"false\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.home\">\n          Inicio\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.customer_services\">\n          Servicios\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.download\">\n          Descargar\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link button\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.login\">\n          Iniciar sesión\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.register\">\n          Registrate\n        </a>\n      </li>\n\n    </ul>\n\n    <!-- Show this for logged in users -->\n    <ul show-authed=\"true\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.home\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.editor\">\n          <i class=\"ion-compose\"></i>&nbsp;New Article\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.settings\">\n          <i class=\"ion-gear-a\"></i>&nbsp;Settings\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.profile.main({ username: $ctrl.currentUser.username})\">\n          <img ng-src=\"{{$ctrl.currentUser.image}}\" class=\"user-pic\" />\n          {{ $ctrl.currentUser.username }}\n        </a>\n      </li>\n\n    </ul>\n\n\n  </div>\n</nav>\n");
$templateCache.put("profile/profile-articles.html","<article-list limit=\"5\" list-config=\"$ctrl.listConfig\"></article-list>\n");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\n\n  <!-- User\'s basic info & action buttons -->\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n          <img ng-src=\"{{::$ctrl.profile.image}}\" class=\"user-img\" />\n          <h4 ng-bind=\"::$ctrl.profile.username\"></h4>\n          <p ng-bind=\"::$ctrl.profile.bio\"></p>\n\n          <a ui-sref=\"app.settings\"\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\n            ng-show=\"$ctrl.isUser\">\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings\n          </a>\n\n          <follow-btn user=\"$ctrl.profile\" ng-hide=\"$ctrl.isUser\"></follow-btn>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Container where User\'s posts & favs are list w/ toggle tabs -->\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n        <!-- Tabs for switching between author articles & favorites -->\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.main({username: $ctrl.profile.username})\">\n                My Articles\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.favorites({username: $ctrl.profile.username})\">\n                Favorited Articles\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n        <!-- List of articles -->\n        <div ui-view></div>\n\n\n      </div>\n\n    <!-- End row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("settings/settings.html","<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"URL of profile picture\"\n                ng-model=\"$ctrl.formData.image\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                rows=\"8\"\n                placeholder=\"Short bio about you\"\n                ng-model=\"$ctrl.formData.bio\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"New Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Update Settings\n            </button>\n\n          </fieldset>\n        </form>\n\n        <!-- Line break for logout button -->\n        <hr />\n\n        <button class=\"btn btn-outline-danger\"\n          ng-click=\"$ctrl.logout()\">\n          Or click here to logout.\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("components/buttons/favorite-btn.html","<button class=\"btn btn-sm\"\n  ng-class=\"{ \'disabled\' : $ctrl.isSubmitting,\n              \'btn-outline-primary\': !$ctrl.article.favorited,\n              \'btn-primary\': $ctrl.article.favorited }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-heart\"></i> <ng-transclude></ng-transclude>\n</button>\n");
$templateCache.put("components/buttons/follow-btn.html","<button\n  class=\"btn btn-sm action-btn\"\n  ng-class=\"{ \'disabled\': $ctrl.isSubmitting,\n              \'btn-outline-secondary\': !$ctrl.user.following,\n              \'btn-secondary\': $ctrl.user.following }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ $ctrl.user.following ? \'Unfollow\' : \'Follow\' }} {{ $ctrl.user.username }}\n</button>\n");
$templateCache.put("components/article-helpers/article-list.html","<article-preview\n  article=\"article\"\n  ng-repeat=\"article in $ctrl.list\">\n</article-preview>\n\n<div class=\"article-preview\"\n  ng-hide=\"!$ctrl.loading\">\n  Loading articles...\n</div>\n\n<div class=\"article-preview\"\n  ng-show=\"!$ctrl.loading && !$ctrl.list.length\">\n  No articles are here... yet.\n</div>\n\n<list-pagination\n total-pages=\"$ctrl.listConfig.totalPages\"\n current-page=\"$ctrl.listConfig.currentPage\"\n ng-hide=\"$ctrl.listConfig.totalPages <= 1\">\n</list-pagination>\n");
$templateCache.put("components/article-helpers/article-meta.html","<div class=\"article-meta\">\n  <a ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\">\n    <img ng-src=\"{{$ctrl.article.author.image}}\" />\n  </a>\n\n  <div class=\"info\">\n    <a class=\"author\"\n      ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\"\n      ng-bind=\"$ctrl.article.author.username\">\n    </a>\n    <span class=\"date\"\n      ng-bind=\"$ctrl.article.createdAt | date: \'longDate\' \">\n    </span>\n  </div>\n\n  <ng-transclude></ng-transclude>\n</div>\n");
$templateCache.put("components/article-helpers/article-preview.html","<div class=\"article-preview\">\n  <article-meta article=\"$ctrl.article\">\n    <favorite-btn\n      article=\"$ctrl.article\"\n      class=\"pull-xs-right\">\n      {{$ctrl.article.favoritesCount}}\n    </favorite-btn>\n  </article-meta>\n\n  <a ui-sref=\"app.article({ slug: $ctrl.article.slug })\" class=\"preview-link\">\n    <h1 ng-bind=\"$ctrl.article.title\"></h1>\n    <p ng-bind=\"$ctrl.article.description\"></p>\n    <span>Read more...</span>\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        ng-repeat=\"tag in $ctrl.article.tagList\">\n        {{tag}}\n      </li>\n    </ul>\n  </a>\n</div>\n");
$templateCache.put("components/article-helpers/list-pagination.html","<nav>\n  <ul class=\"pagination\">\n\n    <li class=\"page-item\"\n      ng-class=\"{active: pageNumber === $ctrl.currentPage }\"\n      ng-repeat=\"pageNumber in $ctrl.pageRange($ctrl.totalPages)\"\n      ng-click=\"$ctrl.changePage(pageNumber)\">\n\n      <a class=\"page-link\" href=\"\">{{ pageNumber }}</a>\n\n    </li>\n\n  </ul>\n</nav>\n");
$templateCache.put("components/services-helpers/services-banner.html","<style>\n    .title {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        text-align: center;\n      }\n  \n      .title p {\n          font-size: 1.25rem;\n          font-weight: 300;\n      }\n  \n      .img {\n          margin-top: 10px;\n          display: flex;\n          justify-content: center;\n      }\n  \n</style>\n\n<div class=\"title\">\n    <h1 class=\"logo-font\">Gestiona tu negocio online</h1>\n    <p>Ya seas un autónomo o pequeño empresario, una startup o una gestoría, tenemos las herramientas que necesitas para que tus empleados y tú podáis teletrabajar desde cualquier lugar y a cualquier hora.</p>\n</div>\n\n<div class=\"img\">\n    <img src=\"https://blog.desdelinux.net/wp-content/uploads/2016/09/FacturaScripts.png\" />\n</div>");
$templateCache.put("components/services-helpers/services-comments.html","<style>\n    .title {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        text-align: center;\n      }\n  \n</style>\n\n<div class=\"title\">\n    <h1 class=\"logo-font\">Algunas personas hablan de nosotros</h1>\n    <div class=\"comments\" ng-repeat=\"comment in $ctrl.comments\"></div>\n        <div>{{$ctrl.comments}}</div>\n    </div>\n</div>");
$templateCache.put("components/services-helpers/services-list.html","<style>\n    .container4 {\n        margin: 20px;\n        display: flex;\n        flex-direction: row-reverse;\n    }\n\n    .service {\n        padding: 40px 25px;\n        display: flex;\n        min-height: 400px;\n        align-items: center;\n        flex-direction: column;\n        width: 30%;\n        text-align: center;\n        border-radius: 20px;\n        border: 1px solid #0000002e;\n        margin: 3%;\n        justify-content: space-between;\n        transition: 0.3s border;\n        }\n\n    .service:hover {\n        border-top: 4px solid #2a96f4;\n    }\n\n    .service h4 {\n        font-size: 20px;\n        font-weight: bold;\n        margin-top: 10px\n    }\n\n    .service h2 {\n        font-size: 2.5rem;\n        font-family: \'Open Sans\', sans-serif;\n        color: #707070;\n        margin-bottom: 36px;\n    }\n\n    .title {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      text-align: center;\n    }\n\n    .title p {\n        font-size: 1.25rem;\n        font-weight: 300;\n    }\n\n</style>\n\n<div class=\"title\">\n    <h1 class=\"logo-font\">Podemos instalarlo por ti</h1>\n    <p>Si no tienes suficientes conocimientos para instalar facturascripts nosotros te lo instalamos con hosting personalizado, estos son nuestros precios.</p>\n</div>\n\n<div class=\"container4\">\n    <div class=\"service\" ng-repeat=\"service in $ctrl.services\">\n        <h4 class=\"name\">{{service.title}}</h4>\n        <div class=\"content\">\n            <h2>{{service.price}}</h2>\n            <p>{{service.description}}</p>\n        </div>\n        <div ui-sref=\"app.details_services({slug:\'{{service.slug}}\'})\" class=\"button-primary\">Seleccionar</div>\n    </div>\n</div>");}]);