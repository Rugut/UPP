Ext.define('Обработки.ЗакрытиеКассовойСмены.ОтчетКассовойСменыБезГашения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:314px;height:93px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет кассовой смены без гашения',
	
	items:
	[{
		xtype: 'form',
		items:
		[
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
			style: 'position:absolute;left:0px;top:0px;width:314px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:68px;width:314px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Снять X-отчет ',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});