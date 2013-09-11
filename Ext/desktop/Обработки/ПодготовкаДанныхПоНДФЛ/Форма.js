Ext.require(['Данные.Обработки.ПодготовкаДанныхПоНДФЛ'], function () 
{
	Ext.define('Обработки.ПодготовкаДанныхПоНДФЛ.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подготовка данных по НДФЛ для передачи в налоговые органы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:214px;top:8px;width:70px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:287px;top:8px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаСформировать',
			text: 'Сформировать справки',
			style: 'position:absolute;left:8px;top:8px;width:192px;height:34px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод3',
			text: 'Налоговый период:',
			style: 'position:absolute;left:515px;top:8px;width:107px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДанныеФизлиц',
			text: '  Состав Реестра справок 2-НДФЛ',
			style: 'position:absolute;left:8px;top:228px;width:984px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРеестры',
			text: '  Реестры справок 2-НДФЛ',
			style: 'position:absolute;left:8px;top:47px;width:984px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:69px;width:365px;height:24px;',
			width: 365,
			height: 24,
			items:
			[
				{
					text:'Добавить',
					tooltip:'Добавить',
				},
				'-',
				{
					text:'Удалить',
					tooltip:'Удалить',
				},
				{
					text:'Принято налоговым органом',
					tooltip:'Принято налоговым органом',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить список реестров',
				},
				'-',
			]
		},
		{
			id: 'Документы2НДФЛ',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:93px;width:365px;height:131px;',
			height: 131,width: 365,
			columns:
			[
				{
					text:'Реестр',
					width:'100',
					dataIndex:'Справка',
					flex:1,
				},
				{
					text:'Общая сумма дохода',
					width:'100',
					dataIndex:'ОбщаяСуммаДохода',
					flex:1,
				},
				{
					text:'Налога исчислено',
					width:'100',
					dataIndex:'НалогаИсчислено',
					flex:1,
				},
				{
					text:'Налога удержано',
					width:'100',
					dataIndex:'НалогаУдержано',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПоНДФЛ/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Справка',
					},
					{
						name:'ОбщаяСуммаДохода',
					},
					{
						name:'НалогаИсчислено',
					},
					{
						name:'НалогаУдержано',
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
						var грид = Ext.getCmp('Документы2НДФЛ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:547px;width:984px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:381px;top:69px;width:611px;height:155px;',
			height: 155,width: 611,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись51',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:6px;top:6px;width:102px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСоставления',
			width: 120,
			height: 19,
			style: 'position:absolute;left:112px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить',
			style: 'position:absolute;left:503px;top:58px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Печать',
			text: 'Печать',
			style: 'position:absolute;left:503px;top:84px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайл',
			text: 'Показать файл',
			style: 'position:absolute;left:503px;top:109px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск',
			text: 'Файл на диск',
			style: 'position:absolute;left:503px;top:134px;width:108px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКАТО',
			text: 'ОКАТО/КПП:',
			style: 'position:absolute;left:246px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПоОКАТО',
			width: 120,
			height: 19,
			style: 'position:absolute;left:331px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайла',
			width: 280,
			height: 19,
			style: 'position:absolute;left:331px;top:32px;width:280px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайла',
			text: 'Имя файла:',
			style: 'position:absolute;left:246px;top:32px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный5',
			text: 'Ответственный:',
			style: 'position:absolute;left:246px;top:60px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:330px;top:60px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОснованиеДляПредставленияСправок',
			text: 'Вид справок:',
			style: 'position:absolute;left:6px;top:60px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОснованиеДляПредставленияСправок.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:112px;top:60px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:246px;top:86px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			width: 120,
			height: 19,
			style: 'position:absolute;left:330px;top:86px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьОтветственного',
			text: 'Должность:',
			style: 'position:absolute;left:246px;top:111px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДолжностьПодписавшегоЛица.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:330px;top:111px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьГлавныйБухгалтер',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:6px;top:86px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ГлавныйБухгалтер.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:112px;top:86px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСправкуПодписал',
			text: 'Справку подписал:',
			style: 'position:absolute;left:6px;top:111px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СправкуПодписал.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:112px;top:111px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКодИФНС',
			text: 'В ИФНС (код):',
			style: 'position:absolute;left:6px;top:32px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИФНС',
			width: 120,
			height: 19,
			style: 'position:absolute;left:112px;top:32px;width:120px;height:19px;',
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:251px;width:984px;height:292px;',
			height: 292,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ФизлицаРеестра2НДФЛ',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:349px;height:268px;',
			height: 268,width: 349,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Налогоплательщик',
					width:'105',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'№ справки',
					width:'65',
					dataIndex:'НомерСправки',
					flex:1,
				},
				{
					text:'Ставка',
					width:'44',
					dataIndex:'Ставка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПоНДФЛ/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'НомерСправки',
					},
					{
						name:'Ставка',
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
						var грид = Ext.getCmp('ФизлицаРеестра2НДФЛ');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:349px;height:24px;',
			width: 349,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'Переместить вверх',
				},
				{
					text:'',
					tooltip:'Переместить вниз',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Упорядочить по возрастанию',
				},
				'-',
				{
					text:'Пронумеровать',
					tooltip:'Пронумеровать справки',
				},
				'-',
				{
					text:'Перенести',
					tooltip:'Перенести в другой Реестр справок 2-НДФЛ',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:358px;top:0px;width:626px;height:292px;',
			height: 292,width: 626,
			items:
			[
				{
					items:
					[
		{
			id: 'СведенияОДоходах',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:293px;height:138px;',
			height: 138,width: 293,
			columns:
			[
				{
					text:'Месяц',
					width:'41',
					dataIndex:'Месяц',
					flex:1,
				},
				{
					text:'Код дохода',
					width:'62',
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
					width:'63',
					dataIndex:'КодВычета',
					flex:1,
				},
				{
					text:'Сумма вычета',
					width:'100',
					dataIndex:'СуммаВычета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПоНДФЛ/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Месяц',
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
						name:'СуммаВычета',
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
						var грид = Ext.getCmp('СведенияОДоходах');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СведенияОВычетах',
			xtype: 'grid',
			style: 'position:absolute;left:309px;top:23px;width:309px;height:91px;',
			height: 91,width: 309,
			columns:
			[
				{
					text:'Код вычета',
					width:'100',
					dataIndex:'КодВычета',
					flex:1,
				},
				{
					text:'Сумма вычета',
					width:'100',
					dataIndex:'СуммаВычета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПоНДФЛ/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КодВычета',
					},
					{
						name:'СуммаВычета',
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
						var грид = Ext.getCmp('СведенияОВычетах');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Доходы по месяцам',
			style: 'position:absolute;left:6px;top:0px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Вычеты (стандартные, имущественные и пр.)',
			style: 'position:absolute;left:309px;top:0px;width:275px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:6px;top:6px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:195px;top:6px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:358px;top:6px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес в РФ:',
			style: 'position:absolute;left:6px;top:81px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:156px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:6px;top:181px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:202px;top:181px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес1',
			text: 'Адрес в стране проживания:',
			style: 'position:absolute;left:6px;top:106px;width:149px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство',
			text: 'Гражданство:',
			style: 'position:absolute;left:6px;top:56px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:6px;top:31px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:191px;top:31px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщика',
			text: 'Статус:',
			style: 'position:absolute;left:349px;top:56px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаУведомления',
			width: 80,
			height: 19,
			style: 'position:absolute;left:407px;top:142px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерУведомления',
			width: 60,
			height: 19,
			style: 'position:absolute;left:324px;top:142px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодНалоговогоОрганаУведомления',
			width: 60,
			height: 19,
			style: 'position:absolute;left:558px;top:142px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаУведомления',
			text: 'от:',
			style: 'position:absolute;left:388px;top:142px;width:18px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Уведомление на имущественный вычет',
			style: 'position:absolute;left:309px;top:120px;width:275px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерУведомления',
			text: '№:',
			style: 'position:absolute;left:309px;top:142px;width:15px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:491px;top:142px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:133px;width:129px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:166px;width:612px;height:100px;',
			height: 100,width: 612,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Исчислено',
			style: 'position:absolute;left:249px;top:24px;width:72px;height:19px;',
			width: 72,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Удержано',
			style: 'position:absolute;left:249px;top:48px;width:72px;height:19px;',
			width: 72,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Перечислено',
			style: 'position:absolute;left:435px;top:48px;width:72px;height:19px;',
			width: 72,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОбщаяСуммаДохода',
			style: 'position:absolute;left:68px;top:24px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОблагаемаяСуммаДохода',
			style: 'position:absolute;left:68px;top:48px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Задолженность',
			style: 'position:absolute;left:249px;top:72px;width:72px;height:19px;',
			width: 72,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИзлишнеУдержано',
			style: 'position:absolute;left:435px;top:24px;width:72px;height:19px;',
			width: 72,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Суммы дохода',
			style: 'position:absolute;left:0px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Суммы налога',
			style: 'position:absolute;left:176px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Исчислено:',
			style: 'position:absolute;left:176px;top:24px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Удержано:',
			style: 'position:absolute;left:176px;top:48px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Общая:',
			style: 'position:absolute;left:0px;top:24px;width:38px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Облагаемая:',
			style: 'position:absolute;left:0px;top:48px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Перечислено:',
			style: 'position:absolute;left:332px;top:48px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Излишне удержано:',
			style: 'position:absolute;left:332px;top:24px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Не удержано:',
			style: 'position:absolute;left:176px;top:72px;width:69px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:504px;top:79px;width:108px;height:21px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Суммы дохода',
			style: 'position:absolute;left:80px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Суммы налога',
			style: 'position:absolute;left:247px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Исчислено:',
			style: 'position:absolute;left:247px;top:24px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Общая:',
			style: 'position:absolute;left:80px;top:24px;width:38px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Облагаемая:',
			style: 'position:absolute;left:80px;top:48px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Не удержано:',
			style: 'position:absolute;left:247px;top:68px;width:70px;height:19px;',
		},
		{
			id: 'СуммыНалогов',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:70px;height:91px;',
			height: 91,width: 70,
			columns:
			[
				{
					text:'По ставке:',
					width:'64',
					dataIndex:'Ставка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПоНДФЛ/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Ставка',
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
						var грид = Ext.getCmp('СуммыНалогов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:389px;top:9px;width:150px;height:57px;',
			height: 57,width: 150,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Перечислено1',
			style: 'position:absolute;left:90px;top:38px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИзлишнеУдержано1',
			style: 'position:absolute;left:90px;top:16px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Перечислено:',
			style: 'position:absolute;left:0px;top:38px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Излишне удер-но:',
			style: 'position:absolute;left:0px;top:16px;width:90px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:247px;top:47px;width:132px;height:22px;',
			height: 22,width: 132,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Удержано1',
			style: 'position:absolute;left:72px;top:0px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Удержано:',
			style: 'position:absolute;left:0px;top:0px;width:58px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Задолженность1',
			style: 'position:absolute;left:319px;top:70px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОбщаяСуммаДохода1',
			style: 'position:absolute;left:148px;top:24px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОблагаемаяСуммаДохода1',
			style: 'position:absolute;left:148px;top:48px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Исчислено1',
			style: 'position:absolute;left:319px;top:24px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах1',
			text: 'Обновить',
			style: 'position:absolute;left:504px;top:79px;width:108px;height:21px;',
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 120,
			height: 19,
			style: 'position:absolute;left:62px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 120,
			height: 19,
			style: 'position:absolute;left:225px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 120,
			height: 19,
			style: 'position:absolute;left:415px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресРФВФорме',
			width: 524,
			height: 19,
			style: 'position:absolute;left:94px;top:81px;width:524px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ВидДокумента.Представление',
			width: 251,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:156px;width:251px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияДокумента',
			width: 100,
			height: 19,
			style: 'position:absolute;left:94px;top:181px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДокумента',
			width: 100,
			height: 19,
			style: 'position:absolute;left:245px;top:181px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЗарубежомВФорме',
			width: 458,
			height: 19,
			style: 'position:absolute;left:160px;top:106px;width:458px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Гражданство.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРождения',
			width: 85,
			height: 19,
			style: 'position:absolute;left:94px;top:31px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 120,
			height: 19,
			style: 'position:absolute;left:225px;top:31px;width:120px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтатусНалогоплательщика.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:398px;top:56px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодготовкаДанныхПоНДФЛ.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:510px;top:245px;width:108px;height:21px;',
		},
					]
				},
			]
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодготовкиДокументов',
			text: 'Данные для передачи еще не готовы. Необходимо создать хотя бы одну пачку.',
			style: 'position:absolute;left:30px;top:551px;width:482px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОК2',
			text: 'ОК',
			style: 'position:absolute;left:931px;top:551px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка2',
			text: '',
			style: 'position:absolute;left:969px;top:551px;width:23px;height:21px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:624px;top:8px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
	]
	});
});