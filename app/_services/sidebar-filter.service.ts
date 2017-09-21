import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Headers} from "@angular/http";
import {Http, Response} from "@angular/http";
import {HttpService} from "./http.service";
import {AuctionEndPoint, FilterEndpoint} from "../common/Endpoints";

@Injectable()
export class AuctionFilterService {
    constructor(private apiService: HttpService) {
        this.apiService = apiService;
    }

    public getCategories(): Observable<Response> {
        return this.apiService.getData(FilterEndpoint.getCategories);
    }

    public getMakers(): Observable<Response> {
        return this.apiService.getData(FilterEndpoint.getMakers);
    }

}
