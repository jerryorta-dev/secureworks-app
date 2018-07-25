import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'sw-friends',
             templateUrl: './sw-friends.component.html',
             styleUrls: [ './sw-friends.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class SwFriendsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
