import { Component } from '@angular/core';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'confirm-dialog';
  /**
   *
   */
  constructor(private confirmDialogService: ConfirmDialogService) {

  }

  showDialog(): any {
    this.confirmDialogService.confirmThis('Are you sure to delete ?', () =>  {
      alert('Yes clicked');
    }, () => {
      alert('No clicked');
    });
  }
}
