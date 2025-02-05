import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavComponent } from 'modules/shared/ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HelloWorldComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NavComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
