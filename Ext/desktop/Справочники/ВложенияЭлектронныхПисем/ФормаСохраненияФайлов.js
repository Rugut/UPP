Ext.require(['Данные.Справочники.ВложенияЭлектронныхПисем'], function () 
{
	Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаСохраненияФайлов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:512px;height:100px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
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
			xtype: 'checkbox',
			boxLabel: 'Открыть каталог после сохранения',
			style: 'position:absolute;left:76px;top:52px;width:208px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:75px;width:512px;height:25px;',
			width: 512,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});