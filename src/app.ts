import { WorkItemFormService } from "TFS/WorkItemTracking/Services";



const d =  {
    // Called when the active work item is modified
    onFieldChanged: function(args) {
        console.log(JSON.stringify(args));
    },

    // Called when a new work item is being loaded in the UI
    onLoaded: function (args) {
        WorkItemFormService.getService().then((service)=>service.getFieldValues(["System.Id", "System.Title", "System.State", "System.CreatedBy", "System.AssignedTo"]).then(
            function (value) {
               console.log(JSON.stringify(value));
               $("#content").text(JSON.stringify(value));
            }));
    },

    // Called when the active work item is being unloaded in the UI
    onUnloaded: function (args) {
        console.log(JSON.stringify(args));
    },

    // Called after the work item has been saved
    onSaved: function (args) {
        console.log(JSON.stringify(args));
    },

    // Called when the work item is reset to its unmodified state (undo)
    onReset: function (args) {
        console.log(JSON.stringify(args));
    },

    // Called when the work item has been refreshed from the server
    onRefreshed: function (args) {
        console.log(JSON.stringify(args));
    }
}

VSS.register(VSS.getContribution().id, d);

$("#button").click(() => {
    WorkItemFormService.getService().then((service)=>service.setFieldValue("System.AssignedTo", $("#in").val() ));
});

$("#abc").click(() => {
    WorkItemFormService.getService().then((service)=>service.setFieldValue("System.Id", "abcde"));
});

