import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  constructor(private http: HttpClient) {}

  convert(
    value: number,
    fromUnit: string,
    toUnit: string,
    studentResponse: number
  ): Observable<any> {
    return this.http.post('http://localhost:3000/conversions/input-check', {
      value: value,
      toUnit: toUnit,
      fromUnit: fromUnit,
      studentResponse: studentResponse,
    });
  }
}
