# Comande utile
ng new mon-projet-angular --style=scss --skip-tests=true
--style=scss : utilisation style scss
--skip-tests=true : pas de test

ng generate component mon-premier : création d’un nouveau component

ng serve : lancement du serveur

Installer bootstrap dans son projet : 
- `npm install bootstrap@3.3.7 --save`
- ajout  `"node_modules/bootstrap/dist/css/bootstrap.css",` dans angular.json

Chrome : F12 : ouverture du debugger + console

#Databinding

## code -> HTML :
string interpolation  : {{ expression TypeScript }}
 Affichage attribut js dans HTML
property binding : modification property DOM : 
`[disabled]="!isAuth"`

## HTML -> code : event binding ->
laison vers un élément
	(click)="onAllumer()"

## 2 sens -> two-way bindind
	[(ngModel)]="appareilName"		

## Propriété personnalisé
@Input() sur un attribut de la classe trueScript

#Directive structurelles

*ngIf : test *ngif="condition"
	*ngIf="appareilStatus === 'éteint'"

*ngFor : Boucle *ngFor="let obj of myArray"

#Directive attributs

ngModel two-way binding, qui modifie la valeur du  <input>  et répond à tout changement qu'on lui apporte
	[(ngModel)]="appareilName"

ngStyle appliquer un style css (sous forme d'une liste de clef,valeur)
	[ngStyle]="{color: getColor()}"

ngClass applique une class css
	[ngClass]="{'list-group-item': true,
                'list-group-item-success': appareilStatus === 'allumé',
                'list-group-item-danger': appareilStatus === 'éteint'}"

#Pipe |

date 
uppercase 
async : utilisation avec Promise ou 

