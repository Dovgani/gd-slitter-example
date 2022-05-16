import { NgModule              } from '@angular/core';
import { FormsModule           } from '@angular/forms';
import { BrowserModule         } from '@angular/platform-browser';
import { GDExceptionsComponent } from './gd-exceptions.component';
import { Exception             } from './gd-exceptions.component';

import { GDTabsModule          } from 'gd-tabs';

@NgModule({
  declarations: 
  [
    GDExceptionsComponent, 
    Exception
  ],
  imports: [
    BrowserModule,
    FormsModule,

    GDTabsModule
  ],
  exports: 
  [
    GDExceptionsComponent, 
    Exception
  ]
})
export class GDExceptionsModule { }
