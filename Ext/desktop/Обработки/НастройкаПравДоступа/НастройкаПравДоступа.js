Ext.define('Обработки.НастройкаПравДоступа.НастройкаПравДоступа',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:854px;height:378px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка прав доступа',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:230px;top:33px;width:616px;height:312px;',
			height: 312,width: 616,
			items:
			[
				{
					title:'Контрагенты',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
		{
			xtype: 'label',
			name: 'НадписьСлужебная',
			text: 'НадписьСлужебная',
			style: 'position:absolute;left:6px;top:112px;width:602px;height:45px;text-align:center;',
		},
					]
				},
				{
					title:'Организации',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Подразделения',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Проекты',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Склады',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Физические лица',
					items:
					[
		{
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
					width:'89',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Внешние обработки',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Заметки',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Подразделения организаций',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Кандидаты',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Спецификации',
					items:
					[
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Цены номенклатуры',
					items:
					[
		{
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
					width:'61',
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
					width:'50',
					dataIndex:'Изменение_1',
					flex:1,
				},
				{
					text:'Цены контрагентов',
					width:'107',
					dataIndex:'ГруппаЦеныКонтрагентов',
					flex:1,
				},
				{
					text:'Чтение',
					width:'49',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
					]
				},
				{
					title:'Страница служебная',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:215px;height:312px;',
			height: 312,width: 215,
			columns:
			[
				{
					text:'Наименование',
					width:'185',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаПравДоступа/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:854px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Отображать наследуемые записи',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:353px;width:854px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});