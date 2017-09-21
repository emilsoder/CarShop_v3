import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Headers} from "@angular/http";
import {Http, Response} from "@angular/http";
import {HttpService} from "./http.service";
import {AuctionEndPoint} from "../common/Endpoints";

@Injectable()
export class AuctionService {
    constructor(private apiService: HttpService) {
        this.apiService = apiService;
    }

    private setProducts(products: any[]) {
        localStorage.setItem('auctions', JSON.stringify(products));
    }

    public  getAuctions(): Observable<Response> {
        return this.apiService.getData(AuctionEndPoint.getall);
    }

    public getAuctionById(id: number): Observable<Response> {
        return this.apiService.postData(AuctionEndPoint.getById, id);
    }
}
