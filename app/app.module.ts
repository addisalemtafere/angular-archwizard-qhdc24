import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { ArchwizardModule } from 'angular-archwizard';
import { BasicComponent } from './wizards/basic/basic.component';
import { CompletionComponent } from './wizards/completion/completion/completion.component';

import { WizardState } from 'angular-archwizard';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ArchwizardModule
  ],
  declarations: [ 
    AppComponent, 
    BasicComponent, CompletionComponent 
  ],
  providers: [WizardState],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
