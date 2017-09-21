import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuctionService, PubSubService} from '../../_services/index';
import {Auction} from "../../models/Auction";

@Component({
    moduleId: module.id.toString(),
    selector: "auction-details",
    templateUrl: 'auction-details.component.html',
    styleUrls: ["auction-details.component.css"]
})

export class AuctionDetailsComponent implements OnInit {
    title = 'Details';
    auction: Auction = new Auction;
    counter: number = 0;
    _images: ImageViewModel[] = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private auctionService: AuctionService,
                private pubSubService: PubSubService) {
        this.counter = 0;
    }


    ngOnInit() {
        this.auctionService.getAuctionById(Number(this.route.snapshot.params['id']))
            .subscribe(x => {
                this.auction = x.json() as Auction;

                this.auction.images.push("https://i.ebayimg.com/00/s/MTE3NFgxNjAw/z/pokAAOSwg6pZa~k8/$_20.jpg");
                this.auction.images.push("https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/JdsAAOSwbm9ZqIGt/$_20.jpg");
                this.auction.images.push("https://i.ebayimg.com/00/s/NDgwWDY0MA==/z/lFQAAOSwd~RZRMoM/$_20.jpg");

                for (let i = 0; i < this.auction.images.length; i++) {
                    let isActive = "";
                    if(i === 0){
                        isActive = "active"
                    }else{
                        isActive = "";
                    }
                    this._images.push({id: i, url: this.auction.images[i], _active: isActive});
                }

                // let _html =  $('#img_0').find("span").html();
                // console.log(_html);
                // $("#main-img").attr("src", _html);
                // $('#img_0').addClass("w3-circle-active");
            });


        $("#auction-main-row").fadeOut("fast", function () {
            $("#detailsContainer").fadeIn("fast");
        });


        $(".left").click(function () {
            $("#myCarousel").carousel("prev");
        });

        $(".right").click(function () {
            $("#myCarousel").carousel("next");
        });
    }

    public renderOnLoad(): void {
        let c1 = $("#myCarousel > .carousel-inner > .item").first();
        console.log($(c1));
        $(c1).addClass("active");
    }

    closeThis() {
        let elemId = "auction_" + this.auction.id;
        $("#detailsContainer").hide("fast");
        $("#auction-main-row").fadeIn("fast", function () {
            _scrollIntoView(elemId);
        });

        this.router.navigate(['auctions']);
    }

    saveProduct() {
        this.router.navigate(['auctions']);
        this.pubSubService.publish('auctions-updated');
    }

    public changeImage(_id: any, _url: any,) {
        $("#main-img").attr("src", _url);
        $(".w3-circle").removeClass("w3-circle-active");
        console.log(_id);
        $('#img_' + _id).addClass("w3-circle-active");
    }

    public getNumber(): number {
        this.counter = this.counter + 1;
        return this.counter;
    }

}

function _scrollIntoView(elementId: any): void {
    let e = document.getElementById(elementId);
    if (!!e && e.scrollIntoView) {
        e.scrollIntoView({behavior: 'smooth'});
    }
}

export class ImageViewModel {
    public id: number;
    public url: string;
    public _active: string;
}
