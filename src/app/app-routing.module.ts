import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { NouvelArticleComponent } from './page/article/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './page/article/page-article/page-article.component';
import { NouvelleCategoryComponent } from './page/categorie/nouvelle-category/nouvelle-category.component';
import { PageCategoriesComponent } from './page/categorie/page-categories/page-categories.component';
import { PageClientComponent } from './page/client/page-client/page-client.component';
import { PageFournisseurComponent } from './page/fournisseur/page-fournisseur/page-fournisseur.component';
import { PageMvtstkComponent } from './page/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageCmdCltFrsComponent } from './page/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageDashboardComponent } from './page/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './page/page-inscription/page-inscription.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageStatistiquesComponent } from './page/page-statistiques/page-statistiques.component';
import { PageUtilisateurComponent } from './page/page-utilisateur/page-utilisateur.component';
import { ChangerMotDePasseComponent } from './page/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './page/profil/page-profil/page-profil.component';
import { NouvellUtilisateurComponent } from './page/utilisateur/nouvell-utilisateur/nouvell-utilisateur.component';
import { ApplicationGuardService } from './service/guard/application-guard.service';

const routes: Routes = [
  {
    path:'login',
    component:PageLoginComponent
  },
  {
   path:'inscrire',
   component:PageInscriptionComponent,
  },
  {
    path:'',
    component:PageDashboardComponent,
    children:[
      {
        path:'statistiques',
        component:PageStatistiquesComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path:'articles',
        component:PageArticleComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path:'nouvelarticle',
        component:NouvelArticleComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path:'mvtstk',
        component:PageMvtstkComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path:'client',
        component:PageClientComponent,
        canActivate:[ApplicationGuardService],
         data:{
          origin:'client'
        }
      },
      {
        path:'nouveauclient',
        component:NouveauCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin:'client'
        } 
      },
      {
        path:'commandesclient',
        component:PageCmdCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin:'client'
        }
      },
      {
        path:'nouvelleCommandeclt',
        component:NouvelleCmdCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin:'client'
        }
         
      },
      {
        path:'fournisseur',
        component:PageFournisseurComponent,
        canActivate:[ApplicationGuardService],
      },
      {
        path:'nouveaufournisseur',
        component:NouveauCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin:'fournisseur'
        } 
      },
      {
        path:'commandesfournisseur',
        component:PageCmdCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin:'fournisseur'
        }
        
      },
      {
        path:'nouvelleCommandefrs',
        component:NouvelleCmdCltFrsComponent,
        canActivate:[ApplicationGuardService],
        data:{
          origin:'fournisseur'
        }
      },
      {
        path:'categories',
        component:PageCategoriesComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path:'nouvellecategorie',
        component:NouvelleCategoryComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path:'utilisateurs',
        component:PageUtilisateurComponent,
         canActivate:[ApplicationGuardService]
      },
      {
        path:'nouvellutilisateur',
        component:NouvellUtilisateurComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path:'profil',
        component:PageProfilComponent,
        canActivate:[ApplicationGuardService]
      },
      {
        path:'changermotdepasse',
        component:ChangerMotDePasseComponent,
        canActivate:[ApplicationGuardService]
      },
      
    
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
