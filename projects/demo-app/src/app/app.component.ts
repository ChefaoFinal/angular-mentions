import { Component } from '@angular/core';

import { COMMON_NAMES } from './common-names';

/**
 * Demo app showing usage of the mentions directive.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //items: string[] = COMMON_NAMES;
  public mentionConfig = {
    items: [
      {
        username: 'noah',
        name: 'Noah',
        img: '42143138'
      },
      {
        username: 'liam',
        name: 'Liam',
        img: '42143139'
      },
      {
        username: 'mason',
        name: 'Mason',
        img: '42143140'
      },
      {
        username: 'jacob',
        name: 'Jacob',
        img: '42143141'
      }
    ],
    labelKey: 'name',
    triggerChar: "@",
    mentionSelect: this.insertSpanText,
    mentionFilter: this.filter,
    insertHTML: true,
    returnTrigger: false
  }
  test = this.getPath();
  private getPath() {
    // the path provides direct access to the tests for e2e testing
    switch (window.location.pathname) {
      case '/config'   : return 'config';
      case '/events'   : return 'events';
      case '/async'    : return 'async';
      case '/options'  : return 'options';
      case '/templates': return 'templates';
      case '/pos'      : return 'pos';
      default          : return null;
    }
  }
  public insertSpanText(item) {
    return `<span class="mention" contenteditable="false">@${item.name}</span>`;
  }

  filter(searchString: string, items: any[]): any[] {
    console.log("searchString: ", searchString);
    console.log("items: ", items);
    //return items.slice(0, 5);
    return items.filter(item => item.name.toLowerCase().includes(searchString));
  }
}
