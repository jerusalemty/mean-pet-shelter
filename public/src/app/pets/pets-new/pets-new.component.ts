import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-pets-new',
  templateUrl: './pets-new.component.html',
  styleUrls: ['./pets-new.component.css']
})
export class PetsNewComponent implements OnInit {
  newItem: Object;
  createErrors: Object[];
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    console.log('in ngonIt');
    this.newItem = {
      name: '',
      type: '',
      description: '',
      first_skill: '',
      second_skill: '',
      third_skill: ''
    };
    this.createErrors = [];
  }

  addItem() {
    console.log('PetsNewComponent.createItem');
    const createObservable = this._httpService.addItem(this.newItem);
    createObservable.subscribe((data: any) => {
      console.log('data:', data);

      if (data.errors) {
        console.log('here', data.errors);
        for (let err in data.errors) {
          this.createErrors.push(data.errors[err].message);
        }
      } else {
        this._httpService.getAll().subscribe((updatedData: Object) => {
          this._router.navigate(['pets']);
        });
      }
    });
  }
}
