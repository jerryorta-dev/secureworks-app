import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'sw-personal',
             templateUrl: './sw-personal.component.html',
             styleUrls: [ './sw-personal.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class SwPersonalComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
