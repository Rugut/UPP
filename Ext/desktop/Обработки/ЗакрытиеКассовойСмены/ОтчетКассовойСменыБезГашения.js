Ext.require(['Данные.Обработки.ЗакрытиеКассовойСмены'], function () 
{
	Ext.define('Обработки.ЗакрытиеКассовойСмены.ОтчетКассовойСменыБезГашения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:314px;height:93px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет кассовой смены без гашения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:314px;height:25px;',
			width: 314,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: 'Снятие  на фискальном регистраторе отчета кассовой смены без гашения',
			style: 'position:absolute;left:8px;top:33px;width:298px;height:27px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:68px;width:314px;height:25px;',
			width: 314,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Снять X-отчет ',
					tooltip:'Снять отчет кассовой смены без гашения',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});