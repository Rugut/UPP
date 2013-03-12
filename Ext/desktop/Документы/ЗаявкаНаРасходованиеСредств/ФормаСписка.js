Ext.define('Документы.ЗаявкаНаРасходованиеСредств.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявки на расходование средств',
	
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
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Дата расхода',
					width:'80',
				},
				{
					text:'Вид операции',
					width:'120',
				},
				{
					text:'Счет, касса',
					width:'120',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Состояние',
					width:'120',
				},
				{
					text:'ЦФО',
					width:'129',
				},
				{
					text:'Ответственный',
					width:'137',
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
					text:'Файлы1',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				'-',
			]
		},
	]
});