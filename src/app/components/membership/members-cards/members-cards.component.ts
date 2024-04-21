import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { SnackBarService } from '../../../services/snack-bar.service';

@Component({
  selector: 'app-members-cards',
  templateUrl: './members-cards.component.html',
  styleUrl: './members-cards.component.scss',
})
export class MembersCardsComponent {
  constructor(public date: DataService, private sb: SnackBarService) {}

  clickOnGetButton() {
    this.sb.openSnackBar(
      'At the moment, paid subscriptions on our website are not available. We apologize for any inconvenience.',
      'OK'
    );
  }
}
