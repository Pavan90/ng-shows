import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Show} from "./show";


@Injectable()
export class SearchService{

    private tvMazeUrl:string = 'http://api.tvmaze.com/search/shows?q=girls';

    constructor(private _http:Http){}


    search(query:any):Observable<Show[]>{
        let search:URLSearchParams = new URLSearchParams();
        search.set('q',query)
        return this._http
            .get(this.tvMazeUrl,{search})
            .map((response:Response)=><Show[]> response.json())
            .do(data=>console.log(data))
            .catch(this.handleError);
    }

    private handleError(error:Response){
        let msg =  `Error status code ${error.status} status ${error.statusText} at ${error.url}`;
        return Observable.throw(msg);
    }
}