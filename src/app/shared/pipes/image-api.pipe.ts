import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "imageApiRest",
})
export class ApiRestPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {

    "http://localhost:8080/Laravel/mega-pelis/public/storage/img/181641-shadow-of-the-colossus-ps4_316552.jpg"
    return value === ""
      ? 'assets/img/image.jpg'
      // : `http://localhost:8080/Laravel/mega-pelis/public/storage/${value}`;
      : `https://mega-pelis.herokuapp.com/public/storage/${value}`;
  }
}
