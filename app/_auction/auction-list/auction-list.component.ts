import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuctionService, PubSubService} from '../../_services/index';
import {fadeInAnimation} from '../../_animations/index';
import {AuctionList} from "../../models/AuctionList";

@Component({
    moduleId: module.id.toString(),
    selector: "auction-list",
    templateUrl: 'auction-list.component.html',
    animations: [fadeInAnimation],
    styleUrls: ["auction-list.component.min.css"],
    host: {'[@fadeInAnimation]': ''}
})

export class AuctionListComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    auctions: any[];

    constructor(private auctionService: AuctionService,
                private pubSubService: PubSubService) {
    }

    ngOnInit() {
        this.loadAuctions();
        this.subscription = this.pubSubService.on('auctions-updated').subscribe(() => {
            return this.loadAuctions();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private loadAuctions() {
        this.auctionService.getAuctions().subscribe(x => {
            return this.auctions = x.json() as AuctionList[];
        });
    }
}