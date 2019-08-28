import { Classification } from '../interfaces/classifications';

export const classifications: Classification[] = [
    {
      id:'G',
      name: 'Clasificación G',
      text: 'Todas las edades / Todos los publicos'
    },
    {
      id:'PG',
      name: 'Clasificación PG',
      text: '+10años / Algun material puede ser no adecuado para niños menores de 10'
    },
    {
      id:'PG-13',
      name: 'Clasificación PG-13',
      text: '+13 / Algunos materiales puede ser no adecuado para niños menores de 13'
    },
    {
      id:'R',
      name: 'Clasificación R',
      text: '+17 / Menores de 17 años requieren acompañamiento de pares o tutor adulto. Puede contener lenguaje fuerte, intensa enfasis sexual, desnudez explicita y fuerte,fuerte contenido de violencia, uso muy frecuente de arma y sangre'
    },
    {
      id:'NC-17',
      name: 'Clasificación NC-17',
      text: '+18 Pelicula no es adecuada los menores de 18 años. Casi igual que la clasificacion R pero lo unico que cambia es que ahui hay mucha violencia extrema, contenido sexuales fuerte, extremo uso de armsas, desnudez en largos periodos tiempo y/o mucha sangre'
    },
  ]