Ext.define('Обработки.КалендарныйПланЗакупок.ФормаОтображенияЗаказовПоставщикам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:748px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Поступление',
					width:'120',
				},
				{
					text:'Оплата',
					width:'120',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Валюта',
					width:'60',
				},
			]
		},
	]
});