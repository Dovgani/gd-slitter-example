import { NgModule                } from '@angular/core';
import { BrowserModule           } from '@angular/platform-browser';
import { FormsModule             } from '@angular/forms';
import { CommonModule            } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent            } from './app.component';
import { GDTabsModule            } from 'gd-tabs';
import { GDTooltipModule         } from 'gd-tooltip';
import { GDSplitterModule        } from 'gd-splitter';
import { GDRibbonModule          } from 'gd-ribbon';
import { GDExceptionsComponent   } from '../../../gd-exceptions/src/lib/gd-exceptions.component';

@NgModule({
  declarations: [
    AppComponent,
    GDExceptionsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    GDRibbonModule,
    GDTooltipModule,
    GDSplitterModule,
    GDTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
