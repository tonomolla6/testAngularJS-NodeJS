angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("article/article.html","<link rel=\"stylesheet\" href=\"css/article/article.css\">\n<div class=\"article-page primary\">\n    <div class=\"container page\">\n        <!-- Pintar el articulo -->\n        <article-draw article=\"$ctrl.article\"></article-draw>\n\n\n        <!-- Crear el articulo -->\n        <div class=\"article\">\n            <p class=\"header\">All Comments ({{$ctrl.article.commentsCount}})</p>\n            <div class=\"comments\">\n                <article-comment ng-repeat=\"comment in $ctrl.comments\" article=\"$ctrl.article\" comment=\"comment\"></article-comment>\n            </div>\n            <form class=\"input_comment\" ng-submit=\"$ctrl.newComment()\" ng-disabled=\"$ctrl.form.isSubmitting\">\n                <p class=\"header\">New Comment</p>\n                <textarea ng-model=\"$ctrl.form.description\" placeholder=\"Write a comment...\"></textarea>\n                <button class=\"button\" type=\"submit\">Enviar</button>\n            </form>\n        </div>\n        <!--  -->\n        <!-- Pintar comentarios -->\n    </div>\n</div>");
$templateCache.put("auth/auth.html","<link rel=\"stylesheet\" href=\"css/auth/auth.css\">\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/angular-toastr@2/dist/angular-toastr.css\" />\n<div class=\"auth-page\">\n    <div class=\"container page\">\n        <div class=\"row row_bank\">\n            <h1>YOU AREN\'T 18 YEARS OLD?</h1>\n            <p>Minors are prohibited from gambling, but you should know a few more things that can help prevent possible risky behavior. The Public, State and Autonomous Administrations, regulate the conditions under which games of chance are developed and\n                commercialized and establish the identity verification mechanisms to be used in order to verify the age of majority of the participants, as well as the games to those who need that identification.</p>\n        </div>\n        <hr>\n        <div class=\"row\">\n\n            <div class=\"page_row\">\n                <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\n                <p class=\"text-xs-center\">\n                    <a ui-sref=\"app.login\" ng-show=\"$ctrl.authType === \'register\'\">\n            Have an account?\n          </a>\n                    <a ui-sref=\"app.register\" ng-show=\"$ctrl.authType === \'login\'\">\n            Need an account?\n          </a>\n                </p>\n\n                <!-- <list-errors errors=\"$ctrl.errors\"></list-errors> -->\n\n                <form name=\"formData\" ng-submit=\"$ctrl.submitForm()\">\n                    <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n                        <fieldset class=\"form-group\" ng-show=\"$ctrl.authType === \'register\'\">\n                            <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Username\" ng-model=\"$ctrl.formData.username\" name=\"username\" />\n\n                            <div ng-messages=\"formData.Username.$error\" style=\"color:red\">\n                                <p ng-message=\"required\" ng-show=\"formData.Username.$dirty\">Esta vacio. Empanao</p>\n                            </div>\n                        </fieldset>\n\n                        <fieldset class=\"form-group\">\n                            <input class=\"form-control form-control-lg\" type=\"email\" placeholder=\"Email\" ng-model=\"$ctrl.formData.email\" name=\"Email\" required />\n\n                            <div ng-messages=\"formData.Email.$error\" style=\"color:red\">\n                                <p ng-message=\"required\" ng-show=\"formData.Email.$dirty\">Esta vacio. Empanao</p>\n                            </div>\n                        </fieldset>\n\n                        <fieldset class=\"form-group\">\n                            <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\" ng-model=\"$ctrl.formData.password\" ng-minlength=\"3\" ng-maxlength=\"15\" name=\"Password\" required />\n\n                            <div ng-messages=\"formData.Password.$error\" style=\"color:red\">\n                                <p ng-message=\"required\" ng-show=\"formData.Password.$dirty\">Esta vacio. Empanao</p>\n                                <p ng-message=\"minlength\">Los caracteres minimos para la contraseña son 3.</p>\n                                <p ng-message=\"maxlength\">Los caracteres minimos para la contraseña son 15.</p>\n                            </div>\n                        </fieldset>\n\n                        <button class=\"btn btn-lg btn-primary pull-xs-right\" type=\"submit\" ng-bind=\"::$ctrl.title\">\n            </button>\n\n                    </fieldset>\n                </form>\n                <hr class=\"social\">\n                <p>Do you want to use external services?</p>\n                <a class=\"social_button\" href=\"http://localhost:3000/api/auth/github\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <path\n              d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\" />\n          </svg>Entrar con Github </a>\n                <a class=\"social_button\" href=\"http://localhost:3000/api/auth/google\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" class=\"Svg-sc-sr61w3 lnykFD\">\n            <path fill=\"#FBBB00\"\n              d=\"M6.2 14.2l-.7 2.7-2.7.1c-.8-1.5-1.2-3.2-1.2-5 0-1.7.4-3.4 1.2-4.8l3.3 2.8c-.2.6-.3 1.3-.3 2 0 .8.1 1.5.4 2.2z\">\n            </path>\n            <path fill=\"#518EF8\"\n              d=\"M22.4 12c0 .7-.1 1.5-.2 2.2-.5 2.4-1.8 4.5-3.7 6l-3.4-2.8c1.2-.7 2.2-1.8 2.7-3.2h-5.6v-4.1h10c.2.6.2 1.2.2 1.9z\">\n            </path>\n            <path fill=\"#28B446\"\n              d=\"M18.5 20.1c-1.8 1.4-4.1 2.3-6.5 2.3-4 0-7.4-2.2-9.2-5.5l3.4-2.8c.9 2.4 3.2 4 5.8 4 1.1 0 2.2-.3 3.1-.8l3.4 2.8z\">\n            </path>\n            <path fill=\"#F14336\"\n              d=\"M18.7 4l-3.4 2.8c-1-.6-2.1-.9-3.3-.9-2.7 0-5 1.8-5.9 4.2l-3.4-2.9c1.8-3.4 5.3-5.6 9.3-5.6 2.5 0 4.9.9 6.7 2.4z\">\n            </path>\n          </svg> Entrar con Google </a>\n            </div>\n\n        </div>\n    </div>\n</div>");
$templateCache.put("board/board.html","<link rel=\"stylesheet\" href=\"css/board/board.css\">\n<div class=\"board-page\">\n    <div class=\"container page\">\n        <popular-news news=\"$ctrl.popular_news\"></popular-news>\n        <section>\n            \n            <!-- PAGE -->\n            <div class=\"left-page\">\n                <h4>Board</h4>\n                <hr>\n                <article-list prueba=\"$ctrl.register(childRef)\" filters=\"$ctrl.filters\"></article-list>\n\n                <!-- <article-draw ng-if=\"$ctrl.articles\" ng-repeat=\"article in $ctrl.articles\" article=\"article\"></article-draw> -->\n            </div>\n            \n            <!-- FILTERS -->\n            <div class=\"right-page\">\n                <h4>Friends</h4>\n                <hr>\n\n                <!-- SIEMPRE -->\n                <div class=\"friends\">\n                    <div class=\"friend {{ $ctrl.filters.friends.indexOf(\'all\') >= 0 ? \'active\' : \'\' }}\" ng-click=\"$ctrl.setFiltersFriends(\'all\')\">\n                        <div class=\"all-img\"><i class=\"fas fa-users\"></i></div>\n                        <h6>All the news</h6>\n                    </div>\n                </div>\n                <div class=\"friends-separator\">\n                    <hr>\n                </div>\n\n                <!-- CONTROL -->\n                <div show-authed=\"false\" class=\"friends\">\n                    <div class=\"not-logged\">\n                        <p>Do you want to filter the news by your friends?</p>\n                        <div class=\"button\" ui-sref=\"app.login\">Log in</div>\n                    </div>\n                </div>\n\n                <div show-authed=\"true\" class=\"friends\">\n                    <div ng-repeat=\"friend in $ctrl.friends\" class=\"friend {{ $ctrl.filters.friends.indexOf(friend.username) >= 0 ? \'active\' : \'\' }}\" ng-click=\"$ctrl.setFiltersFriends(friend.username)\">\n                        <img src=\"{{friend.image}}\" alt=\"\">\n                        <h6>@{{friend.username}}</h6>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n</div>");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("editor/editor.html","<link rel=\"stylesheet\" href=\"css/editor/editor.css\">\n<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Create a new article for your followers</h1>\n        <hr>\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form>\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <!-- Titulo del articulo -->\n            <label>Article title</label>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                ng-model=\"$ctrl.article.title\"\n                type=\"text\"\n                placeholder=\"The Murcian Pedro Herrera has won 100,0...\" />\n            </fieldset>\n\n            <!-- Titulo del articulo -->\n            <label>Description</label>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\"\n                rows=\"8\"\n                ng-model=\"$ctrl.article.description\"\n                placeholder=\"The world game last Tuesday at 18:00 was perfect for our player Pedr...\">\n              </textarea>\n            </fieldset>\n\n            <!-- Url Image -->\n            <label>Image</label>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                ng-model=\"$ctrl.article.image\"\n                type=\"text\"\n                placeholder=\"https://image.im/image_artic...\" />\n            </fieldset>\n\n            <!-- Control access -->\n            <label for=\"\">Do you want only your followers to see this article?</label>\n            <fieldset>\n              <input ng-model=\"$ctrl.article.private\" type=\"checkbox\"/>\n              Private\n            </fieldset>\n\n\n            <div class=\"center\">\n              <button class=\"button\" type=\"button\" ng-click=\"$ctrl.submit()\">\n                Publish Article\n              </button>\n            </div>\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("home/home.html","<link rel=\"stylesheet\" href=\"css/home/home.css\">\n<div class=\"home-page primary\">\n\n  <!-- Slider component -->\n  <home-slider-comp></home-slider-comp>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <!-- Main view - contains tabs & article list -->\n      <div class=\"col-md-12\">\n        <!-- Tabs for toggling between feed, article lists -->\n\n        <!-- List the current articles -->        \n        <hr class=\"space\">\n        <hr class=\"space\">\n      </div>\n\n      <!-- Sidebar where popular tags are listed -->\n\n      <!-- End the row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<link rel=\"stylesheet\" href=\"css/layout/footer.css\">\n<footer>\n    <div class=\"container2\">\n        <a class=\"logo-font\" ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName | lowercase\"></a>\n        <span class=\"attribution\">\n          &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n          An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\n          Code licensed under MIT.\n        </span>\n        <div ng-click=\"$ctrl.dummies()\" class=\"dummies\">\n            Generate dummies\n        </div>\n    </div>\n</footer>");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-light\">\n\n    <div class=\"container\">\n\n        <a class=\"title-logo navbar-brand\" ui-sref=\"app.home\">\n            <i class=\"fas fa-crown\"></i>\n            <p ng-bind=\"::$ctrl.appName | lowercase\"></p>\n        </a>\n\n        <!-- Show this for logged out users -->\n        <ul show-authed=\"false\" class=\"nav navbar-nav pull-xs-right\">\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.home\">\n                    Home\n                </a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.board\">\n                    Board\n                </a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.winners\">\n                    Top Winners\n                </a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link button\" ui-sref-active=\"active\" ui-sref=\"app.login\">\n                    Log in\n                </a>\n            </li>\n        </ul>\n\n        <!-- Show this for logged in users -->\n        <ul show-authed=\"true\" class=\"nav navbar-nav pull-xs-right\">\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.home\">\n                    Home\n                </a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.board\">\n                    Board\n                </a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.winners\">\n                    Top Winners\n                </a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.editor\">\n                    <i class=\"ion-compose\"></i>&nbsp;New Article\n                </a>\n            </li>\n\n            <li class=\"nav-item user\">\n                <a class=\"nav-link\" ui-sref-active=\"active\">\n                    <img ng-src=\"{{$ctrl.currentUser.image}}\" class=\"user-pic\" /> {{ $ctrl.currentUser.username }}\n                    <i class=\"fas fa-angle-down\"></i>\n                </a>\n\n                <ul class=\"user-list\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.profile.main({ username: $ctrl.currentUser.username})\">\n                            <i class=\"fas fa-user-alt\"></i>&nbsp;Profile\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.settings\">\n                            <i class=\"ion-gear-a\"></i>&nbsp;Settings\n                        </a>\n                    </li>\n                    <li class=\"nav-item logout\">\n                        <a class=\"nav-link\" ng-click=\"$ctrl.logout()\">\n                            <i class=\"fas fa-sign-out-alt\"></i>&nbsp;Log Out\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n\n    </div>\n</nav>");
$templateCache.put("profile/profile-articles.html","<article-list filters=\"$ctrl.filters\"></article-list>");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\n\n  <!-- User\'s basic info & action buttons -->\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n          <img ng-src=\"{{::$ctrl.profile.image}}\" class=\"user-img\" />\n          <h4 ng-bind=\"::$ctrl.profile.username\"></h4>\n          <p ng-bind=\"::$ctrl.profile.bio\"></p>\n\n          <a ui-sref=\"app.settings\"\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\n            ng-show=\"$ctrl.isUser\">\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings\n          </a>\n\n          <follow-btn user=\"$ctrl.profile\" ng-hide=\"$ctrl.isUser\"></follow-btn>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Container where User\'s posts & favs are list w/ toggle tabs -->\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n        <!-- Tabs for switching between author articles & favorites -->\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.main({username: $ctrl.profile.username})\">\n                My Articles\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.favorites({username: $ctrl.profile.username})\">\n                Favorited Articles\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n        <!-- List of articles -->\n        <div ui-view></div>\n\n\n      </div>\n\n    <!-- End row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("settings/settings.html","<link rel=\"stylesheet\" href=\"css/settings/settings.css\">\n<div class=\"settings-page\">\n    <div class=\"container page\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n                <h1 class=\"text-xs-center\">Your Settings</h1>\n                <hr class=\"title\">\n                <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n                <form ng-submit=\"$ctrl.submitForm()\">\n                    <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n                        <fieldset class=\"form-group\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"URL of profile picture\" ng-model=\"$ctrl.formData.image\" />\n                        </fieldset>\n\n                        <fieldset class=\"form-group\">\n                            <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Username\" ng-model=\"$ctrl.formData.username\" />\n                        </fieldset>\n\n                        <fieldset class=\"form-group\">\n                            <textarea class=\"form-control form-control-lg\" rows=\"8\" placeholder=\"Short bio about you\" ng-model=\"$ctrl.formData.bio\"></textarea>\n                        </fieldset>\n\n                        <fieldset class=\"form-group\">\n                            <input class=\"form-control form-control-lg\" type=\"email\" placeholder=\"Email\" ng-model=\"$ctrl.formData.email\" />\n                        </fieldset>\n\n                        <fieldset class=\"form-group\">\n                            <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"New Password\" ng-model=\"$ctrl.formData.password\" />\n                        </fieldset>\n\n                        <div class=\"center\">\n                            <button class=\"button settings-button\" type=\"submit\">\n                                Update Settings\n                            </button>\n                        </div>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("winners/winners.html","<link rel=\"stylesheet\" href=\"css/winners/winners.css\">\n<div class=\"winners-page\">\n    <div class=\"container page\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <winners-top users=\"$ctrl.users_top\"></winners-top>\n                \n                <winners-list limit=\"5\" users=\"$ctrl.users_list\"></winners-list>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("components/article/article-comment.html","<link rel=\"stylesheet\" href=\"css/components/article/article-comment.css\">\n<div class=\"comment\">\n    <header>\n        <img class=\"profile\" src=\"{{$ctrl.comment.author.image}}\" alt=\"\">\n    </header>\n    <article>\n        <delete-btn comment=\"$ctrl.comment\" article=\"$ctrl.article\"></delete-btn>\n        <div class=\"description ng-binding\">\n            <p style=\"margin: 8px;\"><strong>@{{$ctrl.comment.author.username}}</strong> {{$ctrl.comment.description}}</p>\n        </div>\n        <p class=\"date\">{{$ctrl.comment.createdAt | date: \'longDate\'}}</p>\n    </article>\n    <hr>\n</div>");
$templateCache.put("components/article/article-draw.html","<link rel=\"stylesheet\" href=\"css/components/article/article-draw.css\">\n<div class=\"news\">\n    <delete-btn article=\"$ctrl.article\"></delete-btn>\n    <div class=\"new\">\n        <header>\n            <img class=\"profile\" src=\"{{$ctrl.article.author.image}}\" alt=\"\">\n            <div class=\"text\">\n                <h6>@{{$ctrl.article.author.username}}</h6>\n                <p>{{$ctrl.article.updatedAt | date: \'longDate\'}}</p>\n            </div>\n        </header>\n        <article>\n            <div class=\"title\">\n                {{$ctrl.article.title}}\n            </div>\n            <div class=\"description\">\n                {{$ctrl.article.description}}\n            </div>\n            <img ng-if=\"$ctrl.article.image\" class=\"image\" src=\"{{$ctrl.article.image}}\" alt=\"Imagen no disponible\">\n            \n            <section class=\"social_control_post\">\n                <comment-btn article=\"$ctrl.article\"></comment-btn>\n                <favorite-btn article=\"$ctrl.article\"></favorite-btn>\n            </section>\n        </article>\n    </div>\n    <hr>\n</div>");
$templateCache.put("components/article/article-list.html","<article-draw ng-if=\"$ctrl.articles\" ng-repeat=\"article in $ctrl.articles\" article=\"article\"></article-draw>\n<div ng-if=\"!$ctrl.articles\" class=\"messages\">\n    No se ha encontrado ningun resultado.\n</div>");
$templateCache.put("components/board/popular-news.html","<link rel=\"stylesheet\" href=\"css/components/board/popular-news.css\">\n\n<div class=\"title\">\n    <h4>Popular posts</h4>\n    <hr>\n</div>\n\n<div class=\"news_popular\">\n    <div class=\"new_popular {{user.news}}\" ng-repeat=\"new in $ctrl.news\">\n        <div class=\"effect\">\n            <a href=\"/#!/article\"></a>\n            <div class=\"img\" style=\"background-image: url({{new.image}})\"></div>\n        </div>\n        <div class=\"text\">\n            <h5 class=\"name\"><strong>{{new.title}}</strong></h5>\n            <p>{{new.description}}</p>\n        </div>\n    </div>\n</div>");
$templateCache.put("components/home/home-slider.html","<link rel=\"stylesheet\" href=\"css/components/home/home-slider.css\">\n<div style=\"height: 400px\">\n    <div uib-carousel active=\"active\" interval=\"$ctrl.imgInterval\" no-wrap=\"$ctrl.noWrapSlides\">\n        <div uib-slide ng-repeat=\"slide in $ctrl.slides track by slide.id\" index=\"slide.id\" style=\"height: 400px\">\n            <img ng-src=\"{{slide.image}}\" class=\"img-fluid\" style=\"filter: blur(2px);\">\n            <div style=\"position: absolute; color: white; z-index: 100; bottom: 50%; width: 100%;\">\n                <h1 class=\"logo-font\">{{slide.titulo}}</h1>\n                <h2>{{slide.text}}</h2>\n\n                <div ng-if=\"slide.button.text\" class=\"buttons-slider\">\n                    <a href=\"{{slide.button.url}}\">\n                        {{slide.button.text}}\n                    </a>\n                </div>\n            </div>\n            <div class=\"carousel-caption\" style=\"padding-bottom:100px;\"></div>\n        </div>\n    </div>\n</div>");
$templateCache.put("components/buttons/comment-btn.html","<div ng-click=\"$ctrl.submit()\">\n    <p>{{$ctrl.article.commentsCount}}</p>\n    <i class=\"fas fa-comment\"></i>\n</div>");
$templateCache.put("components/buttons/delete-btn.html","<link rel=\"stylesheet\" href=\"css/components/buttons/delete-btn.css\">\n<div ng-click=\"$ctrl.deleteElement()\"\n    ng-class=\"{disabled: $ctrl.disabled}\">\n    <i class=\"fas fa-trash-alt\"></i>\n</div>");
$templateCache.put("components/buttons/favorite-btn.html","<div ng-class=\"{ \'disabled\' : $ctrl.isSubmitting,\n            \'active\': $ctrl.article.favorited }\"\nng-click=\"$ctrl.submit()\">\n<i class=\"fas fa-heart\"></i>\n  <p>{{$ctrl.article.favoritesCount}}</p>\n</div>");
$templateCache.put("components/buttons/follow-btn.html","<button\n  class=\"btn btn-sm action-btn\"\n  ng-class=\"{ \'disabled\': $ctrl.isSubmitting,\n              \'btn-outline-secondary\': !$ctrl.user.following,\n              \'btn-secondary\': $ctrl.user.following }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ $ctrl.user.following ? \'Unfollow\' : \'Follow\' }} {{ $ctrl.user.username }}\n</button>\n");
$templateCache.put("components/winners-helpers/winners-banner.html","<style>\n    .title {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        text-align: center;\n      }\n  \n      .title p {\n          font-size: 1.25rem;\n          font-weight: 300;\n      }\n  \n      .img {\n          margin-top: 10px;\n          display: flex;\n          justify-content: center;\n      }\n  \n</style>\n\n<div class=\"title\">\n    <h1 class=\"logo-font\">Gestiona tu negocio online</h1>\n    <p>Ya seas un autónomo o pequeño empresario, una startup o una gestoría, tenemos las herramientas que necesitas para que tus empleados y tú podáis teletrabajar desde cualquier lugar y a cualquier hora.</p>\n</div>\n\n<div class=\"img\">\n    <img src=\"https://blog.desdelinux.net/wp-content/uploads/2016/09/bingo.png\" />\n</div>");
$templateCache.put("components/winners-helpers/winners-list.html","<link rel=\"stylesheet\" href=\"css/components/winners-helpers/winners-list.css\">\n<div class=\"title\">\n    <p>{{$ctrl.total}}</p>\n        <table>\n            <tr>\n                <th class=\"image\"></th>\n                <th>Name</th>\n                <th>Times won</th>\n                <th>Times losses</th>\n                <th>Position</th>\n            </tr>\n            <tr ng-repeat=\"user in $ctrl.users_paged\">\n                <td><img src=\"{{user.image}}\" alt=\"\"></td>\n                <td>{{user.username}}</td>\n                <td>{{user.won}}</td>\n                <td>{{user.losses}}</td>\n                <td>1</td>\n            </tr>\n        </table>\n    </div>\n\n    <div class=\"pagination_winners\">\n        <span ng-click=\"$ctrl.changePage($ctrl.selectedPage - 2)\"><i class=\"fas fa-arrow-left\"></i></span>\n        <span ng-click=\"$ctrl.changePage(this.$index)\" class=\"{{ $index+1 == $ctrl.selectedPage ? \'active\' : \'\' }}\" ng-repeat=\"x in [].constructor(pages) track by $index\">\n            {{ $index+1 }}\n        </span>\n        <span ng-click=\"$ctrl.changePage($ctrl.selectedPage)\"><i class=\"fas fa-arrow-right\"></i></span>\n    </div>\n</div>\n</div>");
$templateCache.put("components/winners-helpers/winners-top.html","<link rel=\"stylesheet\" href=\"css/components/winners-helpers/winners-top.css\">\n<div class=\"title\">\n    <h1 class=\"logo-font\">Players with the most games won</h1>\n    <hr>\n</div>\n\n<div class=\"podium\">\n    <div class=\"user {{user.class}}\" ng-repeat=\"user in $ctrl.users\">\n        <h2>{{user.position}}</h2>\n        <img class=\"image\" src=\"{{user.image}}\" />\n        <h4 class=\"name\"><strong>@{{user.username}}</strong></h4>\n        <h6>Times Won</h6>\n        <h3>{{user.won}}</h3>\n        <div ui-sref=\"app.details_services({slug:\'{{service.slug}}\'})\" class=\"button-winner-top\">View Profile</div>\n    </div>\n</div>");}]);