import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  @Input()
  item: any;
  items: Object[];
  selectedItem: Object;

  constructor(private _httpService: HttpService) {
    console.log('PetsComonent');
  }

  ngOnInit() {
    console.log('PetsComponent.ngOnInit');

    // initialize class attribute
    this.items = [];
    this.selectedItem = {
      name: '',
      type: '',
      description: '',
      first_skill: '',
      second_skill: '',
      third_skill: ''
    };

    this._httpService.getAll().subscribe((data: Object[]) => {
      console.log('data', data);
      this.items = data['items'];
    });
  }

  // when show method is clicked
  selectItem(item: any) {
    console.log('PetsComponent.selectItem.pets:', item);
    console.log('PetsComponent.selectItem.this.selectedItem:', this.selectItem);
    if (item._id === this.selectItem['_id']) {
      this.selectedItem = {};
    } else {
      this.selectedItem = item;
    }
  }
  deleteItem(id) {
    this._httpService.deleteItem(id).subscribe(data => {
      this.items = data['data'];
    });
    console.log('hello');
  }
}
