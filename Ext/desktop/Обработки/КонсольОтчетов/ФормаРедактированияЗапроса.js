Ext.require(['Данные.Обработки.КонсольОтчетов'], function () 
{
	Ext.define('Обработки.КонсольОтчетов.ФормаРедактированияЗапроса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:309px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Редактирование запроса',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:388px;height:270px;',
			height: 270,width: 388,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя:',
			style: 'position:absolute;left:6px;top:6px;width:29px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 322,
			height: 19,
			style: 'position:absolute;left:40px;top:6px;width:322px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматическое заполнение настроек',
			style: 'position:absolute;left:6px;top:241px;width:221px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:234px;top:238px;width:128px;height:24px;',
			width: 128,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Конструктор',
					tooltip:'',
				},
				{
					text:'Проверить запрос',
					tooltip:'Проверить запрос',
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
			style: 'position:absolute;left:6px;top:6px;width:356px;height:24px;',
			width: 356,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
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
					text:'&Скопировать',
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
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Заполнить',
					tooltip:'Заполнить параметры запроса',
				},
			]
		},
		{
			id: 'Параметры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:356px;height:228px;',
			height: 228,width: 356,
			columns:
			[
				{
					text:'Имя параметра',
					width:'122',
					dataIndex:'ИмяПараметра',
					flex:1,
				},
				{
					text:'Тип',
					width:'52',
					dataIndex:'ЭтоВыражение',
					flex:1,
				},
				{
					text:'Значение параметра',
					width:'188',
					dataIndex:'ЗначениеПараметра',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяПараметра',
					},
					{
						name:'ЭтоВыражение',
					},
					{
						name:'ЗначениеПараметра',
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
						var грид = Ext.getCmp('Параметры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаРедактированияЗапросаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаРедактированияЗапросаСобытия");
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
			id: 'Представления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:356px;height:256px;',
			height: 256,width: 356,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Формат',
					width:'100',
					dataIndex:'Формат',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'Представление',
					},
					{
						name:'Формат',
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
						var грид = Ext.getCmp('Представления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаРедактированияЗапросаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаРедактированияЗапросаСобытия");
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
			xtype: 'checkbox',
			boxLabel: 'в таблицу',
			style: 'position:absolute;left:18px;top:28px;width:115px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Возможен вывод отчета',
			style: 'position:absolute;left:6px;top:6px;width:287px;height:120px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'в диаграмму',
			style: 'position:absolute;left:18px;top:52px;width:115px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'в сводную таблицу',
			style: 'position:absolute;left:18px;top:76px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'По умолчанию выводить в:',
			style: 'position:absolute;left:6px;top:132px;width:137px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:148px;top:132px;width:145px;height:19px;',
			width: 145,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Отчет расшифровки:',
			style: 'position:absolute;left:6px;top:156px;width:137px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетРасшифровкиРедактор',
			width: 145,
			height: 19,
			style: 'position:absolute;left:148px;top:156px;width:145px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'в сводную диаграмму',
			style: 'position:absolute;left:18px;top:100px;width:134px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:285px;width:400px;height:24px;',
			width: 400,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
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
		],
	}],
	dockedItems:
	[
	]
	});
});