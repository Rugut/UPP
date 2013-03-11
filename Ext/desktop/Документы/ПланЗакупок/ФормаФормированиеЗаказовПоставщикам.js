Ext.define('Документы.ПланЗакупок.ФормаФормированиеЗаказовПоставщикам',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 640,
	iconCls: 'bogus',
	title: 'Формирование заказов поставщикам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:640px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:624px;height:439px;',
			height: 439,width: 624,
			items:
			[
				{
					title:'СтраницаПотребности',
				},
				{
					title:'ЗаказыПоставщикам',
				},
			]
		},
	]
});