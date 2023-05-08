import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtitlityService {
  user__list: Array<any> = [];
  constructor() {}
  addUser(data: any): void {
    this.user__list.push(data);
  }

  deleteUser(index: number): void {
    this.user__list.splice(index, 1);
  }

  findIndex(data: any) {
    const index = this.user__list.findIndex((item) => item === data);
    return index;
  }

  getUser(): Array<any> {
    return this.user__list;
  }
}
