import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  pageCollection: number[] = [];
  step: number = 15;
  currentPage: number = 1;
  totalPages: number = 0;

  @Output() pageChanged = new EventEmitter<number>();

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.totalPages = Math.ceil(
      this.data.artWorksCollection.length / this.step
    );

    console.log(this.totalPages);

    for (let i = 1; i <= this.totalPages; i++) {
      this.pageCollection.push(i);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.data.totalPages) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage !== 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }

  goToPage(page: number) {
    console.log(page);
    this.pageChanged.emit(page);
    this.currentPage = page
  }


}
