console.log("Cat Clicker, Knockoutjs flavor!");

var viewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
    this.imgAttibution = ko.observable("https://www.flickr.com");

    this.nickNames = ko.observableArray(); //["Tidy", "Kity", "Purchi"]);
    this.nickNames.push("Tidy");
    this.nickNames.push("Pony");
    this.nickNames.push("Purchi");

    this.level = ko.computed(function () {
        if (this.clickCount() <= 10) {
            return "Newborn";
        } else if (this.clickCount() <= 30) {
            return "Infant";
        } else {
            return "Teen";
        }
    }, this);


    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new viewModel());