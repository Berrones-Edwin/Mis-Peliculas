import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value===null) ? 'assets/img/image.jpg' : `${environment.urlImg}/${value}`;
  }

}
