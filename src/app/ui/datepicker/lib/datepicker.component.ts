import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'baf-datepicker',
  standalone: true,
  imports: [],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent {

}
