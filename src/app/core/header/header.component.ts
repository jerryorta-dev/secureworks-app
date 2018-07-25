import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'sw-header',
             templateUrl: './header.component.html',
             styleUrls: [ './header.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
