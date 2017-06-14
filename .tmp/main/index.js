"use strict";

var _require = require("electron"),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var win = void 0;
function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL("file://" + __dirname + "/../../index.html ");
    win.on("closed", function () {
        win = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    if (win === null) {
        createWindow();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJhcHAiLCJCcm93c2VyV2luZG93Iiwid2luIiwiY3JlYXRlV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkVVJMIiwiX19kaXJuYW1lIiwib24iLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJxdWl0Il0sIm1hcHBpbmdzIjoiOztlQUMrQkEsUUFBUSxVQUFSLEM7SUFBdkJDLEcsWUFBQUEsRztJQUFLQyxhLFlBQUFBLGE7O0FBQ2IsSUFBSUMsWUFBSjtBQUNBLFNBQVNDLFlBQVQsR0FBd0I7QUFDcEJELFVBQU0sSUFBSUQsYUFBSixDQUFrQjtBQUNwQkcsZUFBTyxHQURhO0FBRXBCQyxnQkFBUTtBQUZZLEtBQWxCLENBQU47QUFJQUgsUUFBS0ksT0FBTCxhQUF1QkMsU0FBdkI7QUFDQUwsUUFBS00sRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBTTtBQUNwQk4sY0FBTSxJQUFOO0FBQ0gsS0FGRDtBQUdIOztBQUVERixJQUFJUSxFQUFKLENBQU8sT0FBUCxFQUFnQkwsWUFBaEI7O0FBRUFILElBQUlRLEVBQUosQ0FBTyxtQkFBUCxFQUE0QixZQUFNO0FBQzlCLFFBQUlDLFFBQVNDLFFBQVQsS0FBc0IsUUFBMUIsRUFBb0M7QUFDaENWLFlBQUtXLElBQUw7QUFDSDtBQUNKLENBSkQ7O0FBTUFYLElBQUlRLEVBQUosQ0FBTyxVQUFQLEVBQW1CLFlBQU07QUFDckIsUUFBSU4sUUFBUSxJQUFaLEVBQWtCO0FBQ2RDO0FBQ0g7QUFDSixDQUpEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XHJcbmxldCB3aW47XHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHsgXHJcbiAgICB3aW4gPSBuZXcgQnJvd3NlcldpbmRvdyh7IFxyXG4gICAgICAgIHdpZHRoOiA4MDAsIFxyXG4gICAgICAgIGhlaWdodDogNjAwIFxyXG4gICAgfSk7XHJcbiAgICB3aW4uIGxvYWRVUkwoYGZpbGU6Ly8ke19fZGlybmFtZX0vLi4vLi4vaW5kZXguaHRtbCBgKTsgXHJcbiAgICB3aW4uIG9uKFwiY2xvc2VkXCIsICgpID0+IHsgXHJcbiAgICAgICAgd2luID0gbnVsbDsgXHJcbiAgICB9KTsgXHJcbn1cclxuXHJcbmFwcC5vbihcInJlYWR5XCIsIGNyZWF0ZVdpbmRvdyk7XHJcblxyXG5hcHAub24oXCJ3aW5kb3ctYWxsLWNsb3NlZFwiLCAoKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy4gcGxhdGZvcm0gIT09IFwiZGFyd2luXCIpIHsgXHJcbiAgICAgICAgYXBwLiBxdWl0KCk7IFxyXG4gICAgfSBcclxufSk7XHJcblxyXG5hcHAub24oXCJhY3RpdmF0ZVwiLCAoKSA9PiB7XHJcbiAgICBpZiAod2luID09PSBudWxsKSB7XHJcbiAgICAgICAgY3JlYXRlV2luZG93KCk7IFxyXG4gICAgfSBcclxufSk7XHJcblxyXG5cclxuIl19