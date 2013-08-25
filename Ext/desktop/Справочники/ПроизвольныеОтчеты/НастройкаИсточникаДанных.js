Ext.require(['Данные.Справочники.ПроизвольныеОтчеты'], function () 
{
	Ext.define('Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанных',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:359px;height:291px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка источника данных',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ПараметрыИсточникаДанных',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:343px;height:126px;',
			height: 126,width: 343,
			columns:
			[
				{
					text:'Параметр источника',
					width:'178',
					dataIndex:'Параметр',
					flex:1,
				},
				{
					text:'Параметр схемы',
					width:'135',
					dataIndex:'ПутьКДанным',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПроизвольныеОтчеты").data,
					fields: ['Ссылка','Родитель.Представление','Параметр','ПутьКДанным',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроизвольныеОтчеты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Параметр',
					},
					{
						name:'ПутьКДанным',
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
						var грид = Ext.getCmp('ПараметрыИсточникаДанных');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаборДанных',
			text: 'Набор данных:',
			style: 'position:absolute;left:8px;top:8px;width:85px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:8px;width:256px;height:19px;',
			width: 256,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьТипИсточникаДанныхОтчета',
			text: 'Тип источника:',
			style: 'position:absolute;left:8px;top:32px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:56px;width:343px;height:45px;',
			height: 45,width: 343,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИмяИсточника',
			text: 'Отчет:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяИсточника',
			width: 256,
			height: 19,
			style: 'position:absolute;left:87px;top:0px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройка',
			text: 'Настройка:',
			style: 'position:absolute;left:0px;top:24px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НастройкаОтчета',
			width: 256,
			height: 19,
			style: 'position:absolute;left:87px;top:24px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройка1',
			text: 'Настройка:',
			style: 'position:absolute;left:0px;top:24px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяИсточника1',
			text: 'Отчет:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СохраненнаяНастройка.Представление',
			width: 256,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:87px;top:24px;width:256px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПроизвольныйОтчет.Представление',
			width: 256,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:87px;top:0px;width:256px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОбработка',
			text: 'Обработка:',
			style: 'position:absolute;left:0px;top:0px;width:85px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВнешняяОбработка.Представление',
			width: 256,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:87px;top:0px;width:256px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанныхСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Параметры',
			style: 'position:absolute;left:8px;top:111px;width:343px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:32px;width:256px;height:19px;',
			width: 256,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:359px;height:25px;',
			width: 359,
			height: 25,
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
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});