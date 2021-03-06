function Controller() {
    function goToUser() {
        Alloy.createController("user", {
            id: args.id
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "usersRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        top: "10dp",
        borderRadius: "3",
        backgroundColor: "white",
        layout: "vertical",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    goToUser ? $.__views.row.addEventListener("click", goToUser) : __defers["$.__views.row!click!goToUser"] = true;
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica"
        },
        id: "name"
    });
    $.__views.row.add($.__views.name);
    $.__views.email = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica"
        },
        id: "email"
    });
    $.__views.row.add($.__views.email);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.text = args.name;
    $.email.text = args.email;
    __defers["$.__views.row!click!goToUser"] && $.__views.row.addEventListener("click", goToUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;