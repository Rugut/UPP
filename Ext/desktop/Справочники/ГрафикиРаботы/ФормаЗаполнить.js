Ext.define('Справочники.ГрафикиРаботы.ФормаЗаполнить',
	{
	extend: 'Ext.window.Window',
	height: 411,width: 561,
	iconCls: 'bogus',
	title: 'Помощник заполнения графика',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:386px;width:561px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Назад',
				},
				{
					text:'Действие',
				},
				{
					text:'Далее',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:190px;top:0px;width:365px;height:386px;',
			height: 386,width: 365,
			items:
			[
				{
					title:'Страница1',
				},
				{
					title:'Страница2',
				},
				{
					title:'Страница3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:387px;width:561px;height:24px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:12px;width:181px;height:374px;',
			height: 374,width: 181,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});