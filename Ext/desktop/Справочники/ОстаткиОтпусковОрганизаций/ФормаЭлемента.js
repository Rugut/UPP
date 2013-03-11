Ext.define('Справочники.ОстаткиОтпусковОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 346,
	iconCls: 'bogus',
	title: 'Остатки отпусков сотрудника',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:346px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:346px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:330px;height:315px;',
			height: 315,width: 330,
			items:
			[
				{
					title:'ОдинОтпуск',
				},
				{
					title:'НесколькоОтпусков',
				},
				{
					title:'ОтпускаСРабочимиГодами',
				},
			]
		},
	]
});