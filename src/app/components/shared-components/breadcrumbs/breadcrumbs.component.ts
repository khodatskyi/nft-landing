import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  crumbs: { label: string; link: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      console.log(event);
      console.log(event instanceof Object);
      console.log(typeof event);

      if (event) {
        console.log('Мы зашли в иф выражение');

        // Получаем URL текущего маршрута
        const currentUrl = this.router.url;
        console.log(currentUrl);

        // Разбиваем URL на сегменты
        const urlSegments = currentUrl.split('/');
        console.log(urlSegments);

        // Создаем массив хлебных крошек
        this.crumbs = urlSegments.map((segment, index) => {
          return {
            label: segment || 'Home', // Используем 'Главная' для корневого URL
            link: urlSegments.slice(0, index + 1).join('/') || '/', // Создаем путь к текущему URL
          };
        });
        console.log(this.crumbs);
      }
    });
  }

  ngOnDestroy(): void {}
}
