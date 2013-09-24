Ext.require(['Данные.Обработки.ФормированиеЦен'], function () 
{
	Ext.define('Обработки.ФормированиеЦен.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:331px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Формирование цен',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:34px;width:484px;height:24px;',
			width: 484,
			height: 24,
			items:
			[
				{
					text:'Установить флажки',
					tooltip:'Установить флажки',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять флажки',
				},
			]
		},
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:58px;width:656px;height:220px;',
			height: 220,width: 656,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'Номер строки',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'144',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'102',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Цена базовая',
					width:'84',
					dataIndex:'ЦенаБазовая',
					flex:1,
				},
				{
					text:'Валюта базовая',
					width:'96',
					dataIndex:'ВалютаБазовая',
					flex:1,
				},
				{
					text:'Способ расчета',
					width:'136',
					dataIndex:'СпособРасчетаЦены',
					flex:1,
				},
				{
					text:'% скидки (наценки)',
					width:'45',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'Цена',
					width:'75',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Валюта',
					width:'77',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'55',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЦен/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Номер строки',
					},
					{
						name:'Пометка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ЦенаБазовая',
					},
					{
						name:'ВалютаБазовая',
					},
					{
						name:'СпособРасчетаЦены',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'Цена',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЕдиницаИзмерения',
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
						var грид = Ext.getCmp('Товары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЦен.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЦен.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пересчитывать цену при изменении других реквизитов',
			style: 'position:absolute;left:6px;top:283px;width:307px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:6px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаВеличиныИзменения',
			style: 'position:absolute;left:464px;top:6px;width:48px;height:19px;',
			width: 48,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:514px;top:6px;width:62px;height:19px;',
			width: 62,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'КнопкаВыполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:582px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаВариантаЗачения',
			width: 200,
			height: 19,
			style: 'position:absolute;left:228px;top:6px;width:200px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:430px;top:6px;width:32px;height:19px;',
			width: 32,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьДатаЦен',
			text: 'Дата чтения цен:',
			style: 'position:absolute;left:492px;top:37px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаЦен',
			width: 80,
			height: 19,
			style: 'position:absolute;left:582px;top:37px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:306px;width:670px;height:25px;',
			width: 670,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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
		{
			xtype: 'checkbox',
			boxLabel: 'Подставлять валюту из диапазона',
			style: 'position:absolute;left:466px;top:283px;width:196px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});