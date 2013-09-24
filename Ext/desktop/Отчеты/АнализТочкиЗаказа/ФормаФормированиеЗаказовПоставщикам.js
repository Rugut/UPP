Ext.require(['Данные.Отчеты.АнализТочкиЗаказа'], function () 
{
	Ext.define('Отчеты.АнализТочкиЗаказа.ФормаФормированиеЗаказовПоставщикам',
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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:624px;height:439px;',
			height: 439,width: 624,
			items:
			[
				{
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
					text:' Склад. Поставщик. Номенклатура.',
					width:'153',
					dataIndex:'СкладПоставщикНоменклатура',
					flex:1,
				},
				{
					text:' Характеристика',
					width:'100',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:' Рекомендуемое кол.',
					width:'120',
					dataIndex:'РекомендуемоеКоличество',
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
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнализТочкиЗаказа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'СкладПоставщикНоменклатура',
					},
					{
						name:'Характеристика',
					},
					{
						name:'РекомендуемоеКоличество',
					},
					{
						name:'ЗаказанноеКоличество',
					},
					{
						name:'ЗаказатьКоличество',
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
						Ext.require(['Справочники.АнализТочкиЗаказа.ФормаФормированиеЗаказовПоставщикамСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АнализТочкиЗаказа.ФормаФормированиеЗаказовПоставщикамСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:24px;',
			width: 610,
			height: 24,
			items:
			[
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'c4f29e0-d168-4fe0-8e64-e982fabf259',
					iconCls:'x-Refresh',
				},
			]
		},
					]
				},
				{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнализТочкиЗаказа/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.АнализТочкиЗаказа.ФормаФормированиеЗаказовПоставщикамСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АнализТочкиЗаказа.ФормаФормированиеЗаказовПоставщикамСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:24px;',
			width: 610,
			height: 24,
			items:
			[
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'Провести отмеченные документы',
				},
				{
					text:'Установить/Снять пометку на удаление',
					tooltip:'Установить/Снять пометку на удаление',
				},
				{
					text:'Удалить непосредственно',
					tooltip:'Удалить непосредственно',
				},
				'-',
				{
					text:'Печать',
					tooltip:'Печать отмеченных документов',
				},
				'-',
				{
					text:'',
					tooltip:'c4f29e0-d168-4fe0-8e64-e982fabf259',
					iconCls:'x-Refresh',
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
			width: 640,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});