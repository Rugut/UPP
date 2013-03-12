Ext.define('Документы.КорректировкаПоступления.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировки поступления',
	
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
					text:'Основание',
					width:'100',
				},
				{
					text:'Исправляемый документ поступления',
					width:'100',
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
					text:'Склад',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'116',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Номер вход. документа',
					width:'250',
				},
				{
					text:'Дата вход. документа',
					width:'105',
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
					text:'Дт/кт',
				},
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});