Ext.require(['Данные.Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей'], function () 
{
	Ext.define('Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:656px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Установка типов цен по группам номенклатуры для покупателей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:98px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончания',
			text: 'по:',
			style: 'position:absolute;left:180px;top:81px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:198px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			width: 656,
			height: 25,
			items:
			[
			]
		},
		{
			id: 'НоменклатурныеЦеновыеГруппы',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:640px;height:178px;',
			height: 178,width: 640,
			columns:
			[
				{
					text:'№',
					width:'20',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатурная или ценовая группа',
					width:'208',
					dataIndex:'НоменклатурнаяЦеноваяГруппа',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'246',
					dataIndex:'ТипЦен',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НоменклатурнаяЦеноваяГруппа',
					},
					{
						name:'ТипЦен',
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
						var грид = Ext.getCmp('НоменклатурныеЦеновыеГруппы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:125px;width:640px;height:24px;',
			width: 640,
			height: 24,
			items:
			[
				'-',
				{
					text:'Подбор',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Список номенклатурных или ценовых групп и соответствующих типов цен',
			style: 'position:absolute;left:8px;top:105px;width:640px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:331px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 552,
			height: 19,
			style: 'position:absolute;left:96px;top:331px;width:552px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 552,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:354px;width:552px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:354px;width:88px;height:19px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:656px;height:25px;',
			width: 656,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать',
				},
				'-',
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
					iconCls:'x-SaveFile',
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