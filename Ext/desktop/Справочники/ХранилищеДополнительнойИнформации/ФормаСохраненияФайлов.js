Ext.require(['Данные.Справочники.ХранилищеДополнительнойИнформации'], function () 
{
	Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаСохраненияФайлов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:512px;height:104px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сохранить файлы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяКаталога',
			width: 428,
			height: 19,
			style: 'position:absolute;left:76px;top:8px;width:428px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяКаталога',
			text: 'Каталог:',
			style: 'position:absolute;left:8px;top:8px;width:64px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только чтение',
			style: 'position:absolute;left:76px;top:32px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'ОК',
			style: 'position:absolute;left:316px;top:74px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтмена',
			text: 'Отмена',
			style: 'position:absolute;left:412px;top:74px;width:92px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открыть каталог после сохранения',
			style: 'position:absolute;left:76px;top:52px;width:208px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});