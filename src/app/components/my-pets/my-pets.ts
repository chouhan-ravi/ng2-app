import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-ngapp-app',
  templateUrl: 'my-pets.html',
  styleUrls: ['my-pets.css'],
})
export class MyPets {
  formShowing: boolean = false;
  views: Object[] = [
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
  dogs: Object[] = [
    {name: "Porter"},
    {name: "Mal"},
    {name: "Razzle"},
    {name: "Koby"},
    {name: "Molly"},
    {name: "Husi"}
  ];

}
