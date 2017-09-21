import {Component, OnInit} from '@angular/core';
import {AuctionFilterService} from "../../_services/sidebar-filter.service";
import {Maker} from "../../models/Category";

@Component({
    moduleId: module.id.toString(),
    selector: "sidebar-filter",
    templateUrl: 'auction-filter.component.html',
    styleUrls: ["auction-filter.component.min.css"],
})

export class AuctionFilterComponent implements OnInit {
    makers: Maker[] = [];
    categories: CategoryViemModel[] = [];

    constructor(private filterService: AuctionFilterService) {
        this.setJqueryEvents();
    }

    ngOnInit() {
        this.initializeData();
    }

    private initializeData() {
        this.loadMakers();
        this.loadCategories();
    }

    private loadMakers() {
        this.filterService.getMakers().subscribe(x => {
            return this.makers = x.json() as Maker[];
        });
    }

    private loadCategories() {
        this.filterService.getCategories().subscribe(x => {
            return this.categories = x.json() as CategoryViemModel[];
        });
    }

    setJqueryEvents(): void {
        $(function () {
            onWindowResize();
            $("#header-sidebar-categories").click(function () {
                $(this).parent().find(".panel-collapse").fadeToggle("fast").collapse("toggle");
                return false;
            });
            $("#panel-sidebar-categories").on("hide.bs.collapse", function () {
                let closest = $(this).parent().find(".panel-heading > div > i");
                $(closest).removeClass("glyphicon-menu-down")
                    .addClass("glyphicon-menu-right");
            }).on("show.bs.collapse", function () {
                let closest = $(this).parent().find(".panel-heading > div > i");
                $(closest).removeClass("glyphicon-menu-right")
                    .addClass("glyphicon-menu-down");
            });

            $("#header-sidebar-makers").click(function () {
                $(this).parent().find(".panel-collapse").fadeToggle("fast").collapse("toggle");
                return false;
            });
            $("#panel-sidebar-makers").on("hide.bs.collapse", function () {
                let closest = $(this).parent().find(".panel-heading > div > i");
                $(closest).removeClass("glyphicon-menu-down")
                    .addClass("glyphicon-menu-right");
            }).on("show.bs.collapse", function () {
                let closest = $(this).parent().find(".panel-heading > div > i");
                $(closest).removeClass("glyphicon-menu-right")
                    .addClass("glyphicon-menu-down");
            });

            $(".box").click(function () {
                $(this).toggleClass("box-active");
            });

            $(window).resize(function () {
                onWindowResize();
                return false;
            });

            $("#btn-close-auction-filter").click(function () {
                $("#mySidebar").css("display", "none");
            });

            $("#btn-open-auction-filter").click(function () {
                $("#mySidebar").css("display", "block");
            });

            function isSidebarStacked() {
                var w = $(window).width();
                console.log(w);
                return w < 750;
            }

            $("#auction-filter-toggle-panel-btn").click(function () {
                console.log("clicked");
                if (isSidebarStacked()) {
                    $("#auction-filter-panel-body").collapse("toggle");
                }
                return false;
            });

            function onWindowResize() {
                const windowWidth = $(window).width();
                if (windowWidth < 973.33) {
                    $(".w3-main").css("padding-left", "0px");
                    $("#mySidebar").css("z-index", 1)
                }
                else if (windowWidth > 973.33) {
                    $(".w3-main").css("padding-left", "300px");
                    $("#mySidebar").css("z-index", 0)
                }
                return false;
            }
        });
    }

}

export class CategoryViemModel {
    public id: number;
    public name: string;
    public iconCssClass: string;
}