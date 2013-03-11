Ext.define('Справочники.ОстаткиОтпусков.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 324,width: 288,
	iconCls: 'bogus',
	title: 'Остатки отпуска прошлых лет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:288px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:299px;width:288px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:272px;height:233px;',
			height: 233,width: 272,
			items:
			[
				{
					title:'ОдинОтпуск',
				},
				{
					title:'ОтпускаСРабочимиГодами',
				},
			]
		},
	]
});