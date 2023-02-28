import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonSize, ButtonVariant} from "../../../../types";

@Component({
  selector: 'do-icon-button',
  templateUrl: './icon-button.component.html',
  styles: []
})
export class IconButtonComponent implements OnInit {

  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'default';
  @Input() disabled: boolean = false;
  @Output() handleClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
