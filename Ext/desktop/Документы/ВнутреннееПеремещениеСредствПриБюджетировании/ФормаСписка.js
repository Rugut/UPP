Ext.define('Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Внутренние перемещения средств при бюджетировании',
	
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
					text:'Период',
					width:'80',
				},
				{
					text:'Сценарий',
					width:'120',
				},
				{
					text:'Статья оборотов',
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
					text:'ЦФО',
					width:'120',
				},
				{
					text:'ЦФО - приемник',
					width:'163',
				},
				{
					text:'Проект',
					width:'137',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Состояние',
					width:'120',
				},
				{
					text:'Ответственный',
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
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				{
					text:'',
				},
			]
		},
	]
});