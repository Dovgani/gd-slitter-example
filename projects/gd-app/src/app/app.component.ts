import { Component             } from '@angular/core';
import { ViewChild, OnDestroy  } from '@angular/core';
import { LocationStrategy      } from '@angular/common';

import { GDRibbonComponent     } from 'gd-ribbon';
import { GDCommonService       } from 'gd-common';
import { SplitterPanels        } from 'gd-splitter';
import { ISplitter             } from 'gd-splitter';
import { Subject               } from 'rxjs';
import { Observable            } from 'rxjs';
import { Subscription          } from 'rxjs';
import { fromEvent             } from "rxjs";

import { Exception             } from '../../../gd-exceptions/src/lib/gd-exceptions.component';
import { GDExceptionsComponent } from '../../../gd-exceptions/src/lib/gd-exceptions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy
{
    title = 'gd-app';

    @ViewChild('ribbon')     ribbon     : GDRibbonComponent;
    @ViewChild('exceptions') exceptions : GDExceptionsComponent;

    public  Exceptions           : Array<Exception>;

    public  PosX                 : string = '0.00';
    public  PosY                 : string = '0.00';
    public  OffsetX              : string = '1.00';
    public  OffsetY              : string = '1.00';
    public  ScrollX              : string = '0.00';
    public  ScrollY              : string = '0.00';
    public  Scale                : string = '1.00';

    public  SearchCustomID       = '';
    public  ActiveUser           = '';
    public  UserObject           = null;
    public  Mode                 = '';
    public  Action               = '';
    public  Organization         = '';
    public  Package              = '';
    public  Form                 = '';
    public  CustomID             = '123';

    public  PageWidth  : any;
    public  PageHeight : any;

    public  splitterMain         : ISplitter;
    public  splitterCenter       : ISplitter;

    private resizeObservable   : Observable<Event>;
    private resizeSubscription : Subscription;

    constructor( private commonService: GDCommonService, private locationStrategy: LocationStrategy )
    {
        this.PageWidth  = window.innerWidth  - 2;
        this.PageHeight = window.innerHeight - 2;

        this.splitterMain = 
        {
            buttonSize : 0, 
            panels :
            [
                {
                    layout             : SplitterPanels.top, 
                    isOpened           : true,
                    isButtonVisible    : false,
                    isSeperatorVisible : true,
                    isSeperatorLocked  : true,
                    seperatorThickness : 1,
                    size               : 116 
                },
                {
                    layout             : SplitterPanels.left, 
                    isOpened           : true,
                    isButtonVisible    : true,
                    isSeperatorVisible : true,
                    isSeperatorLocked  : false,
                    seperatorThickness : 3,
                    size               : 300 
                },
                {
                    layout             : SplitterPanels.right, 
                    isOpened           : true,
                    isButtonVisible    : true,
                    isSeperatorVisible : true,
                    isSeperatorLocked  : false,
                    seperatorThickness : 3,
                    size               : 150 
                },
                {
                    layout             : SplitterPanels.bottom, 
                    isOpened           : true,
                    isButtonVisible    : true,
                    isSeperatorVisible : true,
                    isSeperatorLocked  : false,
                    seperatorThickness : 3,
                    size               : 150 
                }
            ]    
        };

        this.resizeObservable = fromEvent(window, 'resize')
        this.resizeSubscription = this.resizeObservable.subscribe( evt => {
            this.PageWidth  = (evt.currentTarget as Window).innerWidth  - 2;
            this.PageHeight = (evt.currentTarget as Window).innerHeight - 2;
        });

        this.Exceptions = new Array<Exception>();
        this.Exceptions.push( { id : 1, description : `Binding source doesn't exist.`, project : 'error 123:', refID : '', shapeID : '' } );
        this.Exceptions.push( { id : 2, description : `Binding source doesn't exist.`, project : 'error 123:', refID : '', shapeID : '' } );
        this.Exceptions.push( { id : 3, description : `Binding source doesn't exist.`, project : 'error 123:', refID : '', shapeID : '' } );
        this.Exceptions.push( { id : 4, description : 'Error in data description.',    project : 'error 987:', refID : '', shapeID : '' } );
        this.Exceptions.push( { id : 5, description : 'Error in data description.',    project : 'error 987:', refID : '', shapeID : '' } );
        this.Exceptions.push( { id : 6, description : 'Error in data description.',    project : 'error 987:', refID : '', shapeID : '' } );        
    }

    public  ngOnDestroy()
    {
        this.resizeSubscription?.unsubscribe();
    }

    public  onRibbonClick( arg : string )
    {
        switch( arg )
        {
            //case 'container-add-btn'            : this.onAddContainer();          break;
//            case 'text-add-btn'                 : this.onAddText();               break;
//            case 'open-active-btn'              : this.onOpenLastUsed();          break;
            case 'default-settings-btn'         : alert(arg);                     break;
  //          case 'security-rules-btn'           : this.onSecurityRules();         break;
            case '3d-btn'                       : alert(arg);                     break;

            case 'sync-data-btn'                : alert(arg);                     break;
            case 'connect-to-server-btn'        : alert(arg);                     break;
            case 'disconnect-from-server-btn'   : alert(arg);                     break;

//            case 'users-btn'                    : this.openData();                break; 
//            case 'users-btn'                    : this.openUsers();               break;
            case 'products-btn'                 : alert(arg);                     break;
            case 'rules-btn'                    : alert(arg);                     break;
//            case 'database-btn'                 : this.openDatabase();            break;
//            case 'templates-btn'                : this.openTemplates();           break;
            case 'vendors-btn'                  : alert(arg);                     break;
//            case 'styles-btn'                   : this.openStyles();              break;

            case 'zoom-fit-btn'                 : alert(arg);                     break;
            case 'zoom-selected-btn'            : alert(arg);                     break;
            case 'zoom-in-btn'                  : alert(arg);                     break;
            case 'zoom-out-btn'                 : alert(arg);                     break;
//            case 'zoom-default-btn'             : this.canvas.canvas.resetDrawingSurface( 1, 1, null ); break;

//            case 'data-btn'                     : this.openData();                break;
//            case 'properties-btn'               : this.openDynamicProprties();    break;
        }
    }   
}
