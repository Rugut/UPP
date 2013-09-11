Ext.require(['Данные.Обработки.ЗагрузкаДанныхИзТабличногоДокумента'], function () 
{
	Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:683px;height:573px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Загрузка данных из табличного документа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:56px;width:667px;height:466px;',
			height: 466,width: 667,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:653px;height:24px;',
			width: 653,
			height: 24,
			items:
			[
				{
					text:'Открыть файл...',
					tooltip:'Открыть файл...',
				},
				{
					text:'Сохранить в файл...',
					tooltip:'Сохранить в файл...',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить',
				},
				'-',
				{
					text:'Контроль заполнения',
					tooltip:'Контроль заполнения',
				},
				'-',
				{
					text:'Следующее примечание',
					tooltip:'Следующее примечание',
				},
				{
					text:'Предыдущее примечание',
					tooltip:'Предыдущее примечание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:398px;top:6px;width:214px;height:24px;',
			width: 214,
			height: 24,
			items:
			[
				{
					text:'Выбрать значение',
					tooltip:'',
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
			style: 'position:absolute;left:6px;top:30px;width:653px;height:24px;',
			width: 653,
			height: 24,
			items:
			[
				{
					text:'Восстановить настройки из файла...',
					tooltip:'Восстановить настройки из файла...',
				},
				{
					text:'Сохранить настройки в файл...',
					tooltip:'Сохранить настройки в файл...',
				},
				'-',
				{
					text:'Восстановить настройки...',
					tooltip:'Восстановить настройки...',
				},
				{
					text:'Сохранить настройки...',
					tooltip:'Сохранить настройки...',
				},
				'-',
				{
					text:'Перечитать ',
					tooltip:'Перечитать настройки колонок по умолчанию',
				},
				'-',
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить флажки',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять флажки',
				},
				'-',
				'-',
				{
					text:'События...',
					tooltip:'События...',
				},
			]
		},
		{
			id: 'ТаблицаЗагружаемыхРеквизитов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:653px;height:386px;',
			height: 386,width: 653,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Представление реквизита',
					width:'103',
					dataIndex:'ПредставлениеРеквизита',
					flex:1,
				},
				{
					text:'Имя реквизита',
					width:'92',
					dataIndex:'ИмяРеквизита',
					flex:1,
				},
				{
					text:'Может быть полем поиска',
					width:'21',
					dataIndex:'МожетБытьПолемПоиска',
					flex:1,
				},
				{
					text:'Поле поиска',
					width:'20',
					dataIndex:'ПолеПоиска',
					flex:1,
				},
				{
					text:'Доступное описание типов',
					width:'21',
					dataIndex:'ДоступноеОписаниеТипов',
					flex:1,
				},
				{
					text:'Описание типов',
					width:'133',
					dataIndex:'ОписаниеТипов',
					flex:1,
				},
				{
					text:'Режим загрузки',
					width:'55',
					dataIndex:'РежимЗагрузки',
					flex:1,
				},
				{
					text:'№ Колонки табличного документа',
					width:'51',
					dataIndex:'НомерКолонки',
					flex:1,
				},
				{
					text:'Значение по умолчанию',
					width:'77',
					dataIndex:'ЗначениеПоУмолчанию',
					flex:1,
				},
				{
					text:'Выражение',
					width:'105',
					dataIndex:'Выражение',
					flex:1,
				},
				{
					text:'Искать по',
					width:'115',
					dataIndex:'ИскатьПо',
					flex:1,
				},
				{
					text:'Связь по владельцу',
					width:'114',
					dataIndex:'СвязьПоВладельцу',
					flex:1,
				},
				{
					text:'Связь по типу',
					width:'96',
					dataIndex:'СвязьПоТипу',
					flex:1,
				},
				{
					text:'Элемент связи по типу',
					width:'105',
					dataIndex:'ЭлементСвязиПоТипу',
					flex:1,
				},
				{
					text:'ШиринаКолонки',
					width:'87',
					dataIndex:'ШиринаКолонки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхИзТабличногоДокумента/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'ПредставлениеРеквизита',
					},
					{
						name:'ИмяРеквизита',
					},
					{
						name:'МожетБытьПолемПоиска',
					},
					{
						name:'ПолеПоиска',
					},
					{
						name:'ДоступноеОписаниеТипов',
					},
					{
						name:'ОписаниеТипов',
					},
					{
						name:'РежимЗагрузки',
					},
					{
						name:'НомерКолонки',
					},
					{
						name:'ЗначениеПоУмолчанию',
					},
					{
						name:'Выражение',
					},
					{
						name:'ИскатьПо',
					},
					{
						name:'СвязьПоВладельцу',
					},
					{
						name:'СвязьПоТипу',
					},
					{
						name:'ЭлементСвязиПоТипу',
					},
					{
						name:'ШиринаКолонки',
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
						var грид = Ext.getCmp('ТаблицаЗагружаемыхРеквизитов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПерваяСтрокаДанныхТабличногоДокумента',
			text: 'Первая строка данных табличного документа:',
			style: 'position:absolute;left:6px;top:6px;width:239px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПерваяСтрокаДанныхТабличногоДокумента',
			style: 'position:absolute;left:249px;top:6px;width:41px;height:19px;',
			width: 41,
			height: 19,
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Не создавать новых элементов',
			labelWidth: 50,
			style: 'position:absolute;left:295px;top:6px;width:191px;height:19px;',
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Замещать существующие записи',
			labelWidth: 50,
			style: 'position:absolute;left:295px;top:6px;width:191px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:32px;width:632px;height:19px;',
			height: 19,width: 632,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:0px;width:246px;height:19px;',
			width: 246,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ссылка:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СсылкаИсточника.Представление',
			width: 247,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:0px;width:247px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТабличнаяЧастьИсточника',
			width: 193,
			height: 19,
			style: 'position:absolute;left:439px;top:0px;width:193px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид справочника:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Вид регистра:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:0px;width:246px;height:19px;',
			width: 246,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРежимЗагрузки',
			text: 'Режим загрузки:',
			style: 'position:absolute;left:8px;top:8px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:8px;width:247px;height:19px;',
			width: 247,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:548px;width:683px;height:25px;',
			width: 683,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
	});
});