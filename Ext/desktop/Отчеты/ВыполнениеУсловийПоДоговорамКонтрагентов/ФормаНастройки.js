Ext.require(['Данные.Отчеты.ВыполнениеУсловийПоДоговорамКонтрагентов'], function () 
{
	Ext.define('Отчеты.ВыполнениеУсловийПоДоговорамКонтрагентов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:311px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка Выполнение условий по договорам взаиморасчетов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:270px;',
			height: 270,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Группировки',
			style: 'position:absolute;left:6px;top:57px;width:460px;height:16px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
			style: 'position:absolute;left:64px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 80,
			height: 19,
			style: 'position:absolute;left:164px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент',
			style: 'position:absolute;left:12px;top:131px;width:80px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договор контрагента',
			style: 'position:absolute;left:12px;top:151px;width:136px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Документ условий',
			style: 'position:absolute;left:12px;top:171px;width:116px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура условий',
			style: 'position:absolute;left:12px;top:191px;width:140px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Документы выполнения условий',
			style: 'position:absolute;left:12px;top:211px;width:192px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:6px;top:29px;width:162px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'УстановитьФлажки',
			text: 'Установить все',
			style: 'position:absolute;left:12px;top:78px;width:120px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'СнятьФлажки',
			text: 'Сбросить все',
			style: 'position:absolute;left:138px;top:78px;width:120px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:246px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Основной менеджер покупателя',
			style: 'position:absolute;left:12px;top:111px;width:188px;height:15px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'240',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'120',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'120',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыполнениеУсловийПоДоговорамКонтрагентов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыполнениеУсловийПоДоговорамКонтрагентов.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыполнениеУсловийПоДоговорамКонтрагентов.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:56px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:286px;width:490px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});