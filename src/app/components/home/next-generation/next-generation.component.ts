import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { SnackBarService } from '../../../services/snack-bar.service';

@Component({
  selector: 'app-next-generation',
  templateUrl: './next-generation.component.html',
  styleUrl: './next-generation.component.scss',
})
export class NextGenerationComponent implements OnInit {
  timeToMidnight: Date = new Date();
  notificationSent: boolean = false;

  constructor(private sb: SnackBarService) {}

  ngOnInit(): void {
    this.updateTimeToMidnight();

    // Обновляем время каждую секунду
    interval(1000).subscribe(() => {
      this.updateTimeToMidnight();
    });
  }

  // Метод для вычисления времени до полуночи и его обновления
  updateTimeToMidnight(): void {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    this.timeToMidnight = new Date(midnight.getTime() - now.getTime());

    this.checkStatementForNotification();
  }

  checkStatementForNotification() {
    if (this.timeToMidnight.getTime() <= 0 && !this.notificationSent) {
      this.notificationSent = true;
      this.sendNotification();
    }
  }

  sendNotification(): void {
    if (this.notificationSent == false) {
      this.sb.openSnackBar(
        `You'll get the same sound effect if you're on our site when the time expires.`,
        'OK'
      );
    } else {
      this.sb.openSnackBar("Time's up! You've been notified!", 'OK');
      this.notificationSent = false;
    }
  }

  clickOnNotifyButton() {
    this.sendNotification();
  }
}
