sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("corsobtp.fioriproject.controller.Home", {
            onInit: function () {

            },

            onEdit: function () {
                this.getView().getModel("home").setProperty("/editMode", true)
            },

            onCancel: async function () {
                this.getView().getModel("home").setProperty("/editMode", false)
                await this.getView().getModel().resetChanges()

            },

            onSave: async function () {
                this.getView().getModel("home").setProperty("/editMode", false)
                await this.getView().getModel().submitChanges()
            },

            makeReservation: function (oEvent) {
                const ID = oEvent.getSource().getBindingContext().getObject().ID
                var settings = {
                    "url": "/v2/odata/v4/catalog/orderBook",
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json",
                    },
                    "data": JSON.stringify({
                        "bookID": ID
                    }),
                };

                $.ajax(settings).done(function (response) {
                    console.log(response);
                });

            }               

        });
    });
