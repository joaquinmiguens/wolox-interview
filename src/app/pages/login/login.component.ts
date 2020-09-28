import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import {
  faLock,
  faEnvelope,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../service/auth.service';

export interface Input {
  text: string;
  icon: IconDefinition;
  type: string;
  id: string;
  focus: boolean;
  value: string;
}
export interface Token {
  token: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
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

  public loginForm: FormGroup;
  public subscription: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
    this.width = window.screen.width;
    if (this.width <= 900) {
      this.isImage = false;
    } else {
      this.isImage = true;
    }
    this.inputs = [
      {
        text: 'Email',
        icon: this.emailIcon,
        type: 'email',
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

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?"
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      checkbox: new FormControl(''),
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onFocus(id: string) {
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
  onSubmit() {
    this.subscription = this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((response: Token) => {
        this.inputs.map(($input: Input) => {
          $input.focus = false;
        });
        if (this.loginForm.value.checkbox) {
          console.log('guardar en local storage');
          const token: string = response.token;
          localStorage.setItem('userToken', JSON.stringify(token));
        }
        this.loginForm.reset();

        this.router.navigate(['/tech-list']);
      });
  }
}