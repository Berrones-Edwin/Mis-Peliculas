import { Component, OnInit, OnDestroy } from '@angular/core';
import { classifications } from '../../../shared/Data/classifications';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classifications',
  templateUrl: './classifications.component.html',
  styleUrls: ['./classifications.component.css']
})
export class ClassificationsComponent implements OnInit, OnDestroy {

  classifications = classifications; // Obtiene el array de clasificaciones
  private unsubscribe$ = new Subject<void>();
  classificationsMovies$: Observable<any>;
  classification: string;
  id:string="";

  constructor(
    private _moviesService: MoviesService,
    private _activatedRouter: ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {

    this._activatedRouter.params.subscribe((data) => {

      this.classification = data["opcion"];
      this.id = data["page"];

      if (this.classification) {
        this.getClasification("1", this.classification)
      }
    })

  }

  getClasification(page: string = "1", classification: string) {

    this.classificationsMovies$ = this._moviesService.getClasification(page, classification);

  }

  nextPage(page): void {

    this.id = page;
    let classification =  this.classification

    this._router.navigate([
      '/peliculas/clasificaciones/',
        classification,
        page
      
    ]).then(() => {
      this.getClasification(this.id,this.classification);
    })

  }

  detailsMovie(movie) {
    this._router.navigate([
      'peliculas',
      movie['id']
    ])
  }


  ngOnDestroy(): void {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }

}
