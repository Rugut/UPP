Ext.require(['Данные.Документы.РеестрДСВ3'], function () 
{
	Ext.define('Документы.РеестрДСВ3.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:765px;height:498px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестр застрахованных лиц (форма ДСВ-3)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:446px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 663,
			height: 19,
			style: 'position:absolute;left:94px;top:446px;width:663px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:749px;height:41px;',
			height: 41,width: 749,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:749px;height:35px;',
			height: 35,width: 749,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:749px;height:123px;',
			height: 123,width: 749,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:105px;top:0px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрДСВ3.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрДСВ3.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрДСВ3.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрДСВ3.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:357px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Исполнитель.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:446px;top:25px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрДСВ3.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрДСВ3.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрДСВ3.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрДСВ3.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:0px;top:25px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 220,
			height: 19,
			style: 'position:absolute;left:105px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Платежное поручение',
			style: 'position:absolute;left:0px;top:75px;width:749px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПлатежногоПоручения',
			text: 'Номер:',
			style: 'position:absolute;left:6px;top:97px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПлатежногоПоручения',
			width: 271,
			height: 19,
			style: 'position:absolute;left:54px;top:97px;width:271px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПлатежногоПоручения',
			text: 'от:',
			style: 'position:absolute;left:335px;top:97px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПлатежногоПоручения',
			width: 120,
			height: 19,
			style: 'position:absolute;left:357px;top:97px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсполненияПлатежногоПоручения',
			text: 'Дата исполнения:',
			style: 'position:absolute;left:491px;top:97px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсполненияПлатежногоПоручения',
			width: 120,
			height: 19,
			style: 'position:absolute;left:591px;top:97px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:357px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:446px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:526px;top:0px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:546px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:0px;top:49px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки',
			width: 80,
			height: 19,
			style: 'position:absolute;left:105px;top:49px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:197px;width:749px;height:244px;',
			height: 244,width: 749,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Застрахованные лица',
			style: 'position:absolute;left:0px;top:0px;width:749px;height:16px;',
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:749px;height:204px;',
			height: 204,width: 749,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'111',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'80',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'80',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'80',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Страховой номер',
					width:'100',
					dataIndex:'СтраховойНомерПФР',
					flex:1,
				},
				{
					text:'Перечислено сотрудником',
					width:'120',
					dataIndex:'ВзносовРаботника',
					flex:1,
				},
				{
					text:'Перечислено работодателем',
					width:'120',
					dataIndex:'ВзносовРаботодателя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РеестрДСВ3/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'Фамилия',
					},
					{
						name:'Имя',
					},
					{
						name:'Отчество',
					},
					{
						name:'СтраховойНомерПФР',
					},
					{
						name:'ВзносовРаботника',
					},
					{
						name:'ВзносовРаботодателя',
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
						var грид = Ext.getCmp('РаботникиОрганизации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РеестрДСВ3.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РеестрДСВ3.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:765px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:473px;width:765px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Проверить в CheckXML',
				},
				'-',
				{
					text:'Показать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать документ',
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