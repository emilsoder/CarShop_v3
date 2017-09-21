import {Component} from '@angular/core';

import {AuctionService} from './_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    year: any;

    constructor(private productService: AuctionService) {
        // add some initial _auction
        // if (productService.getAll().length === 0) {
        //     productService.save({ name: 'Boardies', price: '25.00' });
        //     productService.save({ name: 'Singlet', price: '9.50' });
        //     productService.save({ name: 'Thongs (Flip Flops)', price: '12.95' });
        // }
        this.year = (new Date()).getFullYear();
        this.addEventHandlers();
    }

    addEventHandlers() : void {
        $(function () {
            $("ul.nav > li").click(function () {
                $("ul.nav > li").removeClass("active");
                $(this).addClass("active");
            });
        });
    }
}