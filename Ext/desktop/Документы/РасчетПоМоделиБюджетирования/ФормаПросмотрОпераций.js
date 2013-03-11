Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаПросмотрОпераций',
	{
	extend: 'Ext.window.Window',
	height: 371,width: 653,
	iconCls: 'bogus',
	title: 'Сформированные бюджетные операции',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:653px;height:25px;',
			items:
			[
				{
					text:'Изменение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:653px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:637px;height:280px;',
			height: 280,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
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
					text:'Сумма',
				},
				{
					text:'ВлияющаяОперация',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:637px;height:25px;',
			height: 25,width: 637,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});