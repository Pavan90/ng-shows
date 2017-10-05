import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Details} from "./details";
import {Episode} from "./episode";

@Injectable()
export class DetailsService{

    private tvMazeUrl:string = 'http://api.tvmaze.com';

    constructor(private _http:Http){}

    getShowDetails(id:number, show:string):Observable <any>{
        return Observable.forkJoin([
            this.getShowInfo(show),
            this.getEpisodes(id)
        ])
    }
    getShowInfo(show:string):Observable<Details>{

        return this._http
            .get(`${this.tvMazeUrl}/singlesearch/shows?q=${show}`)
            .map((response:Response)=><Details> response.json())
            .do(data=>console.log(data))
            .catch(this.handleError);
    }

    getEpisodes(id:number):Observable<Episode[]>{

        return this._http
            .get(`${this.tvMazeUrl}/shows/${id}/episodes`)
            .map((response:Response)=><Episode[]> response.json())
            .do(data=>console.log(data))
            .catch(this.handleError);
    } //we use forkjoin and it will allow us to wait until all requests been made.



    private handleError(error:Response){
        let msg =  `Error status code ${error.status} status ${error.statusText} at ${error.url}`;
        return Observable.throw(msg);
    }
}