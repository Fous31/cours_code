# Comande utile
ng new mon-projet-angular --style=scss --skip-tests=true
--style=scss : utilisation style scss
--skip-tests=true : pas de test

ng generate component mon-premier : création d’un nouveau component
ng g c : raccourci création composant

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
Besoin du module Forms import { FormsModule } from '@angular/forms';

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
async : utilisation avec Promise ou observable

#Service
3 niveaux d'injection:
- Global (composants+service) : dans AppModule (dans providers)
- Components (composants) : dans AppComponent
- Component (composant + enfants) : dans le composant

#Routes

##Declatarion
declaration dans app.module.ts (possible de metre dans un fichier séparé)

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

imports: [
    RouterModule.forRoot(appRoutes)
  ],

##HTML
Pour utiliser les routes
<router-outlet></router-outlet>

Pour naviger
<li routerLinkActive="active"><a routerLink="auth">Authentification</a></li>
 
##js
Service Route : Change de page : this.router.navigate(['appareils']);
Service ActivatedRoute : Recuperer l'id de l'url: this.route.snapshot.params['id']

##Guard
Classe de service qui implémente CanActivate

#RxJS : observable (voir http://reactivex.io/)

Observable emet : données, erreur, ou message complexe

#Reactive Form
import ReactiveFormsModule

Service FormBuilder : création objet FormGroup.group

this.appareilForm = this.formBuilder.group({
      id: '',
      name: ['', Validators.required],
      status: ''
    });

Recuperation des valeurs saisi : this.appareilForm.value[...]

Form utilisation 'formControlName'
<form [formGroup]="appareilForm" (ngSubmit)="onSubmitForm()">

<input type="text" id="name" class="form-control" formControlName="name">


