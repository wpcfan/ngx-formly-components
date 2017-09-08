import { Component, OnInit, DoCheck, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { Field } from 'ng-formly';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import { Http } from "@angular/http";
import { Subscription } from 'rxjs/Subscription';
import { MdDialog, MdAutocomplete } from '@angular/material';

@Component({
    selector: 'formly-ngx-select-autocomplete',
    styles: [`
  `],
    template: `
    <div [ngStyle]="{color:formControl.errors?'#f44336':'inherit'}">
        <md-input-container style="width: 100%">
            <input mdInput [placeholder]="to.placeholder" type="text" [(ngModel)]="value" (ngModelChange)="changed($event)" [disabled]="formControl.disabled" [mdAutocomplete]="autocomplete"/>
        </md-input-container>
        <md-autocomplete #autocomplete="mdAutocomplete" [displayWith]="displayFn">
            <md-option *ngFor="let item of filteredItems" [value]="item" (click)="clicked(item)" [mdTooltip]="to.tooltip && item.name" [mdTooltipPosition]="to.tooltip">{{item.name}}</md-option>
        </md-autocomplete>
    </div>
  `,
})
export class FormlySelectAutocompleteComponent extends Field implements OnInit, OnDestroy {

    private ngUnsubscribe: Subject<void> = new Subject<void>();

    public items: any[] = [];
    public filteredItems: any[];
    public value: any;

    constructor(private http: Http, public dialog: MdDialog) {
        super();
    }

    public ngOnInit() {
        this.to.disabled && this.formControl.disable();
        this.value = this.formControl.value;
        this.to.initialized && this.to.initialized(this.formControl.value);
        this.to.source && this.to.source.takeUntil(this.ngUnsubscribe).subscribe(x => {
            this.filteredItems = [];
            this.items = x || [];
            let filtered = this.formControl.value && this.items.filter(y => y.name == this.formControl.value.name) || [];
            filtered.length == 0 && this.formControl.setValue(null);
        });
        this.formControl.valueChanges.takeUntil(this.ngUnsubscribe).subscribe(x => {
            this.value = x;
            this.to.changed && this.to.changed(x);
        });
    }

    changed(e: any) {
        if (this.formControl.value && this.formControl.value.name && !e.name) {
            this.formControl.setValue(null);
            this.filteredItems = this.filter(null);
            return;
        }
        this.filteredItems = this.filter(e);
        e && e.value ? this.formControl.setValue(e) : this.formControl.setValue(null);
    }

    filter(val: any): string[] {
        if (!val) {
            return this.items;
        }
        if (!this.items || val.name) {
            return null;
        }
        return this.items.filter(option => {
            return option && option.name.toLowerCase().indexOf(val.toLowerCase()) >= 0;
        });
    }

    clicked(e: any) {
        if (e) {
            this.formControl.setValue(e);
            this.value = e;
        }
    }

    displayFn(e: any): string {
        return e ? e.name : null;
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}