function main() {
    "use strict";

    var
        _debug = document.getElementById("debug"),
        _width,
        _height,
        _scrollY = 0;

    function updateDebugInfo() {
        _debug.innerHTML = [
            "<table>",
            "<tr><td>Size and offset:</td><td>", _width, "x", _height,
            "@", _scrollY, "</td></tr>",
            "</table>"
        ].join("");
    }

    gpf.html.responsive()
        .addEventListener("scroll", function (event) {
            _scrollY = event.get("top");
            _debug.style.top = _scrollY + "px";
            updateDebugInfo();
        })
        .addEventListener("resize", function (event) {
            _width = event.get("width");
            _height = event.get("height");
            document.body.style.height = _height + "px";
            _debug.style.left = Math.max(_width - 320, 4) + "px";
            updateDebugInfo();
        });

    // Install handlers
    window.email = function () {
        alert("email!");
    };
}

window.onload = function () {
    "use strict";
    gpf.loaded(main);
};
