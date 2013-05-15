Ext.define('Документы.АктуализацияБюджетов.ФормаПереносТранзакций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:626px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перенос транзакций на следующие периоды',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:610px;height:279px;',
			height: 279,width: 610,
			columns:
			[
				{
					text:'N',
					width:'21',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Переносить транзакцию',
					width:'28',
					dataIndex:'ПереноситьТранзакцию',
					flex:1,
				},
				{
					text:'Установка периода',
					width:'115',
					dataIndex:'УстановкаПериода',
					flex:1,
				},
				{
					text:'Период',
					width:'118',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'147',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Валюта',
					width:'100',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'ЦФО',
					width:'100',
					dataIndex:'ЦФО',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'89',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Сумма в валюте',
					width:'89',
					dataIndex:'СуммаВал',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АктуализацияБюджетов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ПереноситьТранзакцию',
					},
					{
						name:'УстановкаПериода',
					},
					{
						name:'Период',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЦФО',
					},
					{
						name:'Проект',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Количество',
					},
					{
						name:'СуммаВал',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:626px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:626px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:610px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
				{
					text:'Заполнить',
				},
			]
		},
	]
});