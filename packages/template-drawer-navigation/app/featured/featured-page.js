const app = require("@nativescript/core").Application;

const FeaturedViewModel = require("./featured-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new FeaturedViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
