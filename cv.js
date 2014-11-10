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
            "<tr><td>Width:</td><td>", _width, "</td></tr>",
            "<tr><td>Height:</td><td>", _height, "</td></tr>",
            "<tr><td>Scroll Y:</td><td>", _scrollY, "</td></tr>",
            "</table>"
        ].join("");
        debugPanel.style.top = _scrollY + "px";
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

    _onResize();
    _onScroll();
}

window.onload=function () {
    "use strict";
    gpf.loaded(main);
};
