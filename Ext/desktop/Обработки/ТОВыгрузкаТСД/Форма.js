Ext.require(['Данные.Обработки.ТОВыгрузкаТСД'], function () 
{
	Ext.define('Обработки.ТОВыгрузкаТСД.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выгрузка данных в ТСД',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:700px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			id: 'ПолеТовары',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:226px;width:684px;height:139px;',
			height: 139,width: 684,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Выгружать',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'220',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'250',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'120',
					dataIndex:'Штрихкод',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'250',
					dataIndex:'Серия',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Количество',
					width:'65',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'100',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОВыгрузкаТСД/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Выгружать',
					},
					{
						name:'Код',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Штрихкод',
					},
					{
						name:'Характеристика',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Артикул',
					},
					{
						name:'Серия',
					},
					{
						name:'Качество',
					},
					{
						name:'Склад',
					},
					{
						name:'Количество',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Цена',
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
						var грид = Ext.getCmp('ПолеТовары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТОВыгрузкаТСД.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОВыгрузкаТСД.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:201px;width:684px;height:24px;',
			items:
			[
				{
					text:'Выделить все',
				},
				{
					text:'Очистить выделение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
			]
		},
		{
			xtype: 'fieldset',
			title: 'Выгружаемые товары',
			style: 'position:absolute;left:8px;top:180px;width:684px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Отбор',
			style: 'position:absolute;left:8px;top:51px;width:684px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:71px;width:684px;height:107px;',
			height: 107,width: 684,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'На складе:',
			style: 'position:absolute;left:6px;top:6px;width:145px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:158px;top:6px;width:168px;height:20px;',
			width: 168,
			height: 20,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСклад',
			width: 342,
			height: 20,
			style: 'position:absolute;left:336px;top:6px;width:342px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Тип цен:',
			style: 'position:absolute;left:6px;top:31px;width:145px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:158px;top:31px;width:168px;height:20px;',
			width: 168,
			height: 20,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиТипЦен',
			width: 342,
			height: 20,
			style: 'position:absolute;left:336px;top:31px;width:342px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:6px;top:56px;width:145px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:158px;top:56px;width:168px;height:20px;',
			width: 168,
			height: 20,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиНоменклатура',
			width: 342,
			height: 20,
			style: 'position:absolute;left:336px;top:56px;width:342px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатурная группа:',
			style: 'position:absolute;left:6px;top:81px;width:145px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:158px;top:81px;width:168px;height:20px;',
			width: 168,
			height: 20,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиГруппа',
			width: 342,
			height: 20,
			style: 'position:absolute;left:336px;top:81px;width:342px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Терминал сбора данных:',
			style: 'position:absolute;left:8px;top:28px;width:128px;height:15px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:166px;top:28px;width:167px;height:19px;',
			width: 167,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
	]
	});
});