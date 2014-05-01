function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "users";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.userWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "userWin",
        title: "Users"
    });
    $.__views.userWin && $.addTopLevelView($.__views.userWin);
    $.__views.usersTable = Ti.UI.createTableView({
        id: "usersTable"
    });
    $.__views.userWin.add($.__views.usersTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var collection = Alloy.createCollection("users");
    collection.fetch({
        success: function() {
            var rows = [];
            _.each(collection.models, function(element) {
                var controller = Alloy.createController("usersRow", {
                    name: element.attributes.name,
                    email: element.attributes.email,
                    id: element.attributes.id
                });
                var view = controller.getView();
                rows.push(view);
            });
            $.usersTable.setData(rows);
        },
        error: function() {
            Ti.API.error("hmm - this is not good!");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;