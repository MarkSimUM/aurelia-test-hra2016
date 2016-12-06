export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'signin',   name: 'signin',  moduleId: 'signin',  nav: true, title: 'Sign In' },
      { route: 'customscript',   name: 'customscript',  moduleId: 'customscript',  nav: true, title: 'Custom Script' },
      { route: 'surveygizmo',   name: 'surveygizmo',  moduleId: 'surveygizmo',  nav: true, title: 'Survey Gizmo API' },
      { route: 'hra15db',   name: 'hra15db',  moduleId: 'hra15db',  nav: true, title: 'HRA 1.5 DB -DEV' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
