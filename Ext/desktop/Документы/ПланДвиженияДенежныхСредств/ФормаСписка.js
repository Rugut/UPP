Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:669px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планы движения денежных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:653px;height:259px;',
			height: 259,width: 653,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'140',
				},
				{
					text:'Номер',
					width:'35',
				},
				{
					text:'Сценарий',
					width:'159',
				},
				{
					text:'Валюта документа',
					width:'124',
				},
				{
					text:'Дата планирования',
					width:'221',
				},
				{
					text:'Ответственный',
					width:'350',
				},
				{
					text:'Подразделение',
					width:'350',
				},
				{
					text:'Вид денежных средств',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:669px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
	]
});