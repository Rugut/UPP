Ext.define('Обработки.РегистрацияСчетовФактурНаСуммовыеРазницы.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:390px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация счетов-фактур на суммовые разницы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			items:
			[
				'-',
				{
					text:'Список счетов-фактур (выд.)',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:365px;width:736px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:70px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:152px;top:33px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:171px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:253px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:76px;width:720px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:293px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:373px;top:33px;width:355px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:105px;width:720px;height:252px;',
			height: 252,width: 720,
			columns:
			[
				{
					text:'N',
					width:'29',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'СФсформирован',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Сумма',
					width:'86',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Ставка НДС',
					width:'80',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'80',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'120',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'101',
					dataIndex:'СчетФактура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияСчетовФактурНаСуммовыеРазницы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'СФсформирован',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'ДокументОснование',
					},
					{
						name:'Дата',
					},
					{
						name:'СчетФактура',
					},
				]
			},
		},
	]
});