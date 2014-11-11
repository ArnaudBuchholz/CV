function main() {
    "use strict";

    var
        _width,
        _height,
        _scrollY = 0;

    function updateDebugInfo() {
        var debugPanel = document.getElementById("debug");
        debugPanel.innerHTML = [
            "<table>",
            "<tr><td>Size and offset:</td><td>", _width, "x", _height,
            "@", _scrollY, "</td></tr>",
            "</table>"
        ].join("");
        debugPanel.style.top = _scrollY + "px";
        debugPanel.style.left = Math.max(_width - 320, 4) + "px";
    }

    function _onScroll(event) {
        event = event || window.event;
        _scrollY = window.scrollY;
        updateDebugInfo();
    }

    function _onResize(event) {
        event = event || window.event;
        _width = window.innerWidth;
        _height = window.innerHeight;
        document.body.style.height = _height + "px";
        updateDebugInfo();
    }

    // Install handlers
    window.onscroll = _onScroll;
    window.onresize = _onResize;
    window.email = function () {
        alert("email!");
    };

    _onResize();
    _onScroll();
}

window.onload=function () {
    "use strict";
    gpf.loaded(main);
};
