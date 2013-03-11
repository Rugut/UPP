Ext.define('Обработки.ТОНастройка.ФормаОбновленияОбработок',
	{
	extend: 'Ext.window.Window',
	height: 553,width: 981,
	iconCls: 'bogus',
	title: 'Обновление обработок обслуживания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:981px;height:25px;',
			items:
			[
				{
					text:'СнятьВсе',
				},
				{
					text:'ОбновитьСписокОбработокССайта',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВыбратьВсе',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:528px;width:981px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:965px;height:248px;',
			height: 248,width: 965,
			columns:
			[
				{
					text:'Обновить',
				},
				{
					text:'ИмяОбработкиОбслуживания',
				},
				{
					text:'ТекущееНаименование',
				},
				{
					text:'НовоеНаименование',
				},
				{
					text:'ТекущаяВерсия',
				},
				{
					text:'НоваяВерсия',
				},
				{
					text:'ТекущаяВерсияAPI',
				},
				{
					text:'НоваяВерсияAPI',
				},
				{
					text:'Подсказка',
				},
			]
		},
	]
});