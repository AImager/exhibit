var getAll = function () {
    var node = document.querySelectorAll(".exhibit_item");
    for (var i = 0; i < node.length; i++) {
        node[i].style.display = "";
    }
}

var hideAll = function () {
    var node = document.querySelectorAll(".exhibit_item");
    for (var i = 0; i < node.length; i++) {
        node[i].style.display = "none";
    }
}

var getAllStatus = function () {
    var node = document.querySelectorAll(".status_item");
    var site_status = []
    for (var i = 0; i < node.length; i++) {
        site_status[i] = node[i].id
    }
    return site_status
}

document.getElementById("status_all").addEventListener("click", getAll);

site_status = getAllStatus();
for (var i = 0; i < site_status.length; i++) {
    document.getElementById(site_status[i]).addEventListener("click", function () {
        hideAll();
        var node = document.querySelectorAll("." + this.id);
        for (var j = 0; j < node.length; j++) {
            node[j].style.display = "";
        }
    });
}