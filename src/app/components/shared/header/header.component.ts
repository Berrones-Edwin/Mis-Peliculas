import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  movie: any[] = [];
  constructor(
    private _moviesService: MoviesService
  ) { }

  ngOnInit() {

    const idRandom = Math.floor(Math.random() * (1000 - 1)) + 1;
    console.log(idRandom)

    this.getDetails('12')
      .then((data: any) => {this.movie = data; console.log(data)})
      .catch((err) => console.log(err));
  }

  getDetails(id: string) {

    return new Promise((resolve, reject) => {

      this._moviesService.getDetails(id)
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject();
        },
          error => reject(error));
    })
  }

}
