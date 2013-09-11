Ext.require(['Данные.Документы.ЗарплатаКВыплатеОрганизаций'], function () 
{
	Ext.define('Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:524px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Зарплата к выплате',
	
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
			style: 'position:absolute;left:434px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:518px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:603px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:622px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 303,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:122px;top:33px;width:303px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:434px;top:56px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 224,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:518px;top:56px;width:224px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКоментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:472px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 644,
			height: 19,
			style: 'position:absolute;left:98px;top:472px;width:644px;height:19px;',
		},
		{
			id: 'Зарплата',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:231px;width:734px;height:198px;',
			height: 198,width: 734,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
					dataIndex:'Авторасчет',
					flex:1,
				},
				{
					text:'№',
					width:'31',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'216',
					dataIndex:'Физлицо',
					flex:1,
				},
				{
					text:'К выплате',
					width:'90',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Было начислено',
					width:'90',
					dataIndex:'Начислено',
					flex:1,
				},
				{
					text:'Отложено',
					width:'90',
					dataIndex:'Удержано',
					flex:1,
				},
				{
					text:'Компенсация за задержку зарплаты',
					width:'124',
					dataIndex:'КомпенсацияЗаЗадержкуЗарплаты',
					flex:1,
				},
				{
					text:'Отметка',
					width:'90',
					dataIndex:'ВыплаченностьЗарплаты',
					flex:1,
				},
				{
					text:'Документ',
					width:'120',
					dataIndex:'ВыплатаЗарегистрированаДокументом',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗарплатаКВыплатеОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Авторасчет',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Физлицо',
					},
					{
						name:'Сумма',
					},
					{
						name:'Начислено',
					},
					{
						name:'Удержано',
					},
					{
						name:'КомпенсацияЗаЗадержкуЗарплаты',
					},
					{
						name:'ВыплаченностьЗарплаты',
					},
					{
						name:'ВыплатаЗарегистрированаДокументом',
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
						var грид = Ext.getCmp('Зарплата');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:750px;height:25px;',
			width: 750,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
				},
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				{
					text:'Записать и закрыть',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
					]
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
				},
				'-',
				{
					text:'Редактировать номер',
					tooltip:'Включить возможность редактирования номера документа',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
				},
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
					tooltip:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Провести',
					tooltip:'Провести',
					iconCls:'x-Post',
				},
				{
					text:'Действие1',
					tooltip:'Отмена проведения',
					iconCls:'x-UndoPosting',
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
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Сотрудники',
			style: 'position:absolute;left:8px;top:191px;width:734px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: 'НадписьПредупреждение',
			style: 'position:absolute;left:31px;top:436px;width:711px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:56px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПодразделениеОрганизации.Представление',
			width: 303,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:122px;top:56px;width:303px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:207px;width:734px;height:24px;',
			width: 734,
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
				'-',
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				{
					text:'Действие2',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Действие3',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор списком',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор по условию',
					tooltip:'',
				},
				'-',
				{
					text:'Удалить пустые',
					tooltip:'Удалить строки с нулевой или отрицательной суммой',
				},
				'-',
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:84px;width:734px;height:58px;',
			height: 58,width: 734,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 111,
			height: 19,
			style: 'position:absolute;left:113px;top:6px;width:111px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ХарактерВыплаты.Представление',
			width: 303,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:31px;width:303px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Выплачивать:',
			style: 'position:absolute;left:6px;top:31px;width:80px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:422px;top:31px;width:304px;height:19px;',
			height: 19,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по документу:',
			style: 'position:absolute;left:3px;top:0px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснование',
			width: 217,
			height: 19,
			style: 'position:absolute;left:87px;top:0px;width:217px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СпособВыплаты.Представление',
			width: 92,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:324px;top:6px;width:92px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:422px;top:6px;width:304px;height:19px;',
			height: 19,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Банк.Представление',
			width: 217,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:87px;top:0px;width:217px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:149px;width:111px;height:36px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьПараметрыЗаполнения',
			text: 'ИнформационнаяНадписьПараметрыЗаполнения',
			style: 'position:absolute;left:126px;top:165px;width:616px;height:33px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:38px;top:330px;width:500px;height:24px;',
			width: 500,
			height: 24,
			items:
			[
				{
					text:'Выплачено',
					tooltip:'Выплачено',
				},
				{
					text:'Депонировано',
					tooltip:'Депонировать помеченные строки',
				},
				'-',
				{
					text:'Не выплачено',
					tooltip:'Проставить отметку «Не выплачено» по всем строкам',
				},
				'-',
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПараметрыЗаполнения',
			text: 'Расчет сумм к выплате:',
			style: 'position:absolute;left:126px;top:149px;width:616px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:750px;height:25px;',
			width: 750,
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