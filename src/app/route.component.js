var router_1 = require('@angular/router');
var hero_list_component_1 = require('./hero-list.component');
var my_pets_1 = require('./components/my-pets/my-pets');
var AppRoutes = [
    { path: '', component: my_pets_1.MyPets, pathMatch: 'full' },
    { path: 'heroes', component: hero_list_component_1.HeroListComponent },
    { path: 'pets', component: my_pets_1.MyPets }
];
exports.AppRoutingProviders = [];
exports.Routing = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=route.component.js.map