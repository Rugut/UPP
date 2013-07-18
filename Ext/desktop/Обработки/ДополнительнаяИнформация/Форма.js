Ext.require(['Данные.Обработки.ДополнительнаяИнформация'], function () 
{
	Ext.define('Обработки.ДополнительнаяИнформация.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:730px;height:554px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Информация',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:529px;width:730px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать при начале работы',
			style: 'position:absolute;left:12px;top:534px;width:191px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:730px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
			]
		},
	]
	});
});