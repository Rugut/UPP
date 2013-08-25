Ext.require(['Данные.Обработки.МенеджерКонтактов'], function () 
{
	Ext.define('Обработки.МенеджерКонтактов.ФормаОткрытияВложений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:194px;height:76px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Открыть/сохранить вложение',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:51px;width:194px;height:25px;',
			width: 194,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Открыть файл',
			style: 'position:absolute;left:22px;top:8px;width:151px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сохранить файл на диске',
			style: 'position:absolute;left:22px;top:29px;width:151px;height:15px;',
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