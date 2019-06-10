import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showError(message: string) {
    this.toastr.warning(message, null, {
      positionClass: 'toast-bottom-right',
      progressBar: true,
      timeOut: 3000
    });
  }
}
