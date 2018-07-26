import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sw-header',
  templateUrl: './sw-header.component.html',
  styleUrls: ['./sw-header.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
