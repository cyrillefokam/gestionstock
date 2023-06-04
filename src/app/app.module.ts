import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageInscriptionComponent } from './page/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './page/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './page/article/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './page/article/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './page/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './page/client/page-client/page-client.component';
import { PageFournisseurComponent } from './page/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './page/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { DetailsCmdCltFrsComponent } from './composants/details-cmd-clt-frs/details-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './page/categorie/page-categories/page-categories.component';
import { NouvelleCategoryComponent } from './page/categorie/nouvelle-category/nouvelle-category.component';
import { PageUtilisateurComponent } from './page/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { NouvellUtilisateurComponent } from './page/utilisateur/nouvell-utilisateur/nouvell-utilisateur.component';
import { PageProfilComponent } from './page/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './page/profil/changer-mot-de-passe/changer-mot-de-passe.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    DetailsCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelleCategoryComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvellUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
