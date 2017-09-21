export class BaseEndpoint {
    public static Url = "http://carshop-api.azurewebsites.net"
}

export class AuctionEndPoint {
    public static getall = "./app/jsondata/all.json";

    // public static getall = BaseEndpoint.Url + "/api/auctions/all";
    public static remove = BaseEndpoint.Url + "/api/auctions/remove";
    public static add = BaseEndpoint.Url + "/api/auctions/add";
    public static getById = BaseEndpoint.Url + "/api/auctions/getbyid";
    public static update = BaseEndpoint.Url + "/api/auctions/update";
}

export class FilterEndpoint {
    // public static getMakers = BaseEndpoint.Url + "/api/filter/makers";
    // public static getCategories = BaseEndpoint.Url  + "/api/filter/categories";
    public static getMakers = "./app/jsondata/makers.json";
    public static getCategories = "./app/jsondata/categories.json";
}