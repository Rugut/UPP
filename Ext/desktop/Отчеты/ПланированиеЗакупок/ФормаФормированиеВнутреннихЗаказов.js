Ext.require(['Данные.Отчеты.ПланированиеЗакупок'], function () 
{
	Ext.define('Отчеты.ПланированиеЗакупок.ФормаФормированиеВнутреннихЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование внутренних заказов',
	
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
			id: 'ТабличноеПолеПотребности',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:' Склад. Номенклатура.',
					width:'153',
					dataIndex:'СкладНоменклатура',
					flex:1,
				},
				{
					text:' Характеристика',
					width:'100',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:' Требуемое кол.',
					width:'100',
					dataIndex:'ТребуемоеКоличество',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланированиеЗакупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'СкладНоменклатура',
					},
					{
						name:'Характеристика',
					},
					{
						name:'ТребуемоеКоличество',
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
						var грид = Ext.getCmp('ТабличноеПолеПотребности');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПланированиеЗакупок.ФормаФормированиеВнутреннихЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланированиеЗакупок.ФормаФормированиеВнутреннихЗаказовСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Внутренние заказы',
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
					dataIndex:'Проведен',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланированиеЗакупок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Проведен',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПланированиеЗакупок.ФормаФормированиеВнутреннихЗаказовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланированиеЗакупок.ФормаФормированиеВнутреннихЗаказовСобытия");
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