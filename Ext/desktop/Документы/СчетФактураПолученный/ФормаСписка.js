Ext.define('Документы.СчетФактураПолученный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:760px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счета-фактуры полученные',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:744px;height:380px;',
			height: 380,width: 744,
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
					text:'Контрагент',
					width:'112',
				},
				{
					text:'Вид счета-фактуры',
					width:'120',
				},
				{
					text:'Сумма',
					width:'84',
				},
				{
					text:'Валюта',
					width:'56',
				},
				{
					text:'Документ-основание',
					width:'120',
				},
				{
					text:'Номер вход. документа',
					width:'120',
				},
				{
					text:'Дата вход. документа',
					width:'105',
				},
				{
					text:'Исправление',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Состояние ЭД',
					width:'124',
				},
				{
					text:'с нашей стороны',
					width:'124',
				},
				{
					text:'со стороны другого участника',
					width:'124',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:760px;height:25px;',
			items:
			[
				{
					text:'Открыть актуальный электронный документ',
				},
				{
					text:'Перезаполнить данными из электронного документа',
				},
				'-',
				{
					text:'Список электронных документов',
				},
			]
		},
	]
});