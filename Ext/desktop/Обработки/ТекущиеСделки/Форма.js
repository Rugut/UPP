Ext.require(['Данные.Обработки.ТекущиеСделки'], function () 
{
	Ext.define('Обработки.ТекущиеСделки.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Текущие сделки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Настроить интервал',
					tooltip:'Настроить интервал',
				},
				'-',
				{
					text:'Настроить отбор',
					tooltip:'Настроить отбор',
				},
				{
					text:'Отбор по текущему значению',
					tooltip:'Отбор по текущему значению',
				},
				{
					text:'Снять отбор',
					tooltip:'Снять отбор',
				},
				'-',
				'-',
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить',
				},
				'-',
				{
					text:'Анализ сделки',
					tooltip:'Анализ сделки',
				},
				'-',
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
					]
				},
				'-',
				{
					text:'Настроить интервал',
					tooltip:'Настроить интервал',
				},
				'-',
				{
					text:'Настроить отбор',
					tooltip:'Настроить отбор',
				},
				{
					text:'Отбор по текущему значению',
					tooltip:'Отбор по текущему значению',
				},
				{
					text:'Снять отбор',
					tooltip:'Снять отбор',
				},
				'-',
				'-',
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВыбКонтрагент',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			id: 'СделкиПредставление',
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
					width:'98',
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
					width:'102',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма сделки',
					width:'109',
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
					width:'101',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТекущиеСделки/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('СделкиПредставление');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТекущиеСделки.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТекущиеСделки.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});