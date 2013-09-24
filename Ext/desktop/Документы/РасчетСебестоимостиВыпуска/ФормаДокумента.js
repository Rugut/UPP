Ext.require(['Данные.Документы.РасчетСебестоимостиВыпуска'], function () 
{
	Ext.define('Документы.РасчетСебестоимостиВыпуска.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:363px;height:464px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Расчет себестоимости',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:363px;height:25px;',
			width: 363,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:187px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:107px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:207px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:109px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 248,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:109px;width:248px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:412px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 265,
			height: 19,
			style: 'position:absolute;left:90px;top:412px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Месяц расчета:',
			style: 'position:absolute;left:8px;top:58px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ПредставлениеПериодаРегистрации',
			width: 220,
			height: 19,
			style: 'position:absolute;left:107px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:173px;width:347px;height:233px;',
			height: 233,width: 347,
			items:
			[
				{
					items:
					[
		{
			id: 'ВыполняемыеДействия',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:333px;height:177px;',
			height: 177,width: 333,
			columns:
			[
				{
					text:'Порядок',
					width:'48',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Выполняемое действие',
					width:'243',
					dataIndex:'ВыполняемоеДействие',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетСебестоимостиВыпуска/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВыполняемоеДействие',
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
						var грид = Ext.getCmp('ВыполняемыеДействия');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:333px;height:24px;',
			width: 333,
			height: 24,
			items:
			[
				{
					text:'Список действий',
					tooltip:'Заполнить выполняемые действия',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 250,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:89px;top:6px;width:250px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Распределение продукции и затрат по переделам',
			style: 'position:absolute;left:6px;top:31px;width:333px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать общепроизводственные расходы при распределении по переделам',
			style: 'position:absolute;left:6px;top:47px;width:333px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:83px;width:347px;height:19px;',
			height: 19,width: 347,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчетеРасширеннаяАналитика',
			text: 'Отразить в:',
			style: 'position:absolute;left:0px;top:0px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:99px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'бух. и нал. учете',
			style: 'position:absolute;left:168px;top:0px;width:157px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:82px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:151px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:220px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'МСФО',
			style: 'position:absolute;left:289px;top:0px;width:57px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНастройкаЗакрытияМесяца',
			text: 'Настройка закрытия месяца:',
			style: 'position:absolute;left:8px;top:137px;width:94px;height:30px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'НастройкаЗакрытияМесяца.Представление',
			width: 248,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:137px;width:248px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РасчетСебестоимостиВыпуска.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:439px;width:363px;height:25px;',
			width: 363,
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