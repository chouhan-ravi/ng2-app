import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-ngapp-app',
  templateUrl: 'my-ngapp.component.html',
  styleUrls: ['my-ngapp.component.css'],
})
export class MyNgappAppComponent {
  formShowing: boolean = false;
  views: Object[] = [
    {
      name: "My Pets",
      path: "pets",
      altText: "Find your soulmate!",
      icon: "pets"
    },
    {
      name: "Heroes",
      path: "heroes",
      altText: "Edit my account information",
      icon: "assignment ind"
    }
  ];
}
