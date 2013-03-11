Ext.define('Документы.АктуализацияБюджетов.ФормаПереносТранзакций',
	{
	extend: 'Ext.window.Window',
	height: 370,width: 626,
	iconCls: 'bogus',
	title: 'Перенос транзакций на следующие периоды',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:626px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:626px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:610px;height:279px;',
			height: 279,width: 610,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ПереноситьТранзакцию',
				},
				{
					text:'УстановкаПериода',
				},
				{
					text:'Период',
				},
				{
					text:'СтатьяОборотов',
				},
				{
					text:'Валюта',
				},
				{
					text:'ЦФО',
				},
				{
					text:'Проект',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Количество',
				},
				{
					text:'СуммаВал',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:610px;height:25px;',
			items:
			[
				{
					text:'УстановитьВсе',
				},
				{
					text:'СнятьВсе',
				},
				{
					text:'Заполнить',
				},
			]
		},
	]
});