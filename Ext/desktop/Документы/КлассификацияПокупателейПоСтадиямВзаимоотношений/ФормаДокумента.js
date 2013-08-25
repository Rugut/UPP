Ext.require(['Данные.Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений'], function () 
{
	Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Классификация покупателей по стадиям взаимоотношений',
	
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
			style: 'position:absolute;left:8px;top:33px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:142px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:162px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			width: 660,
			height: 25,
			items:
			[
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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:58px;width:644px;height:290px;',
			height: 290,width: 644,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Дата окончания:',
			style: 'position:absolute;left:439px;top:6px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 99,
			height: 19,
			style: 'position:absolute;left:537px;top:6px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Периодичность:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Периодичность.Представление',
			width: 124,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:6px;width:124px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Количество периодов:',
			style: 'position:absolute;left:232px;top:6px;width:118px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПериодов',
			style: 'position:absolute;left:358px;top:6px;width:66px;height:19px;',
			width: 66,
			height: 19,
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:32px;width:630px;height:24px;',
			width: 630,
			height: 24,
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			id: 'ТаблицаРаспределенияКонтрагентов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:630px;height:208px;',
			height: 208,width: 630,
			columns:
			[
				{
					text:'N',
					width:'25',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Стадия взаимоотношений',
					width:'81',
					dataIndex:'СтадияВзаимоотношений',
					flex:1,
				},
				{
					text:'XYZ-класс',
					width:'70',
					dataIndex:'XYZКлассификация',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'144',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Коэф. вариации',
					width:'100',
					dataIndex:'КоэффициентВариации',
					flex:1,
				},
				{
					text:'Параметр (значение)',
					width:'112',
					dataIndex:'ЗначениеПараметра',
					flex:1,
				},
				{
					text:'Параметр (%)',
					width:'74',
					dataIndex:'ПроцентПараметра',
					flex:1,
				},
				{
					text:'Менеджер контрагента',
					width:'122',
					dataIndex:'МенеджерКонтрагента',
					flex:1,
				},
				{
					text:'Стадия взаимоотношений старая',
					width:'100',
					dataIndex:'СтадияВзаимоотношенийСтарая',
					flex:1,
				},
				{
					text:'XYZ -классификация старая',
					width:'100',
					dataIndex:'XYZКлассификацияСтарая',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлассификацияПокупателейПоСтадиямВзаимоотношений/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СтадияВзаимоотношений',
					},
					{
						name:'XYZКлассификация',
					},
					{
						name:'Контрагент',
					},
					{
						name:'КоэффициентВариации',
					},
					{
						name:'ЗначениеПараметра',
					},
					{
						name:'ПроцентПараметра',
					},
					{
						name:'МенеджерКонтрагента',
					},
					{
						name:'СтадияВзаимоотношенийСтарая',
					},
					{
						name:'XYZКлассификацияСтарая',
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
						var грид = Ext.getCmp('ТаблицаРаспределенияКонтрагентов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Разовый покупатель (количество покупок):',
			style: 'position:absolute;left:24px;top:74px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РазовыйПокупательНач',
			style: 'position:absolute;left:109px;top:98px;width:86px;height:19px;',
			width: 86,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РазовыйПокупательКон',
			style: 'position:absolute;left:227px;top:98px;width:86px;height:19px;',
			width: 86,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'X-класс с:',
			style: 'position:absolute;left:41px;top:154px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'XКлассНач',
			style: 'position:absolute;left:109px;top:154px;width:86px;height:19px;',
			width: 86,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'XКлассКон',
			style: 'position:absolute;left:227px;top:154px;width:86px;height:19px;',
			width: 86,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Y-класс с:',
			style: 'position:absolute;left:41px;top:179px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'YКлассНач',
			style: 'position:absolute;left:109px;top:179px;width:86px;height:19px;',
			width: 86,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'YКлассКон',
			style: 'position:absolute;left:227px;top:179px;width:86px;height:19px;',
			width: 86,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Z-класс с:',
			style: 'position:absolute;left:41px;top:204px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ZКлассНач',
			style: 'position:absolute;left:109px;top:204px;width:86px;height:19px;',
			width: 86,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ZКлассКон',
			style: 'position:absolute;left:227px;top:204px;width:86px;height:19px;',
			width: 86,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПараметраРаспределения',
			text: 'ПараметрРаспределения',
			style: 'position:absolute;left:23px;top:27px;width:613px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Критерии распределения',
			style: 'position:absolute;left:6px;top:53px;width:630px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Параметр распределения (из учетной политики)',
			style: 'position:absolute;left:6px;top:6px;width:630px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'по:',
			style: 'position:absolute;left:202px;top:98px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Постоянный покупатель (относительный коэффициент вариации):',
			style: 'position:absolute;left:24px;top:130px;width:339px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'по:',
			style: 'position:absolute;left:202px;top:154px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'по:',
			style: 'position:absolute;left:202px;top:179px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'по:',
			style: 'position:absolute;left:202px;top:204px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'с:',
			style: 'position:absolute;left:83px;top:98px;width:18px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:378px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 556,
			height: 19,
			style: 'position:absolute;left:96px;top:378px;width:556px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:354px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 556,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:354px;width:556px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:0px;top:405px;width:660px;height:25px;',
			width: 660,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
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