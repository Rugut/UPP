Ext.require(['Данные.Обработки.КадровоеПланирование'], function () 
{
	Ext.define('Обработки.КадровоеПланирование.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Кадровое планирование',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:944px;height:25px;',
			items:
			[
				{
					text:'Состояние кадрового плана',
				},
				{
					text:'Исполнение кадрового плана',
				},
				'-',
				{
					text:'Коэффициент текучести кадров',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:539px;',
			height: 539,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:255px;width:200px;height:284px;',
			height: 284,width: 200,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Подразделения организаций',
					items:
					[
		{
			id: 'Подразделения',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:32px;width:200px;height:252px;',
			height: 252,width: 200,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КадровоеПланирование/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('Подразделения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КадровоеПланирование.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КадровоеПланирование.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:200px;height:31px;',
			height: 31,width: 200,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:6px;width:73px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 115,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:79px;top:6px;width:115px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.КадровоеПланирование.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КадровоеПланирование.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.КадровоеПланирование.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.КадровоеПланирование.ФормаСобытия");
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
			id: 'РабочиеМеста',
			xtype: 'grid',
			style: 'position:absolute;left:206px;top:255px;width:558px;height:147px;',
			height: 147,width: 558,
			columns:
			[
				{
					text:'Период',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Количество ставок',
					width:'50',
					dataIndex:'КоличествоСтавок',
					flex:1,
				},
				{
					text:'Занято ставок',
					width:'50',
					dataIndex:'ЗанятоСтавок',
					flex:1,
				},
				{
					text:'Вакантно',
					width:'50',
					dataIndex:'Вакантно',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КадровоеПланирование/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Период',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'КоличествоСтавок',
					},
					{
						name:'ЗанятоСтавок',
					},
					{
						name:'Вакантно',
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
						var грид = Ext.getCmp('РабочиеМеста');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КадровоеПланирование.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КадровоеПланирование.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:764px;height:24px;',
			items:
			[
				{
					text:'Добавить вакансию',
				},
				'-',
				{
					text:'Изменить кадровый план',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредприятие',
			text: ' Предприятие',
			style: 'position:absolute;left:0px;top:199px;width:764px;height:20px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:764px;height:169px;',
			height: 169,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			id: 'Вакансии',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:30px;width:764px;height:137px;',
			height: 137,width: 764,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'189',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'166',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Должность',
					width:'140',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Заявитель',
					width:'137',
					dataIndex:'Заявитель',
					flex:1,
				},
				{
					text:'Ответственный за вакансию',
					width:'151',
					dataIndex:'ОтветственныйЗаВакансию',
					flex:1,
				},
				{
					text:'Закрыть до',
					width:'94',
					dataIndex:'ПлановаяДатаЗакрытия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КадровоеПланирование/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'Заявитель',
					},
					{
						name:'ОтветственныйЗаВакансию',
					},
					{
						name:'ПлановаяДатаЗакрытия',
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
						var грид = Ext.getCmp('Вакансии');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КадровоеПланирование.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КадровоеПланирование.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:764px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Вакансии',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				'-',
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:558px;top:224px;width:206px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			id: 'ИзмененияКадровогоПлана',
			xtype: 'grid',
			style: 'position:absolute;left:206px;top:437px;width:558px;height:102px;',
			height: 102,width: 558,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'77',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата изменений',
					width:'105',
					dataIndex:'ДатаИзменений',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КадровоеПланирование/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Номер',
					},
					{
						name:'ДатаИзменений',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('ИзмененияКадровогоПлана');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КадровоеПланирование.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КадровоеПланирование.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:571px;top:408px;width:193px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Новый документ',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:854px;top:0px;width:146px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:778px;top:33px;width:214px;height:539px;',
			height: 539,width: 214,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
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