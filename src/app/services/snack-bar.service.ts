import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  audio: HTMLAudioElement = new Audio('../../../assets/notification.mp3');

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.audio.play();
    this._snackBar.open(message, action);
  }
}
