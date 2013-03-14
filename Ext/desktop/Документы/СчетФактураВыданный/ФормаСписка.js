Ext.define('Документы.СчетФактураВыданный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счета-фактуры выданные',
	
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
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Вид счета-фактуры',
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
				{
					text:'Документ-основание',
					width:'120',
				},
				{
					text:'Исправление',
					width:'80',
				},
				{
					text:'Выставлен',
					width:'80',
				},
				{
					text:'Организация',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
			]
		},
	]
});