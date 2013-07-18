Ext.require(['Данные.Обработки.РегистрацияСчетовФактурНаАванс'], function () 
{
	Ext.define('Обработки.РегистрацияСчетовФактурНаАванс.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация счетов-фактур на аванс',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:60px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:70px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:152px;top:33px;width:16px;height:19px;text-align:right;',
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
			style: 'position:absolute;left:171px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:253px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:293px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 355,
			height: 19,
			style: 'position:absolute;left:373px;top:33px;width:355px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Список',
			style: 'position:absolute;left:8px;top:100px;width:720px;height:16px;',
		},
		{
			id: 'Список',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:140px;width:720px;height:280px;',
			height: 280,width: 720,
			columns:
			[
				{
					text:'N',
					width:'28',
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
					text:'Договор',
					width:'100',
					dataIndex:'Договор',
					flex:1,
				},
				{
					text:'Сумма аванса',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Ставка НДС',
					width:'100',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'100',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'100',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Счет на оплату',
					width:'120',
					dataIndex:'СчетНаОплату',
					flex:1,
				},
				{
					text:'Дата',
					width:'100',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Валюта документа',
					width:'100',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Валютная сумма',
					width:'100',
					dataIndex:'ВалютнаяСумма',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияСчетовФактурНаАванс/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'Договор',
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
						name:'СчетНаОплату',
					},
					{
						name:'Дата',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ВалютнаяСумма',
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
						Ext.require(['Справочники.РегистрацияСчетовФактурНаАванс.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегистрацияСчетовФактурНаАванс.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокРегистрацииСчетовФактурНаАванс',
			text: 'Регистрировать счета-фактуры всегда при получении аванса',
			style: 'position:absolute;left:8px;top:58px;width:720px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокНумерацииСчетовФактурНаАванс',
			text: 'Надпись порядок нумерации счетов фактур на аванс',
			style: 'position:absolute;left:8px;top:79px;width:720px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
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
			style: 'position:absolute;left:0px;top:428px;width:736px;height:25px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:116px;width:720px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
	]
	});
});