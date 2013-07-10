Ext.define('Обработки.РегистрацияСчетовФактурНалоговогоАгента.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:741px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация счетов-фактур налогового агента',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:349px;top:33px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация',
			width: 293,
			height: 19,
			style: 'position:absolute;left:440px;top:33px;width:293px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоПериода',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:64px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонецПериода',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонецПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:165px;top:33px;width:80px;height:19px;',
		},
		{
			id: 'Список',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:725px;height:263px;',
			height: 263,width: 725,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'СчетФактураСформирован',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'1200',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'1200',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'1200',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Сумма',
					width:'1200',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'96',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'1200',
					dataIndex:'СуммаНДС',
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
					width:'1200',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияСчетовФактурНалоговогоАгента/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетФактураСформирован',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'ДокументОснование',
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
						name:'Дата',
					},
					{
						name:'СчетФактура',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Список');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма, руб:',
			style: 'position:absolute;left:529px;top:349px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Сумма',
			text: '1180,00',
			style: 'position:absolute;left:613px;top:349px;width:120px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:529px;top:373px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НДС',
			text: '180,00',
			style: 'position:absolute;left:613px;top:373px;width:120px;height:19px;text-align:right;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:725px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить по данным учета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:741px;height:25px;',
			dock: 'top',
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
			style: 'position:absolute;left:0px;top:400px;width:741px;height:25px;',
			dock: 'bottom',
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
	]
});