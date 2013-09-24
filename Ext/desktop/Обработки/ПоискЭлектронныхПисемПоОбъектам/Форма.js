Ext.require(['Данные.Обработки.ПоискЭлектронныхПисемПоОбъектам'], function () 
{
	Ext.define('Обработки.ПоискЭлектронныхПисемПоОбъектам.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Поиск электронных писем по объектам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			width: 658,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
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
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить интервал дат...',
					tooltip:'',
				},
				{
					text:'Поиск по номеру...',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
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
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
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
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
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
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить интервал дат...',
					tooltip:'',
				},
				{
					text:'Поиск по номеру...',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
				{
					text:'(Ввести на основании)',
					tooltip:'Ввести на основании',
					iconCls:'x-InputOnBasis',
				},
				{
					text:'(Ввести на основании)',
					tooltip:'Ввести на основании',
					iconCls:'x-InputOnBasis',
				},
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
					text:'Обновить',
					tooltip:'c4f29e0-d168-4fe0-8e64-e982fabf259',
					iconCls:'x-Refresh',
				},
			]
		},
		{
			id: 'ЭлектронныеПисьмаСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:680px;height:320px;',
			height: 320,width: 680,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'НеРассмотрено',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'СостояниеПотомкаПисьма',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'СтатусПисьма',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'ЕстьВложения',
					flex:1,
				},
				{
					text:'Создано',
					width:'80',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Отправлено/получено',
					width:'80',
					dataIndex:'ДатаОтправленияПолучения',
					flex:1,
				},
				{
					text:'От кого',
					width:'120',
					dataIndex:'ОтправительИмя',
					flex:1,
				},
				{
					text:'Кому',
					width:'120',
					dataIndex:'КомуПредставление',
					flex:1,
				},
				{
					text:'Тема',
					width:'220',
					dataIndex:'Тема',
					flex:1,
				},
				{
					text:'Номер',
					width:'20',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'26',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'79',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Основание',
					width:'85',
					dataIndex:'Основание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискЭлектронныхПисемПоОбъектам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НеРассмотрено',
					},
					{
						name:'СостояниеПотомкаПисьма',
					},
					{
						name:'СтатусПисьма',
					},
					{
						name:'ЕстьВложения',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаОтправленияПолучения',
					},
					{
						name:'ОтправительИмя',
					},
					{
						name:'КомуПредставление',
					},
					{
						name:'Тема',
					},
					{
						name:'Номер',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Основание',
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
						var грид = Ext.getCmp('ЭлектронныеПисьмаСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПоискЭлектронныхПисемПоОбъектам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоискЭлектронныхПисемПоОбъектам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:50px;top:33px;width:180px;height:19px;',
			width: 180,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПолеНастройкиОбъектПоиска.Представление',
			width: 452,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:236px;top:33px;width:452px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПоискЭлектронныхПисемПоОбъектам.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПоискЭлектронныхПисемПоОбъектам.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПоискЭлектронныхПисемПоОбъектам.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПоискЭлектронныхПисемПоОбъектам.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Отбор:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:658px;top:0px;width:38px;height:25px;',
			width: 38,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});