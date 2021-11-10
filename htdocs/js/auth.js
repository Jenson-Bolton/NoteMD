import Gun from "https://cdn.skypack.dev/gun";
var gun = Gun();

var user = gun.user();

user.create("Jenson-Bolton", "123");
