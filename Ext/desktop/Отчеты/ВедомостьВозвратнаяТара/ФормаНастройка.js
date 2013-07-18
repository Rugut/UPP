Ext.require(['Данные.Отчеты.ВедомостьВозвратнаяТара'], function () 
{
	Ext.define('Отчеты.ВедомостьВозвратнаяТара.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:370px;height:311px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Лимиты возвратной тары',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:354px;height:270px;',
			height: 270,width: 354,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:8px;width:56px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:64px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:146px;top:8px;width:16px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:164px;top:8px;width:80px;height:19px;',
		},
		{
			id: 'Показатели',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:114px;width:340px;height:130px;',
			height: 130,width: 340,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ИспользованиеПоказателя',
					flex:1,
				},
				{
					text:'Показатель',
					width:'220',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВедомостьВозвратнаяТара/ВыбратьПоСсылке/100', timeout: 3},
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
						Ext.require(['Справочники.ВедомостьВозвратнаяТара.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВедомостьВозвратнаяТара.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Показатели',
			style: 'position:absolute;left:6px;top:74px;width:340px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать измерения',
			style: 'position:absolute;left:12px;top:53px;width:160px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:246px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры',
			style: 'position:absolute;left:6px;top:32px;width:340px;height:16px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			id: 'Группировки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:340px;height:220px;',
			height: 220,width: 340,
			columns:
			[
				{
					text:'Группировки строк',
					width:'120',
					dataIndex:'ПредставлениеГруппировки',
					flex:1,
				},
				{
					text:'Тип',
					width:'80',
					dataIndex:'ТипИтога',
					flex:1,
				},
				{
					text:'Дополнительные поля',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВедомостьВозвратнаяТара/ВыбратьПоСсылке/100', timeout: 3},
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
						Ext.require(['Справочники.ВедомостьВозвратнаяТара.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВедомостьВозвратнаяТара.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
			style: 'position:absolute;left:6px;top:24px;width:340px;height:220px;',
			height: 220,width: 340,
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
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВедомостьВозвратнаяТара/ВыбратьПоСсылке/100', timeout: 3},
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
						Ext.require(['Справочники.ВедомостьВозвратнаяТара.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВедомостьВозвратнаяТара.ФормаНастройкаСобытия");
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
			style: 'position:absolute;left:0px;top:286px;width:370px;height:25px;',
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