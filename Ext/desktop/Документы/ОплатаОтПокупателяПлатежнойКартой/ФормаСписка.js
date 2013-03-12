Ext.define('Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оплаты от покупателей платежными картами',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'УУ',
					width:'20',
				},
				{
					text:'БУ',
					width:'20',
				},
				{
					text:'НУ',
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
					text:'Вид операции',
					width:'120',
				},
				{
					text:'Валюта документа',
					width:'70',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Основание',
					width:'0',
				},
				{
					text:'Приложение',
					width:'0',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Способ заполнения',
					width:'100',
				},
				{
					text:'Контрагент',
					width:'185',
				},
				{
					text:'Номер чека ККМ',
					width:'116',
				},
				{
					text:'Эквайрер',
					width:'100',
				},
				{
					text:'Договор эквайринга',
					width:'100',
				},
				{
					text:'Договор взаиморасчетов эквайрера',
					width:'100',
				},
				{
					text:'Счет учета расчетов с эквайером',
					width:'67',
				},
				{
					text:'Вид оплаты',
					width:'162',
				},
				{
					text:'% торговой уступки',
					width:'106',
				},
				{
					text:'Сумма торговой уступки',
					width:'134',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Чек',
				},
			]
		},
	]
});