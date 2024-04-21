import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  async sendEmailForTeam(
    email: string,
    message: string,
    firstName: string,
    lastName: string,
    phone: string
  ) {
    emailjs.init('wJBRQOyyFjagkGUVi');
    let response = await emailjs.send('service_3yytqbg', 'template_5lkg9hm', {
      from_name: 'name test',
      to_name: `${email}`,
      from_subject: 'Test subject',
      subject: 'subject',
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      message: `${message}`,
    });
  }

  // запасной вариант
  async sendEmailForClient(email: string, firstName: string) {
    try {
      let formData: FormData = new FormData();
      formData.append('name', firstName);
      formData.append('email', email);
      console.log(email, 'for client');

      formData.append('access_key', '9703d88c-fb89-4ae6-89b7-7441a061b3c6');
      formData.append('subject', 'LockGems');
      formData.append('from_name', 'Contact Notification');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      console.log(formData, 'mail was sent to client');

      if (!response.ok) {
        throw new Error('Failed to send email for client');
      }
    } catch (error) {
      console.error('Error sending email for client:', error);
      // Дополнительная обработка ошибок, например, вывод сообщения об ошибке пользователю
    }
  }

}
