Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:705px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планы движения денежных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:689px;height:259px;',
			height: 259,width: 689,
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
					text:'Пометка удаления',
					width:'70',
				},
				{
					text:'Сценарий',
					width:'350',
				},
				{
					text:'Валюта документа',
					width:'70',
				},
				{
					text:'Дата планирования',
					width:'84',
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
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:705px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
			]
		},
	]
});