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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJhcHAiLCJCcm93c2VyV2luZG93Iiwid2luIiwiY3JlYXRlV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkVVJMIiwiX19kaXJuYW1lIiwib24iLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJxdWl0Il0sIm1hcHBpbmdzIjoiOztlQUErQkEsUUFBUSxVQUFSLEM7SUFBdkJDLEcsWUFBQUEsRztJQUFLQyxhLFlBQUFBLGE7O0FBQ2IsSUFBSUMsWUFBSjs7QUFFQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3BCRCxVQUFNLElBQUlELGFBQUosQ0FBa0I7QUFDcEJHLGVBQU8sR0FEYTtBQUVwQkMsZ0JBQVE7QUFGWSxLQUFsQixDQUFOO0FBSUFILFFBQUtJLE9BQUwsYUFBdUJDLFNBQXZCO0FBQ0FMLFFBQUtNLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQU07QUFDcEJOLGNBQU0sSUFBTjtBQUNILEtBRkQ7QUFHSDs7QUFFREYsSUFBSVEsRUFBSixDQUFPLE9BQVAsRUFBZ0JMLFlBQWhCOztBQUVBSCxJQUFJUSxFQUFKLENBQU8sbUJBQVAsRUFBNEIsWUFBTTtBQUM5QixRQUFJQyxRQUFTQyxRQUFULEtBQXNCLFFBQTFCLEVBQW9DO0FBQ2hDVixZQUFLVyxJQUFMO0FBQ0g7QUFDSixDQUpEOztBQU1BWCxJQUFJUSxFQUFKLENBQU8sVUFBUCxFQUFtQixZQUFNO0FBQ3JCLFFBQUlOLFFBQVEsSUFBWixFQUFrQjtBQUNkQztBQUNIO0FBQ0osQ0FKRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XHJcbmxldCB3aW47XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7IFxyXG4gICAgd2luID0gbmV3IEJyb3dzZXJXaW5kb3coeyBcclxuICAgICAgICB3aWR0aDogODAwLCBcclxuICAgICAgICBoZWlnaHQ6IDYwMCBcclxuICAgIH0pO1xyXG4gICAgd2luLiBsb2FkVVJMKGBmaWxlOi8vJHtfX2Rpcm5hbWV9Ly4uLy4uL2luZGV4Lmh0bWwgYCk7IFxyXG4gICAgd2luLiBvbihcImNsb3NlZFwiLCAoKSA9PiB7IFxyXG4gICAgICAgIHdpbiA9IG51bGw7IFxyXG4gICAgfSk7IFxyXG59XHJcblxyXG5hcHAub24oXCJyZWFkeVwiLCBjcmVhdGVXaW5kb3cpO1xyXG5cclxuYXBwLm9uKFwid2luZG93LWFsbC1jbG9zZWRcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuIHBsYXRmb3JtICE9PSBcImRhcndpblwiKSB7IFxyXG4gICAgICAgIGFwcC4gcXVpdCgpOyBcclxuICAgIH0gXHJcbn0pO1xyXG5cclxuYXBwLm9uKFwiYWN0aXZhdGVcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHdpbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNyZWF0ZVdpbmRvdygpOyBcclxuICAgIH0gXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==