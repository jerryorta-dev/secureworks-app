import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'sw-sw-friends-form',
             templateUrl: './sw-friends-form.component.html',
             styleUrls: [ './sw-friends-form.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class SwFriendsFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
