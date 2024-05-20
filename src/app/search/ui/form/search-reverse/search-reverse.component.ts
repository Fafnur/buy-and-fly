import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SearchFormGroup } from '@baf/search/common';
import { IconButtonComponent } from '@baf/ui/buttons';
import { SyncAltComponent } from '@baf/ui/icons';

@Component({
  selector: 'baf-search-reverse',
  standalone: true,
  imports: [SyncAltComponent, IconButtonComponent],
  templateUrl: './search-reverse.component.html',
  styleUrl: './search-reverse.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchReverseComponent {
  @Input({ required: true }) form!: SearchFormGroup;

  onReverse(): void {
    const { from, to } = this.form.getRawValue();

    if (from && to) {
      this.form.patchValue({ from: to, to: from });
    }
  }
}
