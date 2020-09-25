import { Component, OnInit } from '@angular/core';
import { faLock, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface Input {
  text: string;
  icon: IconDefinition;
  type: string;
  id: string;
  focus: boolean;
  value: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public emailIcon: IconDefinition = faEnvelope;
  public passIcon: IconDefinition = faLock;
  public width: number;
  public isImage: boolean;
  public inputs: Array<Input> = [
    {
      text: '',
      icon: null,
      type: '',
      id: '',
      focus: false,
      value: '',
    },
  ];
  constructor() {
    this.width = window.screen.width;
    console.log(this.width);
    if (this.width <= 900) {
      this.isImage = false;
    } else {
      this.isImage = true;
    }
    this.inputs = [
      {
        text: 'Email',
        icon: this.emailIcon,
        type: 'text',
        id: '010',
        focus: false,
        value: '',
      },
      {
        text: 'Contraseña',
        icon: this.passIcon,
        type: 'password',
        id: '011',
        focus: false,
        value: '',
      },
    ];
  }

  ngOnInit(): void {}
  onFocus(id: string) {
    console.log(id);
    this.inputs.map(($input: Input) => {
      if ($input.id === id) {
        $input.focus = true;
      }
    });
  }
  onBlur(id: string) {
    this.inputs.map(($input: Input) => {
      if ($input.id === id && $input.value === '') {
        $input.focus = false;
      }
    });
  }
  onKey(event: any, id: string) {
    const inputValue = event.target.value;
    this.inputs.map(($input: Input) => {
      if ($input.id === id) {
        $input.value = inputValue;
      }
    });
  }
}
