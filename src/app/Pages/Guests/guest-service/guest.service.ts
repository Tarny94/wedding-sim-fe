import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private baseUrl = 'http://localhost:8080/wedding/guests';
  private calculateUrl = 'http://localhost:8080/wedding/guests/calculate';

  private guestListSubject = new BehaviorSubject<any[]>([]);
  guestList$ = this.guestListSubject.asObservable();
  constructor(private http: HttpClient) {
    this.updateGuestList();
  }

  updateGuestList() {
    this.getAllGuests().subscribe(
      (guests) => {
        this.guestListSubject.next(guests);
      },
      (error) => {
        console.error('Error updating guest list:', error);
      }, () => {

      }
    );
  }

  getAllGuests(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getGuestById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createGuest(guest: any): Observable<any> {
    return this.http.post(this.baseUrl, guest).pipe(
      tap(() => {
        this.updateGuestList(); // Update the list after creating a guest
      })
    );
  }

  updateGuest(id: string, guest: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, guest).pipe(
      tap(() => {
        this.updateGuestList(); // Update the list after creating a guest
      })
    );
  }

  deleteGuest(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        this.updateGuestList(); // Update the list after creating a guest
      })
    );
  }

  getGuestsCalculate(id : string) {
    return this.http.get(`${this.calculateUrl}/${id}`);
  }
}
