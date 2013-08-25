Ext.require(['Данные.Обработки.ПодборПараметровРасшифровкиПлатежа'], function () 
{
	Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ФормаПодбораПланируемыхДвижений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:281px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подбор документов планирования движения денежных средств',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:29px;width:306px;height:24px;',
			width: 306,
			height: 24,
			items:
			[
				{
					text:'Выбрать',
				},
			]
		},
		{
			id: 'ПланируемыеДвижения',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:764px;height:220px;',
			height: 220,width: 764,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ планирования',
					width:'153',
					dataIndex:'ДокументПланирования',
					flex:1,
				},
				{
					text:'Сумма документа',
					width:'100',
					dataIndex:'СуммаДокумента',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'126',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'172',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Дата движения',
					width:'101',
					dataIndex:'ДатаДвижения',
					flex:1,
				},
				{
					text:'Сумма платежа',
					width:'112',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
				{
					text:'Валюта счета',
					width:'100',
					dataIndex:'ВалютаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс счета',
					width:'125',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма счета',
					width:'107',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Проект',
					width:'79',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'172',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
					flex:1,
				},
				{
					text:'План. курс счета',
					width:'100',
					dataIndex:'КурсВзаиморасчетовПлан',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборПараметровРасшифровкиПлатежа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументПланирования',
					},
					{
						name:'СуммаДокумента',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'ДатаДвижения',
					},
					{
						name:'СуммаПлатежа',
					},
					{
						name:'ВалютаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'Проект',
					},
					{
						name:'СтатьяДвиженияДенежныхСредств',
					},
					{
						name:'КурсВзаиморасчетовПлан',
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
						var грид = Ext.getCmp('ПланируемыеДвижения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодборПараметровРасшифровкиПлатежа.ФормаПодбораПланируемыхДвиженийСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборПараметровРасшифровкиПлатежа.ФормаПодбораПланируемыхДвиженийСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Документы планирования',
			style: 'position:absolute;left:8px;top:8px;width:764px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьВыбрано',
			text: 'Всего выбрано:',
			style: 'position:absolute;left:491px;top:30px;width:281px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});