import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertNotificationService {
  private alertSubject = new Subject<string>();

  // Observable para que otros componentes se suscriban
  alert$ = this.alertSubject.asObservable();

  // Método para emitir un mensaje
  notifyNewAlert(message: string) {
    this.alertSubject.next(message);
  }
  constructor() { }
}
