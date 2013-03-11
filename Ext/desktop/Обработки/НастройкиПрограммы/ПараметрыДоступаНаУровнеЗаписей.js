Ext.define('Обработки.НастройкиПрограммы.ПараметрыДоступаНаУровнеЗаписей',
	{
	extend: 'Ext.window.Window',
	height: 335,width: 333,
	iconCls: 'bogus',
	title: 'Параметры доступа на уровне записей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:333px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеЗаписать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:317px;height:251px;',
			height: 251,width: 317,
			columns:
			[
				{
					text:'ВидОбъектаДоступа',
				},
			]
		},
	]
});