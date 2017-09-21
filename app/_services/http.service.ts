import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Headers} from "@angular/http";
import {Http, Response} from "@angular/http";

@Injectable()
export class HttpService {
    constructor(private http: Http) {
        this.http = http;
    }

    public getData(actionEndpoint: string) {
        return this.http.get(actionEndpoint);
    }

    public postData(actionEndpoint: string, model: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(
            actionEndpoint,
            JSON.stringify(model), {
                headers
            });
    }
}