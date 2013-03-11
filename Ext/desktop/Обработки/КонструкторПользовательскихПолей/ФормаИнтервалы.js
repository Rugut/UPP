Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаИнтервалы',
	{
	extend: 'Ext.window.Window',
	height: 414,width: 307,
	iconCls: 'bogus',
	title: 'Конструктор пользовательского поля',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:389px;width:307px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:32px;width:203px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:291px;height:284px;',
			height: 284,width: 291,
			columns:
			[
				{
					text:'Граница',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:72px;width:291px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Добавить',
				},
				{
					text:'Очистить',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Значение',
			style: 'position:absolute;left:96px;top:8px;width:203px;height:19px;',
		},
	]
});