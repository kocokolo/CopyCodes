// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
var isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));