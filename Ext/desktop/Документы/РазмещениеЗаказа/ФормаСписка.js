Ext.define('Документы.РазмещениеЗаказа.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Размещение заказа',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:604px;height:380px;',
			height: 380,width: 604,
			columns:
			[
				{
					text:' ',
					width:'32',
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
					text:'Заказ',
					width:'120',
				},
				{
					text:'Организация',
					width:'150',
				},
				{
					text:'Подразделение',
					width:'119',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});