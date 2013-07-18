Ext.require(['Данные.Отчеты.ВзаиморасчетыСКомитентами'], function () 
{
	Ext.define('Отчеты.ВзаиморасчетыСКомитентами.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:399px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:6px;width:604px;height:360px;',
			height: 360,width: 604,
			items:
			[
				{
					title:'Основные параметры',
					items:
					[
		{
			id: 'Группировки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:73px;width:336px;height:261px;',
			height: 261,width: 336,
			columns:
			[
				{
					text:'Группировка',
					width:'158',
					dataIndex:'ПредставлениеГруппировки',
					flex:1,
				},
				{
					text:'Тип итога',
					width:'59',
					dataIndex:'ТипИтога',
					flex:1,
				},
				{
					text:'Дополнительные поля',
					width:'147',
					dataIndex:'ДополнительныеПоля',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВзаиморасчетыСКомитентами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ПредставлениеГруппировки',
					},
					{
						name:'ТипИтога',
					},
					{
						name:'ДополнительныеПоля',
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
						var грид = Ext.getCmp('Группировки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ВзаиморасчетыСКомитентами.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВзаиморасчетыСКомитентами.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Группировки строк',
			style: 'position:absolute;left:6px;top:33px;width:336px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:56px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:65px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:150px;top:6px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонца',
			width: 80,
			height: 19,
			style: 'position:absolute;left:171px;top:6px;width:80px;height:19px;',
		},
		{
			id: 'Показатели',
			xtype: 'grid',
			style: 'position:absolute;left:346px;top:73px;width:250px;height:261px;',
			height: 261,width: 250,
			columns:
			[
				{
					text:'',
					width:'23',
					dataIndex:'ИспользованиеПоказателя',
					flex:1,
				},
				{
					text:'Показатель',
					width:'176',
					dataIndex:'ПредставлениеПоказателя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВзаиморасчетыСКомитентами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ИспользованиеПоказателя',
					},
					{
						name:'ПредставлениеПоказателя',
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
						var грид = Ext.getCmp('Показатели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ВзаиморасчетыСКомитентами.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВзаиморасчетыСКомитентами.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Показатели',
			style: 'position:absolute;left:346px;top:33px;width:250px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:434px;top:9px;width:162px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:254px;top:6px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:396px;top:30px;width:200px;height:304px;',
		},
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:386px;height:304px;',
			height: 304,width: 386,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'103',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'76',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'162',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВзаиморасчетыСКомитентами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Поле',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ВзаиморасчетыСКомитентами.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВзаиморасчетыСКомитентами.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
			style: 'position:absolute;left:0px;top:374px;width:620px;height:25px;',
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
				},
			]
		},
	]
	});
});