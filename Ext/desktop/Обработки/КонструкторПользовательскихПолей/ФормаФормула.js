Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаФормула',
	{
	extend: 'Ext.window.Window',
	height: 350,width: 640,
	iconCls: 'bogus',
	title: 'Пользовательское поле ""Формула""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:325px;width:640px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:7px;width:234px;height:310px;',
			height: 310,width: 234,
			columns:
			[
				{
					text:'Заголовок',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:341px;top:7px;width:291px;height:19px;',
		},
	]
});