Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РезультатОнлайнПроверки',
	{
	extend: 'Ext.window.Window',
	height: 656,width: 863,
	iconCls: 'bogus',
	title: 'Результат проверки отчета ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:631px;width:863px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:28px;width:847px;height:200px;',
			height: 200,width: 847,
			items:
			[
				{
					title:'СтраницаТекст',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеТекст',
			style: 'position:absolute;left:0px;top:0px;width:847px;height:200px;',
		},
					]
				},
				{
					title:'СтраницаXML',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:234px;width:847px;height:389px;',
			height: 389,width: 847,
			items:
			[
				{
					title:'СтраницаTXT',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Протокол',
			style: 'position:absolute;left:0px;top:20px;width:847px;height:369px;',
		},
					]
				},
				{
					title:'СтраницаHTML',
					items:
					[
					]
				},
			]
		},
	]
});