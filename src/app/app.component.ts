import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isTopicValid = false;
  title = 'tdf';
  topics = ["react", "angular", "vue"];
  userModel = new User('', 'rob@test.com', 1234567890, 'default', 'Morning', true);

  constructor(private _enrollmentService: EnrollmentService) {

  }

  onSubmit() {
    this._enrollmentService.enroll(this.userModel).subscribe((data: any) => console.log("success", data),
      (faliure: any) => console.log("faliure", faliure));
  }

  validateTopic(topic: any) {
    if (topic === 'default') this.isTopicValid = false;
    else this.isTopicValid = true
  }
}
