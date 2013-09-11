Ext.require(['Данные.Документы.НДФЛиЕСНДоходыИНалоги'], function () 
{
	Ext.define('Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:813px;height:495px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Корректировка учета по НДФЛ, страховым взносам и ЕСН',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:504px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:524px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:443px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 636,
			height: 19,
			style: 'position:absolute;left:169px;top:443px;width:636px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:813px;height:25px;',
			width: 813,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
					tooltip:'Включить возможность редактирования номера документа',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
					tooltip:'Открыть свойства',
				},
				{
					text:'',
					tooltip:'Открыть категории',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:84px;width:797px;height:351px;',
			height: 351,width: 797,
			items:
			[
				{
					items:
					[
		{
			id: 'НДФЛСведенияОДоходах',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:43px;width:622px;height:300px;',
			height: 300,width: 622,
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
					width:'95',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Дата дохода',
					width:'75',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Месяц налогового периода',
					width:'100',
					dataIndex:'МесяцНалоговогоПериода',
					flex:1,
				},
				{
					text:'Период регистрации',
					width:'100',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Код дохода',
					width:'100',
					dataIndex:'КодДохода',
					flex:1,
				},
				{
					text:'Сумма дохода',
					width:'100',
					dataIndex:'СуммаДохода',
					flex:1,
				},
				{
					text:'Код вычета',
					width:'100',
					dataIndex:'КодВычета',
					flex:1,
				},
				{
					text:'Количество детей',
					width:'100',
					dataIndex:'КоличествоДетей',
					flex:1,
				},
				{
					text:'Сумма вычета',
					width:'100',
					dataIndex:'СуммаВычета',
					flex:1,
				},
				{
					text:'Сумма налога исчисленная',
					width:'100',
					dataIndex:'СуммаНалогаИсчисленная',
					flex:1,
				},
				{
					text:'Для обособленного подразделения',
					width:'200',
					dataIndex:'КолонкаКодовОП',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'100',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'КПП',
					width:'100',
					dataIndex:'КПП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Период',
					},
					{
						name:'МесяцНалоговогоПериода',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'КодДохода',
					},
					{
						name:'СуммаДохода',
					},
					{
						name:'КодВычета',
					},
					{
						name:'КоличествоДетей',
					},
					{
						name:'СуммаВычета',
					},
					{
						name:'СуммаНалогаИсчисленная',
					},
					{
						name:'КолонкаКодовОП',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КПП',
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
						var грид = Ext.getCmp('НДФЛСведенияОДоходах');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Учет доходов по всем ставкам и налогов по ставкам 9% и 35%',
			style: 'position:absolute;left:6px;top:2px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
			]
		},
		{
			id: 'НДФЛИсчисленный13',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:117px;',
			height: 117,width: 622,
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
					width:'181',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Месяц налогового периода',
					width:'147',
					dataIndex:'МесяцНалоговогоПериода',
					flex:1,
				},
				{
					text:'Период регистрации',
					width:'147',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Налог',
					width:'100',
					dataIndex:'Налог',
					flex:1,
				},
				{
					text:'Для обособленного подразделения',
					width:'200',
					dataIndex:'КолонкаКодовОП',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'100',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'КПП',
					width:'100',
					dataIndex:'КПП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'МесяцНалоговогоПериода',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'Налог',
					},
					{
						name:'КолонкаКодовОП',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КПП',
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
						var грид = Ext.getCmp('НДФЛИсчисленный13');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Исчислено налога',
			style: 'position:absolute;left:6px;top:2px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Предоставлено вычетов',
			style: 'position:absolute;left:6px;top:166px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'НДФЛПредоставленныеВычеты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:622px;height:137px;',
			height: 137,width: 622,
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
					width:'182',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Месяц налогового периода',
					width:'147',
					dataIndex:'МесяцНалоговогоПериода',
					flex:1,
				},
				{
					text:'Период регистрации',
					width:'147',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Код вычета',
					width:'65',
					dataIndex:'КодВычета',
					flex:1,
				},
				{
					text:'Предоставленный вычет',
					width:'106',
					dataIndex:'ПримененныйВычет',
					flex:1,
				},
				{
					text:'Для обособленного подразделения',
					width:'200',
					dataIndex:'КолонкаКодовОП',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'100',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'КПП',
					width:'100',
					dataIndex:'КПП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'МесяцНалоговогоПериода',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'КодВычета',
					},
					{
						name:'ПримененныйВычет',
					},
					{
						name:'КолонкаКодовОП',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КПП',
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
						var грид = Ext.getCmp('НДФЛПредоставленныеВычеты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
				{
					text:'суммами исчисленного налога',
					tooltip:'Заполнить суммами исчисленного налога',
				},
			]
		},
		{
			id: 'НДФЛУдержанный',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:301px;',
			height: 301,width: 622,
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
					width:'96',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Месяц налогового периода',
					width:'100',
					dataIndex:'МесяцНалоговогоПериода',
					flex:1,
				},
				{
					text:'Период регистрации',
					width:'100',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Ставка налога',
					width:'100',
					dataIndex:'СтавкаНалогообложения',
					flex:1,
				},
				{
					text:'Код дохода',
					width:'100',
					dataIndex:'КодДохода',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Налог',
					flex:1,
				},
				{
					text:'Для обособленного подразделения',
					width:'200',
					dataIndex:'КолонкаКодовОП',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'100',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'КПП',
					width:'100',
					dataIndex:'КПП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'МесяцНалоговогоПериода',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'СтавкаНалогообложения',
					},
					{
						name:'КодДохода',
					},
					{
						name:'Налог',
					},
					{
						name:'КолонкаКодовОП',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КПП',
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
						var грид = Ext.getCmp('НДФЛУдержанный');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Учет удержанных сумм НДФЛ по всем ставкам ',
			style: 'position:absolute;left:6px;top:2px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'СтраховыеВзносыСведенияОДоходах',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:117px;',
			height: 117,width: 622,
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
					width:'100',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Месяц',
					width:'100',
					dataIndex:'МесяцРасчетногоПериода',
					flex:1,
				},
				{
					text:'Вид дохода',
					width:'100',
					dataIndex:'ВидДохода',
					flex:1,
				},
				{
					text:'Сумма дохода',
					width:'100',
					dataIndex:'СуммаДохода',
					flex:1,
				},
				{
					text:'Скидка',
					width:'100',
					dataIndex:'Скидка',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'39',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'214',
					dataIndex:'ОблагаетсяПоДополнительномуТарифу',
					flex:1,
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'236',
					dataIndex:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					flex:1,
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
					dataIndex:'ЯвляетсяДоходомФармацевта',
					flex:1,
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
					dataIndex:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'МесяцРасчетногоПериода',
					},
					{
						name:'ВидДохода',
					},
					{
						name:'СуммаДохода',
					},
					{
						name:'Скидка',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'ОблагаетсяПоДополнительномуТарифу',
					},
					{
						name:'ОблагаетсяВзносамиНаДоплатуКПенсииШахтерам',
					},
					{
						name:'ЯвляетсяДоходомФармацевта',
					},
					{
						name:'ЯвляетсяДоходомЧленаЭкипажаСуднаПодФлагомРФ',
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
						var грид = Ext.getCmp('СтраховыеВзносыСведенияОДоходах');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СтраховыеВзносы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:622px;height:137px;',
			height: 137,width: 622,
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
					width:'100',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Месяц',
					width:'100',
					dataIndex:'МесяцРасчетногоПериода',
					flex:1,
				},
				{
					text:'Взносы в ПФР',
					width:'400',
					dataIndex:'КолонкаПФР',
					flex:1,
				},
				{
					text:'страховая',
					width:'80',
					dataIndex:'ПФРСтраховая',
					flex:1,
				},
				{
					text:'накопительная',
					width:'80',
					dataIndex:'ПФРНакопительная',
					flex:1,
				},
				{
					text:'страховая по ЕНВД',
					width:'80',
					dataIndex:'ПФРСтраховаяЕНВД',
					flex:1,
				},
				{
					text:'накопительная по ЕНВД',
					width:'80',
					dataIndex:'ПФРНакопительнаяЕНВД',
					flex:1,
				},
				{
					text:'по доп. тарифу',
					width:'80',
					dataIndex:'ПФРПоДополнительномуТарифу',
					flex:1,
				},
				{
					text:'на доплату к пенсии шахтерам',
					width:'100',
					dataIndex:'ПФРНаДоплатуКПенсииШахтерам',
					flex:1,
				},
				{
					text:'Взносы в ФСС',
					width:'160',
					dataIndex:'КолонкаФСС',
					flex:1,
				},
				{
					text:'соц.страхование',
					width:'80',
					dataIndex:'ФСС',
					flex:1,
				},
				{
					text:'несчастные случаи',
					width:'80',
					dataIndex:'ФССНесчастныеСлучаи',
					flex:1,
				},
				{
					text:'соц.страхование  по ЕНВД',
					width:'80',
					dataIndex:'ФССЕНВД',
					flex:1,
				},
				{
					text:'Взносы в ФОМС',
					width:'160',
					dataIndex:'КолонкаФОМС',
					flex:1,
				},
				{
					text:'федеральный',
					width:'80',
					dataIndex:'ФФОМС',
					flex:1,
				},
				{
					text:'территориальный',
					width:'80',
					dataIndex:'ТФОМС',
					flex:1,
				},
				{
					text:'федеральный по ЕНВД',
					width:'80',
					dataIndex:'ФФОМСЕНВД',
					flex:1,
				},
				{
					text:'территориальный по ЕНВД',
					width:'80',
					dataIndex:'ТФОМСЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'МесяцРасчетногоПериода',
					},
					{
						name:'КолонкаПФР',
					},
					{
						name:'ПФРСтраховая',
					},
					{
						name:'ПФРНакопительная',
					},
					{
						name:'ПФРСтраховаяЕНВД',
					},
					{
						name:'ПФРНакопительнаяЕНВД',
					},
					{
						name:'ПФРПоДополнительномуТарифу',
					},
					{
						name:'ПФРНаДоплатуКПенсииШахтерам',
					},
					{
						name:'КолонкаФСС',
					},
					{
						name:'ФСС',
					},
					{
						name:'ФССНесчастныеСлучаи',
					},
					{
						name:'ФССЕНВД',
					},
					{
						name:'КолонкаФОМС',
					},
					{
						name:'ФФОМС',
					},
					{
						name:'ТФОМС',
					},
					{
						name:'ФФОМСЕНВД',
					},
					{
						name:'ТФОМСЕНВД',
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
						var грид = Ext.getCmp('СтраховыеВзносы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Учет доходов ',
			style: 'position:absolute;left:6px;top:2px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Исчислено взносов в ПФР, ФСС и ФОМС',
			style: 'position:absolute;left:6px;top:166px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
				{
					text:'по данным для исчисления НДФЛ',
					tooltip:'Заполнить по данным о доходах для исчисления НДФЛ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ЕСНСведенияОДоходах',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:117px;',
			height: 117,width: 622,
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
					width:'100',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Месяц налогового периода',
					width:'100',
					dataIndex:'МесяцНалоговогоПериода',
					flex:1,
				},
				{
					text:'Код дохода',
					width:'89',
					dataIndex:'КодДоходаЕСН',
					flex:1,
				},
				{
					text:'Сумма дохода',
					width:'101',
					dataIndex:'СуммаДохода',
					flex:1,
				},
				{
					text:'Скидка',
					width:'91',
					dataIndex:'Скидка',
					flex:1,
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'МесяцНалоговогоПериода',
					},
					{
						name:'КодДоходаЕСН',
					},
					{
						name:'СуммаДохода',
					},
					{
						name:'Скидка',
					},
					{
						name:'ОблагаетсяЕНВД',
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
						var грид = Ext.getCmp('ЕСНСведенияОДоходах');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
			]
		},
		{
			id: 'ЕСННалоги',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:622px;height:137px;',
			height: 137,width: 622,
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
					width:'100',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Месяц налогового периода',
					width:'100',
					dataIndex:'МесяцНалоговогоПериода',
					flex:1,
				},
				{
					text:'Федеральный бюджет',
					width:'69',
					dataIndex:'ФедеральныйБюджет',
					flex:1,
				},
				{
					text:'ФСС',
					width:'71',
					dataIndex:'ФСС',
					flex:1,
				},
				{
					text:'ФФОМС',
					width:'83',
					dataIndex:'ФФОМС',
					flex:1,
				},
				{
					text:'ТФОМС',
					width:'83',
					dataIndex:'ТФОМС',
					flex:1,
				},
				{
					text:'ПФР Страховая',
					width:'81',
					dataIndex:'ПФРСтраховая',
					flex:1,
				},
				{
					text:'ПФР Накопительная',
					width:'81',
					dataIndex:'ПФРНакопительная',
					flex:1,
				},
				{
					text:'Примененная льгота ФБ',
					width:'100',
					dataIndex:'ПримененнаяЛьготаФБ',
					flex:1,
				},
				{
					text:'Примененная льгота ФСС',
					width:'100',
					dataIndex:'ПримененнаяЛьготаФСС',
					flex:1,
				},
				{
					text:'Примененная льгота ФОМС',
					width:'100',
					dataIndex:'ПримененнаяЛьготаФОМС',
					flex:1,
				},
				{
					text:'ПФР Накопительная ЕНВД',
					width:'100',
					dataIndex:'ПФРНакопительнаяЕНВД',
					flex:1,
				},
				{
					text:'ПФР Страховая ЕНВД',
					width:'100',
					dataIndex:'ПФРСтраховаяЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'МесяцНалоговогоПериода',
					},
					{
						name:'ФедеральныйБюджет',
					},
					{
						name:'ФСС',
					},
					{
						name:'ФФОМС',
					},
					{
						name:'ТФОМС',
					},
					{
						name:'ПФРСтраховая',
					},
					{
						name:'ПФРНакопительная',
					},
					{
						name:'ПримененнаяЛьготаФБ',
					},
					{
						name:'ПримененнаяЛьготаФСС',
					},
					{
						name:'ПримененнаяЛьготаФОМС',
					},
					{
						name:'ПФРНакопительнаяЕНВД',
					},
					{
						name:'ПФРСтраховаяЕНВД',
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
						var грид = Ext.getCmp('ЕСННалоги');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Исчислено налога',
			style: 'position:absolute;left:6px;top:166px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Учет доходов ',
			style: 'position:absolute;left:6px;top:2px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПособияСоциальномуСтрахованию',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:117px;',
			height: 117,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата начисления',
					width:'100',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Вид пособия',
					width:'100',
					dataIndex:'ВидПособияСоциальногоСтрахования',
					flex:1,
				},
				{
					text:'Новый случай',
					width:'76',
					dataIndex:'УчитыватьКакНовыйСтраховойСлучай',
					flex:1,
				},
				{
					text:'Дата случая',
					width:'73',
					dataIndex:'ДатаСтраховогоСлучая',
					flex:1,
				},
				{
					text:'Оплачено дней',
					width:'85',
					dataIndex:'ОплаченныеДни',
					flex:1,
				},
				{
					text:'Сумма всего',
					width:'80',
					dataIndex:'СуммаВсего',
					flex:1,
				},
				{
					text:'В т.ч. сумма сверх норм',
					width:'80',
					dataIndex:'СуммаСверхНорм',
					flex:1,
				},
				{
					text:'Расшифровка выплат за счет федерального бюджета',
					width:'100',
					dataIndex:'ВыплатаЗаСчетФедеральногоБюджета',
					flex:1,
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидПособияСоциальногоСтрахования',
					},
					{
						name:'УчитыватьКакНовыйСтраховойСлучай',
					},
					{
						name:'ДатаСтраховогоСлучая',
					},
					{
						name:'ОплаченныеДни',
					},
					{
						name:'СуммаВсего',
					},
					{
						name:'СуммаСверхНорм',
					},
					{
						name:'ВыплатаЗаСчетФедеральногоБюджета',
					},
					{
						name:'ОблагаетсяЕНВД',
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
						var грид = Ext.getCmp('ПособияСоциальномуСтрахованию');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:18px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:622px;height:24px;',
			width: 622,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
			]
		},
		{
			id: 'ПособияПоУходуЗаРебенкомДоПолутораЛет',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:622px;height:137px;',
			height: 137,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата начисления',
					width:'100',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'ПериодДействияНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'ПериодДействияКонец',
					flex:1,
				},
				{
					text:'По уходу за первым ребенком',
					width:'100',
					dataIndex:'ПособиеПоУходуЗаПервымРебенком',
					flex:1,
				},
				{
					text:'В т.ч. сумма сверх норм (по уходу за первым ребенком)',
					width:'100',
					dataIndex:'ПособиеПоУходуЗаПервымРебенкомСверхНорм',
					flex:1,
				},
				{
					text:'По уходу за вторым (и последующим) ребенком',
					width:'100',
					dataIndex:'ПособиеПоУходуЗаВторымРебенком',
					flex:1,
				},
				{
					text:'В т.ч. сумма сверх норм (по уходу за вторым ребенком)',
					width:'100',
					dataIndex:'ПособиеПоУходуЗаВторымРебенкомСверхНорм',
					flex:1,
				},
				{
					text:'Расшифровка выплат за счет федерального бюджета',
					width:'100',
					dataIndex:'ВыплатаЗаСчетФедеральногоБюджета',
					flex:1,
				},
				{
					text:'Средний дневной заработок',
					width:'100',
					dataIndex:'СреднийДневнойЗаработок',
					flex:1,
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛиЕСНДоходыИНалоги/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ПериодДействияНачало',
					},
					{
						name:'ПериодДействияКонец',
					},
					{
						name:'ПособиеПоУходуЗаПервымРебенком',
					},
					{
						name:'ПособиеПоУходуЗаПервымРебенкомСверхНорм',
					},
					{
						name:'ПособиеПоУходуЗаВторымРебенком',
					},
					{
						name:'ПособиеПоУходуЗаВторымРебенкомСверхНорм',
					},
					{
						name:'ВыплатаЗаСчетФедеральногоБюджета',
					},
					{
						name:'СреднийДневнойЗаработок',
					},
					{
						name:'ОблагаетсяЕНВД',
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
						var грид = Ext.getCmp('ПособияПоУходуЗаРебенкомДоПолутораЛет');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Пособия по уходу за ребенком до 1.5 лет',
			style: 'position:absolute;left:6px;top:166px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Пособия по временной нетрудоспособности и другие пособия',
			style: 'position:absolute;left:6px;top:2px;width:622px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Налоговый (расчетный) период:',
			style: 'position:absolute;left:8px;top:57px;width:168px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:182px;top:57px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'год',
			style: 'position:absolute;left:270px;top:57px;width:25px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:470px;width:813px;height:25px;',
			width: 813,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});