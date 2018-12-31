import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-pets-info',
  templateUrl: './pets-info.component.html',
  styleUrls: ['./pets-info.component.css']
})
export class PetsInfoComponent implements OnInit {
  @Input()
  itemToShow: Object;
  item: any;

  constructor(
    private _router: Router,
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('in ng info');
    this.item = {
      name: '',
      type: '',
      description: '',
      first_skill: '',
      second_skill: '',
      third_skill: ''
    };
    this._route.params.subscribe((prms: Params) => {
      console.log('params', prms);
      this._httpService.getOne(prms.id).subscribe((data: Object) => {
        console.log(data);
        this.item = data['item'];
      });
    });
  }
  deleteItem(id) {
    this._httpService.deleteItem(id).subscribe(data => {
      // this.items = data['data'];
      this._router.navigate(['/pets']);
    });
    console.log('hello');
  }
}
