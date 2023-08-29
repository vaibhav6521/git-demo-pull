import { Component } from '@angular/core';
import { of, map, catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CatchError';

  ngOnInit() {
    of(1, 2, 3, 4, 5,6)
      .pipe(
        map(n => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError(err => of('I', 'II', 'III', 'IV', 'V'))
      )
      .subscribe(x => console.log(x));
    // 1, 2, 3, I, II, III, IV, V
  }
}
