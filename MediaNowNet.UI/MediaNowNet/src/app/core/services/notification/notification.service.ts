import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showError(message: string) {
    this.toastr.error(message, null, {
      positionClass: 'toast-bottom-center',
      progressBar: true,
      timeOut: 3000
    });
  }

  showInfo(message: string) {
    this.toastr.info(message, null, {
      positionClass: 'toast-bottom-center',
      progressBar: true,
      timeOut: 3000
    });
  }

  showSuccess(message: string) {
    this.toastr.success(message, null, {
      positionClass: 'toast-bottom-center',
      progressBar: true,
      timeOut: 3000
    });
  }

  showWarning(message: string) {
    this.toastr.warning(message, null, {
      positionClass: 'toast-bottom-center',
      progressBar: true,
      timeOut: 3000
    });
  }
}
