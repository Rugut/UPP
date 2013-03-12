Ext.define('Документы.ЗаказПоставщику.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:760px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заказы поставщикам',
	
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
					text:'Вид операции',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:760px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});