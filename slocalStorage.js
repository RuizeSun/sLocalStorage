/*
sLocalStorage by Ruize Sun
This open-source project uses MIT License, 
You can go https://www.github.com/ruizesun/slocalstorage/ to get more informations.
This project based on 40code api.

sLocalStorage 来自 Ruize Sun
本开源项目使用 MIT 协议，
你可以前往 https://www.github.com/ruizesun/slocalstorage/ 获取更多信息
本项目基于 40code API 开发。

*/

class sLocalStorage {
	getInfo() {
		return {
			id: "sLocalStorage",
			name: "本地存储",
			blocks: [
				{
					func: 'warns',
					blockType: Scratch.BlockType.BUTTON,
					text: "注意事项",
				},
				'---',
				{
					opcode: "savelstorage",
					blockType: Scratch.BlockType.COMMAND,
					text: "项目存储 [key] 为 [text]",
					arguments: {
						key: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "Hello",
						},
						text: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "World",
						},
					},
				},
				{
					opcode: "getlstorage",
					blockType: Scratch.BlockType.REPORTER,
					text: "项目存储 [key]",
					arguments: {
						key: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "Hello",
						},
					},
				},
				{
					opcode: "rmlstorage",
					blockType: Scratch.BlockType.COMMAND,
					text: "删除项目存储 [key]",
					arguments: {
						key: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "Hello",
						},
					},
				},
				'---',
				{
					opcode: "savelstorageg",
					blockType: Scratch.BlockType.COMMAND,
					text: "公共存储 [key] 为 [text]",
					arguments: {
						key: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "Hello",
						},
						text: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "World",
						},
					},
				},
				{
					opcode: "getlstorageg",
					blockType: Scratch.BlockType.REPORTER,
					text:  "公共存储 [key]",
					arguments: {
						key: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "Hello",
						},
					},
				},
				{
					opcode: "rmlstorageg",
					blockType: Scratch.BlockType.COMMAND,
					text: "公共项目存储 [key]",
					arguments: {
						key: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "Hello",
						},
					},
				},
				'---',
				{
					blockType: Scratch.BlockType.LABEL,
					text: '刷新后生效'
				},
				{
					opcode: "todark",
					blockType: Scratch.BlockType.COMMAND,
					text: "切换为黑暗模式",
					arguments: {},
				},
				{
					opcode: "tolight",
					blockType: Scratch.BlockType.COMMAND,
					text: "切换为明亮模式",
					arguments: {},
				},
			],
		};
	}

	savelstorage(args) {
		// 保存至本地存储
		localStorage.setItem(
			"sls_" + workinfo["id"].toString() + "_" + args.key,
			args.text
		);
	}

	getlstorage(args) {
		// 获取本地存储
		return localStorage.getItem(
			"sls_" + workinfo["id"].toString() + "_" + args.key
		);
	}

	rmlstorage(args) {
		// 删除本地存储
		localStorage.removeItem(
			"sls_" + workinfo["id"].toString() + "_" + args.key
		);
	}

	savelstorageg(args) {
		// 保存至本地存储
		localStorage.setItem("sls_" + args.key, args.text);
	}

	getlstorageg(args) {
		// 获取本地存储
		return localStorage.getItem("sls_" + args.key);
	}

	rmlstorageg(args) {
		// 删除本地存储
		localStorage.removeItem("sls_" + args.key);
	}

	warns(args) {
		// 注意事项
		mdui.alert(
			"1. 所有保存的本地存储数据均可被修改/获取，请勿将后端数据(例如账户信息等)存储至本地存储。<br>2. 为防止冲突，保存的项目型本地存储数据键值格式为 'sls_<项目id>_<输入键值>，公共本地存储数据键值格式为 'sls_<输入键值>''。<br>3. 这是一个开源项目，Github 链接 https://www.github.com/ruizesun/slocalstorage/。"
		);
	}

	todark(args) {
		// 切换为黑暗模式
		localStorage.setItem("tw:theme", "dark");
	}
	tolight(args) {
		// 切换为明亮模式
		localStorage.setItem("tw:theme", "light");
	}
}

Scratch.extensions.register(new sLocalStorage());
