var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MyPets = (function () {
    function MyPets() {
        this.formShowing = false;
        this.views = [
            {
                name: "My Account",
                description: "Edit my account information",
                icon: "assignment ind"
            },
            {
                name: "Potential dates",
                description: "Find your soulmate!",
                icon: "pets"
            }
        ];
        this.dogs = [
            { name: "Porter" },
            { name: "Mal" },
            { name: "Razzle" },
            { name: "Koby" },
            { name: "Molly" },
            { name: "Husi" }
        ];
    }
    MyPets = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-ngapp-app',
            templateUrl: 'my-pets.html',
            styleUrls: ['my-pets.css'],
        })
    ], MyPets);
    return MyPets;
})();
exports.MyPets = MyPets;
//# sourceMappingURL=my-pets.js.map