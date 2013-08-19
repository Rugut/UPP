Ext.require(['Данные.Документы.ПланЗакупок'], function () 
{
	Ext.define('Документы.ПланЗакупок.ФормаФормированиеЗаказовПоставщикам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Формирование заказов поставщикам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:624px;height:439px;',
			height: 439,width: 624,
			items:
			[
				{
					title:'Потребности',
					items:
					[
		{
			id: 'ТабличноеПолеЗакупки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:' Поставщик. Номенклатура.',
					width:'153',
					dataIndex:'ПоставщикНоменклатура',
					flex:1,
				},
				{
					text:' Характеристика',
					width:'100',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:' Цена',
					width:'100',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:' Требуемое кол.',
					width:'100',
					dataIndex:'ТребуемоеКоличество',
					flex:1,
				},
				{
					text:' Заказанное кол.',
					width:'100',
					dataIndex:'ЗаказанноеКоличество',
					flex:1,
				},
				{
					text:' Заказать кол.',
					width:'100',
					dataIndex:'ЗаказатьКоличество',
					flex:1,
				},
				{
					text:' Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланЗакупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПоставщикНоменклатура',
					},
					{
						name:'Характеристика',
					},
					{
						name:'Цена',
					},
					{
						name:'ТребуемоеКоличество',
					},
					{
						name:'ЗаказанноеКоличество',
					},
					{
						name:'ЗаказатьКоличество',
					},
					{
						name:'Заказ',
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
						var грид = Ext.getCmp('ТабличноеПолеЗакупки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПланЗакупок.ФормаФормированиеЗаказовПоставщикамСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланЗакупок.ФормаФормированиеЗаказовПоставщикамСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
					]
				},
				{
					title:'Заказы поставщикам',
					items:
					[
		{
			id: 'СформированныеДокументы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ДокументПроведен',
					flex:1,
				},
				{
					text:'Документ',
					width:'220',
					dataIndex:'Документ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланЗакупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ДокументПроведен',
					},
					{
						name:'Документ',
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
						var грид = Ext.getCmp('СформированныеДокументы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПланЗакупок.ФормаФормированиеЗаказовПоставщикамСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланЗакупок.ФормаФормированиеЗаказовПоставщикамСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Установить/Снять пометку на удаление',
				},
				{
					text:'Удалить непосредственно',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'',
				},
			]
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
			style: 'position:absolute;left:0px;top:455px;width:640px;height:25px;',
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});