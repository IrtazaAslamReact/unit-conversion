import { Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ConversionService } from '../services/conversion.service';

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.css'],
})
export class ConversionFormComponent implements OnInit {
  value: any;
  fromUnit: any;
  toUnit: any;
  studentResponse: any;
  result: any;
  output: any;

  constructor(private conversionService: ConversionService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.conversionService
      .convert(this.value, this.fromUnit, this.toUnit, this.studentResponse)
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {
          this.output = error.message;
          console.error('There was an error!', error);
         return this.output;
        })
      )
      .subscribe((result) => (this.output = result));
  }
}
