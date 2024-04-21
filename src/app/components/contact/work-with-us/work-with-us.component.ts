import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../../services/email.service';
import { SnackBarService } from '../../../services/snack-bar.service';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.scss',
})
export class WorkWithUsComponent {
  userFirstName: string = '';
  firstNameInvalid: boolean = false;
  userFirstNameTip: string = '';

  userLastName:string = ''
  lastNameInvalid: boolean = false;
  userLastNameTip: string = '';

  userEmail:string = ''
  emailInvalid: boolean = false;
  emailTip: string = '';

  userPhone:string = ''
  phoneInvalid: boolean = false;
  phoneTip: string = '';

  constructor(private email:EmailService, private sb:SnackBarService) {}

 

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.sb.openSnackBar(`Got it! Our team has received your message and will be in touch soon.`, 'OK')
      this.email.sendEmailForTeam(form.value.email, form.value.message, form.value.firstName, form.value.lastName, form.value.phone)
      
      // запасной вариант
      form.reset();
    } 
  }

  containsOnlyLetters(input: string) {
    return /^[a-zA-Zа-яА-Я]+$/.test(input);
  }

  containsOnlyDigit(input: string) {
    return /^\d+$/.test(input);
  }

  moreThanTwoLetter(input: string) {
    return input.length >= 2
  }

  isValidPhoneNumberLength(input: string) {
    return input.length >= 9 && input.length <= 12
  }

  emptyInput(text: string) {
    return text.length === 0
  }

  onNameInput() {
    // Проверяем валидность имени при каждом вводе
    this.firstNameInvalid = !this.firstNameInput(this.userFirstName);
  }

  onLastNameInput() {
    // Проверяем валидность имени при каждом вводе
    this.lastNameInvalid = !this.lastNameInput(this.userLastName);
  }

  onEmailInput() {
    // Проверяем валидность имени при каждом вводе
    this.emailInvalid = !this.emailInput(this.userEmail);
  }

  onPhoneInput() {
    // Проверяем валидность имени при каждом вводе
    this.phoneInvalid = !this.phoneInput(this.userPhone);
  }

  firstNameInput(inputText: string): boolean {
    if(this.emptyInput(inputText)) {
      console.log('пустое поле');
      return true
    }
    if (!this.containsOnlyLetters(inputText)) {
      this.userFirstNameTip = 'Please enter letters only.';
    }
    if (!this.moreThanTwoLetter(inputText)) {
      this.userFirstNameTip = 'Enter at least 2 digits.';
    }
    return this.moreThanTwoLetter(inputText) && this.containsOnlyLetters(inputText);
  }


  lastNameInput(inputText: string):boolean {
    if (!this.containsOnlyLetters(inputText)) {
      this.userLastNameTip = 'Please enter letters only.';
    }
    if (!this.moreThanTwoLetter(inputText)) {
      this.userLastNameTip = 'Enter at least 2 digits.';
    }
    if(this.emptyInput(inputText)) {
      console.log('пустое поле');
      return true
    }

    return this.moreThanTwoLetter(inputText) && this.containsOnlyLetters(inputText);
  }

  emailInput(inputText: string):boolean {
    const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if(this.emptyInput(inputText)) {
      console.log('пустое поле');
      return true
    }
    this.emailTip = 'test@test.com';
    return emailPattern.test(inputText);
  }
  
  phoneInput(inputText: string):boolean {
    if(!this.isValidPhoneNumberLength(inputText)) {
      this.phoneTip = '9-12 digits required.';
    }
    if (!this.containsOnlyDigit(inputText)) {
      this.phoneTip = 'Please enter digit only.';
    }
    if(this.emptyInput(inputText)) {
      console.log('пустое поле');
      return true
    }

    return this.containsOnlyDigit(inputText) && this.isValidPhoneNumberLength(inputText)
  }


}
