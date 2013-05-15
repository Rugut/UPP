Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типы цен номенклатуры контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:592px;height:280px;',
			height: 280,width: 592,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Валюта',
					width:'80',
					dataIndex:'ВалютаЦены',
					flex:1,
				},
				{
					text:'Включает НДС',
					width:'80',
					dataIndex:'ЦенаВключаетНДС',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'180',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Тип цены номенклатуры',
					width:'175',
					dataIndex:'ТипЦеныНоменклатуры',
					flex:1,
				},
				{
					text:'Описание типа цены номенклатуры контрагента',
					width:'100',
					dataIndex:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТипыЦенНоменклатурыКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВалютаЦены',
					},
					{
						name:'ЦенаВключаетНДС',
					},
					{
						name:'Комментарий',
					},
					{
						name:'ТипЦеныНоменклатуры',
					},
					{
						name:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});