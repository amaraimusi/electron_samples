'use strict';

var electron = require('electron'); // Electronの使用
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

let mainWindow; // メイン画面オブジェクト

// 全ての画面が閉じられたときのイベント。
app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

// Electronの初期化完了後に実行
app.on('ready', function() {
	
	// メイン画面のサイズを指定して表示
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		//'node-integration': false
	});
	
	// レンダラープロセスの呼び出し
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	// 画面が閉じられたらメイン画面オブジェクトも開放。
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});

