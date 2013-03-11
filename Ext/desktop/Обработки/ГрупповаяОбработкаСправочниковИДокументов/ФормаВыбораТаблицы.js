Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораТаблицы',
	{
	extend: 'Ext.window.Window',
	height: 463,width: 344,
	iconCls: 'bogus',
	title: 'Обработка  Внешняя обработка2',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:438px;width:344px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:9px;width:328px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'УстановитьФлажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:328px;height:397px;',
			height: 397,width: 328,
			columns:
			[
				{
					text:'ПредставлениеТаблицы',
				},
				{
					text:'ИмяТаблицы',
				},
			]
		},
	]
});