import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-apply',
    templateUrl: './apply.component.html',
    styleUrl: './apply.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplyComponent {}
