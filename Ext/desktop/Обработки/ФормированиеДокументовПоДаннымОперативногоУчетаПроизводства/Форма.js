Ext.require(['Данные.Обработки.ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства'], function () 
{
	Ext.define('Обработки.ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Формирование документов по данным оперативного учета производства',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'по:',
			style: 'position:absolute;left:158px;top:32px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:176px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройка',
			text: 'Настройка:',
			style: 'position:absolute;left:8px;top:8px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаНачала',
			text: 'За период с: ',
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
			style: 'position:absolute;left:8px;top:59px;width:516px;height:200px;',
			height: 200,width: 516,
			items:
			[
				{
					items:
					[
		{
			id: 'СформированныеДокументы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
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
					width:'21',
					dataIndex:'Флаг',
					flex:1,
				},
				{
					text:'',
					width:'32',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Документ',
					width:'120',
					dataIndex:'Документ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Документ',
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
						Ext.require(['Справочники.ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
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
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
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
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
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
					]
				},
				{
					items:
					[
		{
			id: 'УчтенныеДокументы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
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
					width:'21',
					dataIndex:'Флаг',
					flex:1,
				},
				{
					text:'',
					width:'32',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Документ',
					width:'120',
					dataIndex:'Документ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Документ',
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
						var грид = Ext.getCmp('УчтенныеДокументы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
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
					tooltip:'0ebc47b-f4d9-439c-acd3-fdc624fbac2',
					iconCls:'x-Post',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
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
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
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
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Настройка',
			width: 448,
			height: 19,
			style: 'position:absolute;left:76px;top:8px;width:448px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:32px;width:19px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:532px;height:25px;',
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
					iconCls:'x-Close',
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