Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ПараметрыЗаполненияПлан',
	{
	extend: 'Ext.window.Window',
	height: 237,width: 314,
	iconCls: 'bogus',
	title: 'Настройка заполнения расшифровки платежа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:212px;width:314px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДляПодбора',
			style: 'position:absolute;left:126px;top:185px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:314px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});