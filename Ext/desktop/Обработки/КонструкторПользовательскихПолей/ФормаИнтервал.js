Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаИнтервал',
	{
	extend: 'Ext.window.Window',
	height: 136,width: 356,
	iconCls: 'bogus',
	title: 'Конструктор пользовательского поля',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:111px;width:356px;height:25px;',
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
			style: 'position:absolute;left:119px;top:8px;width:203px;height:19px;',
		},
	]
});