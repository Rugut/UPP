Ext.define('Обработки.КалендарныйПланЗакупок.ФормаОтображенияЗаказовПоставщикам',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 748,
	iconCls: 'bogus',
	title: 'Заказы поставщикам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:748px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:732px;height:380px;',
			height: 380,width: 732,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'НомерЗаказа',
				},
				{
					text:'ДатаПоступления',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Сумма',
				},
				{
					text:'Валюта',
				},
			]
		},
	]
});