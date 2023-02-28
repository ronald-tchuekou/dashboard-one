import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ButtonSize, ButtonStyled, ButtonVariant} from "../../../types";

@Component({
  selector: 'do-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {

  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'default';
  @Input() styled: ButtonStyled = 'rectangle';
  @Input() disabled: boolean = false;
  @Output() handleClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
