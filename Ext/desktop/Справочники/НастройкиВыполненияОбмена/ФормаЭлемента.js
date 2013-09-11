Ext.require(['Данные.Справочники.НастройкиВыполненияОбмена'], function () 
{
	Ext.define('Справочники.НастройкиВыполненияОбмена.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:508px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки выполнения обмена',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:508px;height:25px;',
			width: 508,
			height: 25,
			items:
			[
				'-',
				{
					text:'Выполнить обмен',
					tooltip:'Выполнить обмен данными',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:409px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 54,
			height: 19,
			style: 'position:absolute;left:446px;top:33px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 319,
			height: 19,
			style: 'position:absolute;left:90px;top:33px;width:319px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:57px;width:492px;height:260px;',
			height: 260,width: 492,
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание для выполнения обмена',
			style: 'position:absolute;left:6px;top:6px;width:478px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасписаниеРегламентногоЗаданияНастройки',
			text: 'Расписание регламентного задания',
			style: 'position:absolute;left:21px;top:27px;width:463px;height:39px;',
		},
		{
			xtype: 'button',
			name: 'НастройкаРегламентногоЗадания',
			text: 'Дополнительные настройки расписания ...',
			style: 'position:absolute;left:249px;top:95px;width:235px;height:24px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Динамически изменять расписание',
			style: 'position:absolute;left:21px;top:71px;width:284px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Пользователь:',
			style: 'position:absolute;left:6px;top:26px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 391,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:26px;width:391px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При запуске программы',
			style: 'position:absolute;left:15px;top:49px;width:148px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При завершении работы программы',
			style: 'position:absolute;left:15px;top:73px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Обмен данных по событиям (на клиентской части)',
			style: 'position:absolute;left:7px;top:6px;width:477px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогПроверкиДоступности',
			width: 316,
			height: 19,
			style: 'position:absolute;left:168px;top:97px;width:316px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При появлении каталога',
			style: 'position:absolute;left:15px;top:97px;width:148px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВыполнятьОбменПриПоявленииФайла',
			width: 316,
			height: 19,
			style: 'position:absolute;left:168px;top:121px;width:316px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При появлении файла',
			style: 'position:absolute;left:15px;top:121px;width:148px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииНаЗапись1',
			text: 'Элементов в транзакции при загрузке данных:',
			style: 'position:absolute;left:6px;top:26px;width:245px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЭлементовВТранзакцииНаЗапись1',
			style: 'position:absolute;left:260px;top:26px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииНаЧтение1',
			text: 'Элементов в транзакции при выгрузке данных:',
			style: 'position:absolute;left:6px;top:50px;width:245px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЭлементовВТранзакцииНаЧтение1',
			style: 'position:absolute;left:260px;top:50px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять обмен данными под полными правами',
			style: 'position:absolute;left:6px;top:6px;width:277px;height:16px;',
		},
		{
			xtype: 'label',
			text: 'Отправлять сообщения при ошибке обмена',
			style: 'position:absolute;left:6px;top:73px;width:478px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьУчетнаяЗапись',
			text: 'Учетная запись:',
			style: 'position:absolute;left:16px;top:93px;width:130px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'УчетнаяЗаписьОтправкиСообщенияОбОшибке.Представление',
			width: 336,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:93px;width:336px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьАдресДляОтправкиСообщений',
			text: 'Адрес для отправки:',
			style: 'position:absolute;left:16px;top:116px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресДляОтправкиСообщенийОбОшибке',
			width: 336,
			height: 19,
			style: 'position:absolute;left:148px;top:116px;width:336px;height:19px;',
		},
		{
			id: 'СообщенияНеЯвляющиесяОшибками',
			xtype: 'grid',
			style: 'position:absolute;left:16px;top:166px;width:468px;height:68px;',
			height: 68,width: 468,
			columns:
			[
				{
					text:'Тексты сообщений, которые не являются ошибками',
					width:'311',
					dataIndex:'ТекстСообщения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиВыполненияОбмена").data,
					fields: ['Ссылка','ТекстСообщения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиВыполненияОбмена/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ТекстСообщения',
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
						var грид = Ext.getCmp('СообщенияНеЯвляющиесяОшибками');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:16px;top:139px;width:468px;height:24px;',
			width: 468,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: 'Выполняемые действия',
			style: 'position:absolute;left:8px;top:322px;width:492px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'НастройкиОбмена',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:368px;width:492px;height:155px;',
			height: 155,width: 492,
			columns:
			[
				{
					text:'Порядок',
					width:'65',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Настройка обмена',
					width:'249',
					dataIndex:'НастройкаОбмена',
					flex:1,
				},
				{
					text:'Действие',
					width:'139',
					dataIndex:'ВыполняемоеДействие',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиВыполненияОбмена").data,
					fields: ['Ссылка','НомерСтроки','НастройкаОбмена','ВыполняемоеДействие',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиВыполненияОбмена/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НастройкаОбмена',
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
						var грид = Ext.getCmp('НастройкиОбмена');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:340px;width:492px;height:24px;',
			width: 492,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
				},
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				{
					text:'Действие1',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Действие2',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор настроек обмена',
				},
				'-',
				{
					text:'Скопировать',
					tooltip:'Скопировать выделенную группу настроек',
				},
				{
					text:'Установить действие',
					tooltip:'Установить действие у выделенных настроек',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:528px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 398,
			height: 19,
			style: 'position:absolute;left:102px;top:528px;width:398px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:508px;height:25px;',
			width: 508,
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