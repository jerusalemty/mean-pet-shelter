import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAll() {
    return this._http.get('/api/pets');
  }

  getOne(item_id) {
    return this._http.get(`/api/pets/${item_id}`);
  }
  addItem(item) {
    return this._http.post('/api/pets/new', item);
  }

  updateItem(item_id, item) {
    console.log(item_id);
    return this._http.put(`/api/pets/${item_id}`, item);
  }

  deleteItem(item_id) {
    return this._http.delete(`/api/pets/${item_id}`);
  }
}
