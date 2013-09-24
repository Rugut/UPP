Ext.require(['Данные.Обработки.НастройкаПравДоступа'], function () 
{
	Ext.define('Обработки.НастройкаПравДоступа.НастройкаПравДоступа',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:854px;height:378px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка прав доступа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:854px;height:25px;',
			width: 854,
			height: 25,
			items:
			[
				{
					text:'Отображать наследуемые записи',
					tooltip:'',
				},
				'-',
				{
					text:'Заполнить',
					tooltip:'Заполнить настройками другой группы пользователей',
				},
				'-',
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:230px;top:33px;width:616px;height:312px;',
			height: 312,width: 616,
			items:
			[
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_Контрагенты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Видимость в списке',
					width:'63',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'55',
					dataIndex:'Запись_1',
					flex:1,
				},
				{
					text:'Просмотр доп. информации',
					width:'80',
					dataIndex:'Чтение_3',
					flex:1,
				},
				{
					text:'Редактирование доп. информации',
					width:'96',
					dataIndex:'Изменение_3',
					flex:1,
				},
				{
					text:'Просмотр данных',
					width:'60',
					dataIndex:'Чтение_2',
					flex:1,
				},
				{
					text:'Редактирование данных',
					width:'91',
					dataIndex:'Изменение_2',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
					},
					{
						name:'Чтение_3',
					},
					{
						name:'Изменение_3',
					},
					{
						name:'Чтение_2',
					},
					{
						name:'Изменение_2',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_Контрагенты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСлужебная',
			text: 'НадписьСлужебная',
			style: 'position:absolute;left:6px;top:112px;width:602px;height:45px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_Организации',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Чтение',
					width:'46',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'46',
					dataIndex:'Запись_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_Организации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_Подразделения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Чтение',
					width:'47',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'46',
					dataIndex:'Запись_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_Подразделения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_Проекты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Чтение',
					width:'47',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'49',
					dataIndex:'Запись_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_Проекты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_Склады',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Чтение',
					width:'46',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'48',
					dataIndex:'Запись_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_Склады');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_ФизическиеЛица',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Видимость в списке',
					width:'67',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'67',
					dataIndex:'Запись_1',
					flex:1,
				},
				{
					text:'Просмотр данных',
					width:'73',
					dataIndex:'Чтение_2',
					flex:1,
				},
				{
					text:'Редактирование данных',
					width:'88',
					dataIndex:'Изменение_2',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
					},
					{
						name:'Чтение_2',
					},
					{
						name:'Изменение_2',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_ФизическиеЛица');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_ВнешниеОбработки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Чтение',
					width:'45',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'45',
					dataIndex:'Запись_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_ВнешниеОбработки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_Заметки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Чтение',
					width:'49',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'48',
					dataIndex:'Запись_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_Заметки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_ПодразделенияОрганизаций',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Чтение',
					width:'49',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'57',
					dataIndex:'Запись_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_ПодразделенияОрганизаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_ЗаявкиКандидатов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Чтение',
					width:'51',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'51',
					dataIndex:'Запись_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_ЗаявкиКандидатов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТаблицаПравДоступа_Номенклатура',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Запись',
					width:'48',
					dataIndex:'Чтение_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_Номенклатура');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
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
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
				},
			]
		},
		{
			id: 'ТаблицаПравДоступа_Спецификации',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:224px;',
			height: 224,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Чтение',
					width:'47',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'47',
					dataIndex:'Запись_1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Запись_1',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_Спецификации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
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
			id: 'ТаблицаПравДоступа_ЦеныНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:602px;height:223px;',
			height: 223,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Объект доступа',
					width:'100',
					dataIndex:'ОбъектДоступа',
					flex:1,
				},
				{
					text:'Группа пользователей',
					width:'100',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Владелец прав доступа',
					width:'100',
					dataIndex:'ВладелецПравДоступа',
					flex:1,
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
					dataIndex:'ВидНаследованияПравДоступаИерархическихСправочников',
					flex:1,
				},
				{
					text:'Цены компании',
					width:'60',
					dataIndex:'ГруппаЦеныКомпании',
					flex:1,
				},
				{
					text:'Чтение',
					width:'45',
					dataIndex:'Чтение_1',
					flex:1,
				},
				{
					text:'Запись',
					width:'49',
					dataIndex:'Изменение_1',
					flex:1,
				},
				{
					text:'Цены контрагентов',
					width:'106',
					dataIndex:'ГруппаЦеныКонтрагентов',
					flex:1,
				},
				{
					text:'Чтение',
					width:'48',
					dataIndex:'Чтение_2',
					flex:1,
				},
				{
					text:'Запись',
					width:'58',
					dataIndex:'Изменение_2',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектДоступа',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ВладелецПравДоступа',
					},
					{
						name:'ВидНаследованияПравДоступаИерархическихСправочников',
					},
					{
						name:'ГруппаЦеныКомпании',
					},
					{
						name:'Чтение_1',
					},
					{
						name:'Изменение_1',
					},
					{
						name:'ГруппаЦеныКонтрагентов',
					},
					{
						name:'Чтение_2',
					},
					{
						name:'Изменение_2',
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
						var грид = Ext.getCmp('ТаблицаПравДоступа_ЦеныНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			width: 602,
			height: 24,
			items:
			[
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
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить все флажки в текущей колонке',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять  все флажки в текущей колонке',
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
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:215px;height:312px;',
			height: 312,width: 215,
			columns:
			[
				{
					text:'Наименование',
					width:'184',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаПравДоступа.НастройкаПравДоступаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:353px;width:854px;height:25px;',
			width: 854,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'Записать и закрыть',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});