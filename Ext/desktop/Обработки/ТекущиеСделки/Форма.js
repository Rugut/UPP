Ext.define('Обработки.ТекущиеСделки.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Текущие сделки',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВыбКонтрагент',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:764px;height:363px;',
			height: 363,width: 764,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'73',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'82',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'114',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'99',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'95',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Сумма (остаток)',
					width:'103',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма сделки',
					width:'110',
					dataIndex:'ОбщаяСуммаСделки',
					flex:1,
				},
				{
					text:'Валюта',
					width:'49',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Договор',
					width:'102',
					dataIndex:'Договор',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТекущиеСделки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Сумма',
					},
					{
						name:'ОбщаяСуммаСделки',
					},
					{
						name:'Валюта',
					},
					{
						name:'Договор',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Настроить интервал',
				},
				'-',
				{
					text:'Настроить отбор',
				},
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Снять отбор',
				},
				'-',
				'-',
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Анализ сделки',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Настроить интервал',
				},
				'-',
				{
					text:'Настроить отбор',
				},
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Снять отбор',
				},
				'-',
				'-',
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});