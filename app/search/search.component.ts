import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {SearchService} from "./search.service";
import {Show} from "./show";
import {error} from "util";
import {Subscription} from "rxjs/Subscription";
import {NavService} from "../shared/nav.service";

@Component({
    moduleId:module.id,
    templateUrl:'search.template.html'
})

export class SearchComponent implements OnInit, OnDestroy {
searchForm:FormGroup;
shows:Show[];
isLoading:boolean = false;
errorMessage:string;
subscription:Subscription;
item:string;


constructor(private _fb:FormBuilder,
            private _searchService:SearchService,
            private _navService:NavService){}
    ngOnInit(){
    this.getQuery();
    if(this.item){
        this.searchFromBar();
    }
    this.searchForm = this._fb.group({
        query:["",[Validators.required, Validators.minLength(2)]]
    })
    }

    getQuery(){
        //subscription watches for changes in the observable.
        this.subscription = this._navService.navItem$   //navitem gets updated anytime when inside search item updates
            .subscribe(
                item =>{
                    this.item = item;
                },
                error => this.errorMessage = <any> error
            )
    } //we need to remove the subscription in order to prevent the memory leaks

    searchFromBar(){
        this.isLoading = true;
        this._searchService.search(this.item).subscribe(
            shows =>{console.log(shows);
                this.isLoading = false;
                this.shows = shows;
            },
            error=> this.errorMessage = <any>error

        )
    }
    searchShows({value}:{value:any}){
        console.log(value.query);
        this.isLoading = true;
        this.resetSearch();
        this._searchService.search(value.query).subscribe(
            shows =>{console.log(shows);
                            this.isLoading = false;
                            this.shows = shows;
                    },
            error=> this.errorMessage = <any>error

        )
    }

    resetSearch(){
        this.errorMessage = null;
        this.shows = null;
        this.searchForm.reset();

    }

    ngOnDestroy(){
        //prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }

}