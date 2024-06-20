import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'baf-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {

}
