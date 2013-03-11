Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаНастройкиЗаполнения',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 810,
	iconCls: 'bogus',
	title: 'Настройка автоматического заполнения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:810px;height:25px;',
			items:
			[
				{
					text:'кнВидДвижения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:810px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:794px;height:351px;',
			height: 351,width: 794,
			items:
			[
				{
					title:'Поступления',
				},
				{
					title:'Платежи',
				},
			]
		},
	]
});