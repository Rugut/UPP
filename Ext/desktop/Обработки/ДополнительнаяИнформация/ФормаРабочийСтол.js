Ext.require(['Данные.Обработки.ДополнительнаяИнформация'], function () 
{
	Ext.define('Обработки.ДополнительнаяИнформация.ФормаРабочийСтол',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Дополнительная информация',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			width: 400,
			height: 25,
			items:
			[
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать при начале работы программы',
			style: 'position:absolute;left:133px;top:4px;width:241px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});