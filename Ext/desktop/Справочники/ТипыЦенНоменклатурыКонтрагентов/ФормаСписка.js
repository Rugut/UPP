Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:550px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типы цен номенклатуры контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:534px;height:280px;',
			height: 280,width: 534,
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
					text:'Контрагент',
					width:'176',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаЦены',
					flex:1,
				},
				{
					text:'Тип цены номенклатуры',
					width:'180',
					dataIndex:'ТипЦеныНоменклатуры',
					flex:1,
				},
				{
					text:'Включает НДС',
					width:'80',
					dataIndex:'ЦенаВключаетНДС',
					flex:1,
				},
				{
					text:'Описание',
					width:'220',
					dataIndex:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'220',
					dataIndex:'Комментарий',
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
						name:'Владелец',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВалютаЦены',
					},
					{
						name:'ТипЦеныНоменклатуры',
					},
					{
						name:'ЦенаВключаетНДС',
					},
					{
						name:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:550px;height:25px;',
			items:
			[
			]
		},
	]
});