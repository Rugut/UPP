Ext.define('Документы.СчетНаОплатуПокупателю.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счет на оплату покупателю',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
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
					text:'Сумма',
					width:'80',
				},
				{
					text:'Дата оплаты',
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
					width:'105',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'113',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Печать по умолчанию',
				},
				{
					text:'В файл',
				},
				'-',
				{
					text:'Отправить по эл. почте',
				},
				{
					text:'Отправить по эл. почте',
				},
				{
					text:'Выгрузить в файл',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
	]
});