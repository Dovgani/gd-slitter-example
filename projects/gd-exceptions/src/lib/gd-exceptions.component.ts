import { Component         } from '@angular/core';
import { Output, Input     } from '@angular/core';
import { AfterViewInit     } from '@angular/core';
import { ElementRef        } from '@angular/core';
import { EventEmitter      } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OnChanges         } from '@angular/core';
import { SimpleChange      } from '@angular/core';

@Component({
    selector: 'gd-exceptions',
    templateUrl: './gd-exceptions.component.html',
    styleUrls:  ['./gd-exceptions.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GDExceptionsComponent implements AfterViewInit, OnChanges
{
    public   selectedItem          : any;
    private  selectedElement       : any;
    private  exceptions            : Array<Exception>;
    private  root                  : any;

    public   ExceptionsContainerHeight = 0;

             public get Root()            : any                { return this.root;               }
    @Input() public set Root(       value : any )              {        this.root = value;       }

             public get Exceptions()      : Array<Exception>   { return this.exceptions;         }
    @Input() public set Exceptions( value : Array<Exception> ) {        this.exceptions = value; }

    @Output() selectChanged = new EventEmitter();    

    constructor( private el: ElementRef )
    {
    }

    public  ngOnChanges( changes : { [k:string] : SimpleChange } )
    {
        if( changes['Exceptions'] && ! changes['Exceptions'].firstChange )
        {
        }
    }

    Clear()
    {
        this.exceptions = new Array<Exception>();
    }

    ngAfterViewInit()
    {
    }

    public onTabsClick( arg : any) : void
    {
    }

    public  onMouseDown( event : any, item : any )
    {
        if( this.selectedElement )
        {
            this.selectedElement.classList.remove( 'selected' );
        }

        this.selectedItem    = item;
        this.selectedElement = event.target;
        this.selectedElement.classList.add( 'selected' );

        const ex = this.exceptions.find( e => e.id === item.id );

        this.selectChanged.emit           ( { id : ex.id, shapeID : ex.shapeID, refID : ex.refID, description : ex.description } );
        this.Root.canvas.SelectDrawingItem( { id : ex.id, shapeID : ex.shapeID, refID : ex.refID, description : ex.description } )
    }    
}

@Component({
    template: ''
})
export class Exception
{
    id          : number;
    description : string;
    refID       : string;
    shapeID     : string;
    project     : string;
 // width       : string;

    constructor()
    {
        this.id           = 0;
        this.description  = '';
        this.project      = '';
    }
}