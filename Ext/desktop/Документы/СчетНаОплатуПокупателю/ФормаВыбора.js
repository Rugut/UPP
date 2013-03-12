Ext.define('Документы.СчетНаОплатуПокупателю.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счет на оплату покупателю',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:624px;height:380px;',
			height: 380,width: 624,
			columns:
			[
				{
					text:'',
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
					text:'Сумма',
					width:'80',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});