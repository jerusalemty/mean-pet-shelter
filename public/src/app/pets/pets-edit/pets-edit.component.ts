import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-pets-edit',
  templateUrl: './pets-edit.component.html',
  styleUrls: ['./pets-edit.component.css']
})
export class PetsEditComponent implements OnInit {
  item: Object;
  itemToEdit: Object;
  id: any;
  createErrors: Object[];
  constructor(
    private _router: Router,
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('hey hey hey');
    this.itemToEdit = {
      name: '',
      type: '',
      description: '',
      first_skill: '',
      second_skill: '',
      third_skill: ''
    };
    this.createErrors = [];
    console.log('PetsEditComponent.ngOnInit');
    this._route.params.subscribe((prms: Params) => {
      console.log('params', prms);
      this.id = prms['id'];
    });
  }
  editItem() {
    this._httpService
      .updateItem(this.id, this.itemToEdit)
      .subscribe((data: any) => {
        console.log('data', data);
        if (data.errors) {
          console.log('here', data.errors);
          // tslint:disable-next-line:forin
          for (const err in data.errors) {
            console.log('cheese');
            this.createErrors.push(data.errors[err].message);
          }
          console.log('hello hello');
          // this._router.navigate(['/pets', 'edit', this.id]);
        } else {
          this._httpService.getAll().subscribe((updatedData: Object) => {
            this._router.navigate(['/pets']);
          });
        }
      });
  }
}
