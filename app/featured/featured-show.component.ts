import {Component, OnInit} from "@angular/core";
import {Featured} from "./featured";
import {FeaturedService} from "./featured.service";
import {error} from "util";

@Component({
    moduleId:module.id,
    selector:'tv-featured-shows',
    templateUrl:'featured-shows.template.html',
    styleUrls:['styles.css']
})

export class FeaturedShowComponent implements OnInit{
    shows:Featured[];
    errorMessage:string;

    constructor(private _featuredService:FeaturedService){}

    ngOnInit(){
        this.getFeaturedShows();
    }

    getFeaturedShows(){
        this._featuredService.featuredShows().subscribe(
            (shows:Featured[]) =>{
                console.log(shows);
                this.shows = shows;
            },
            error => this.errorMessage =<any>error
        )
    }

}