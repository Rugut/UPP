Ext.require(['Данные.Обработки.ФормированиеДокументовПоНДС'], function () 
{
	Ext.define('Обработки.ФормированиеДокументовПоНДС.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:289px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Формирование документов по НДС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНастройка',
			text: 'Настройка:',
			style: 'position:absolute;left:8px;top:8px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаНачала',
			text: 'На дату: ',
			style: 'position:absolute;left:8px;top:32px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:76px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:56px;width:516px;height:200px;',
			height: 200,width: 516,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'СформированныеДокументы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'Флаг',
					flex:1,
				},
				{
					text:'',
					width:'31',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Документ',
					width:'101',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'100',
					dataIndex:'Дата',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеДокументовПоНДС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Флаг',
					},
					{
						name:'Статус',
					},
					{
						name:'Документ',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
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
						var грид = Ext.getCmp('СформированныеДокументы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеДокументовПоНДС.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеДокументовПоНДС.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:502px;height:24px;',
			width: 502,
			height: 24,
			items:
			[
				{
					text:'Установить пометки на все строки',
					tooltip:'Установить пометки на все строки',
				},
				{
					text:'Убрать пометки всех строк',
					tooltip:'Убрать пометки всех строк',
				},
				'-',
				{
					text:'Провести документы',
					tooltip:'Провести документы',
				},
				{
					text:'Установить/снять пометку удаления',
					tooltip:'Установить/снять пометку удаления',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'',
				},
				{
					text:'Структура подчиненности документа',
					tooltip:'',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:22px;top:121px;width:436px;height:24px;',
			width: 436,
			height: 24,
			items:
			[
				{
					text:'Установить пометки на все строки',
					tooltip:'Установить пометки на все строки',
				},
				{
					text:'Убрать пометки всех строк',
					tooltip:'Убрать пометки всех строк',
				},
				'-',
				{
					text:'Провести документы',
					tooltip:'Провести документы',
				},
				{
					text:'Установить/снять пометку удаления',
					tooltip:'Установить/снять пометку удаления',
				},
				'-',
				{
					text:'Печать',
					tooltip:'Печать документов',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить',
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
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
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
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Сформированные документы',
			style: 'position:absolute;left:6px;top:6px;width:504px;height:20px;',
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
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Настройка.Представление',
			width: 448,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:76px;top:8px;width:448px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ФормированиеДокументовПоНДС.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ФормированиеДокументовПоНДС.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ФормированиеДокументовПоНДС.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ФормированиеДокументовПоНДС.ФормаСобытия");
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
			style: 'position:absolute;left:0px;top:264px;width:532px;height:25px;',
			width: 532,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать документы',
					tooltip:'Сформировать документы',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});