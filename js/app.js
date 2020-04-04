console.log("Cat Clicker, Knockoutjs flavor!");

var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
    this.imgAttibution = ko.observable("https://www.flickr.com");

    this.nickNames = ko.observableArray(["Tidy", "Kity", "Purchi"]); //["Tidy", "Kity", "Purchi"]);
    //this.nickNames.push("Ponny");

    this.level = ko.computed(function () {
        if (this.clickCount() <= 10) {
            return "Newborn";
        } else if (this.clickCount() <= 30) {
            return "Infant";
        } else {
            return "Teen";
        }
    }, this);
}

var viewModel = function () {

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new viewModel());