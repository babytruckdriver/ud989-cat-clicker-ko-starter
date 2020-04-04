console.log("Cat Clicker, Knockoutjs flavor!");

var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickNames: ["Tabbyton"]
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
        nickNames: ["Tigerton"]
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
        nickNames: ["Scaredyton"]
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
        nickNames: ["Shadowton"]
    },
    {
        clickCount: 0,
        name: 'Sleepy',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
        nickNames: ["Sleepyton"]
    }
];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttibution = ko.observable(data.imgAttibution);

    this.nickNames = ko.observableArray(data.nickNames); //["Tidy", "Kity", "Purchi"]);
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
    var self = this;

    this.catList = ko.observableArray([]);
    initialCats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.selectCat = function (clickedCat) {
        self.currentCat(clickedCat);
    }
}

ko.applyBindings(new viewModel());