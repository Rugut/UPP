Ext.define('Документы.ДенежныйЧек.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:760px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Денежные чеки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:744px;height:380px;',
			height: 380,width: 744,
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
					text:'Организация',
					width:'120',
				},
				{
					text:'Счет организации',
					width:'120',
				},
				{
					text:'Касса',
					width:'120',
				},
				{
					text:'Валюта ',
					width:'60',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Комментарий',
					width:'100',
				},
				{
					text:'Оплачено',
					width:'60',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:760px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
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
			]
		},
	]
});