Ext.define('Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оплаты от покупателей платежными картами',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
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
					text:'Валюта',
					width:'60',
				},
				{
					text:'Плательщик',
					width:'120',
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
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'142',
				},
				{
					text:'Способ заполнения',
					width:'148',
				},
				{
					text:'Номер чека ККМ',
					width:'120',
				},
				{
					text:'Эквайрер',
					width:'106',
				},
				{
					text:'Договор эквайринга',
					width:'169',
				},
				{
					text:'Договор расчетов по эквайрингу',
					width:'100',
				},
				{
					text:'Счет учета расчетов с эквайером',
					width:'89',
				},
				{
					text:'Вид оплаты',
					width:'121',
				},
				{
					text:'% торговой уступки',
					width:'109',
				},
				{
					text:'Сумма торговой уступки',
					width:'132',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Выбрать',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});