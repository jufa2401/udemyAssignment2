import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  allowCreateUser = false;
  userCreationStatus = '';

  onUpdateUsernameName(event: any) {
    if (this.userName !== '') {
      console.log(event);
      this.allowCreateUser = true;
    }
  }
  onCreateUser() {
    this.userCreationStatus = 'User with ' + this.userName + ' has been created';
    this.userName = '';
    }
}
