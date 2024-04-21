import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {

  faqItems = [
    { question: 'How can I work with us?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis', expanded: false },
    { question: 'How can I buy NFT?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, reprehenderit maxime expedita facere quo modi exercitationem doloremque est quidem rerum. consectetur adipisicing elit. Maxime, corporis', expanded: false },
    { question: 'How i can become a member of your platform?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, reprehenderit maxime expedita facere quo modi exercitationem doloremque est quidem rerum.', expanded: false },
  ];

  toggleAnswer(index: number) {
    this.faqItems[index].expanded = !this.faqItems[index].expanded;
  }
}
