Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:767px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выполнение загрузки',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:7px;width:752px;height:360px;',
			height: 360,width: 752,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ЗаполнениеТаблицыПолей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:752px;height:320px;',
			height: 320,width: 752,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Имя поля из файла',
					width:'280',
					dataIndex:'ИмяРеквизита',
					flex:1,
				},
				{
					text:'Имя или вид реквизита в информационной базе',
					width:'280',
					dataIndex:'НазначениеРеквизита1С',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭкспортИмпортКонтактныхДанныхОбъектов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ИмяРеквизита',
					},
					{
						name:'НазначениеРеквизита1С',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:752px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Настройка формирования наименования объекта',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Настройка соответствия полей файла и контактных данных объектов',
			style: 'position:absolute;left:0px;top:0px;width:752px;height:16px;',
		},
					]
				},
				{
					title:'НастройкаПоискаОбъектов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:752px;height:320px;',
			height: 320,width: 752,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Имя реквизита в информационной базе',
					width:'280',
					dataIndex:'Значение1С',
					flex:1,
				},
				{
					text:'Условие',
					width:'100',
					dataIndex:'Условие',
					flex:1,
				},
				{
					text:'Имя поля из файла',
					width:'280',
					dataIndex:'ЗначениеФайла',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭкспортИмпортКонтактныхДанныхОбъектов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Использование',
					},
					{
						name:'Значение1С',
					},
					{
						name:'Условие',
					},
					{
						name:'ЗначениеФайла',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:752px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Настройка критериев поиска объектов в текущей информационной базе',
			style: 'position:absolute;left:0px;top:0px;width:752px;height:16px;',
		},
					]
				},
				{
					title:'НастройкаЗагрузкиЗначений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:69px;width:752px;height:291px;',
			height: 291,width: 752,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Представление объекта файла',
					width:'180',
					dataIndex:'ПредставлениеОбъектаФайла',
					flex:1,
				},
				{
					text:'Наименование объекта в ИБ',
					width:'160',
					dataIndex:'ПредставлениеОбъекта1С',
					flex:1,
				},
				{
					text:'Объект в ИБ',
					width:'120',
					dataIndex:'Объект1С',
					flex:1,
				},
				{
					text:'Юр/Физ лицо',
					width:'80',
					dataIndex:'ЮрФизЛицо',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'160',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭкспортИмпортКонтактныхДанныхОбъектов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Использование',
					},
					{
						name:'ПредставлениеОбъектаФайла',
					},
					{
						name:'ПредставлениеОбъекта1С',
					},
					{
						name:'Объект1С',
					},
					{
						name:'ЮрФизЛицо',
					},
					{
						name:'Владелец',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:45px;width:752px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Посмотреть информацию из файла по текущей строке',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Настройка загрузки данных в текущую информационную базу',
			style: 'position:absolute;left:0px;top:0px;width:752px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РодительДляЗагрузки',
			style: 'position:absolute;left:200px;top:21px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодительДляЗагрузки',
			text: 'Создавать новые элементы в группе:',
			style: 'position:absolute;left:0px;top:21px;width:197px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сохранять соответствие параметров и настройки поиска объектов для последующих загрузок',
			style: 'position:absolute;left:8px;top:372px;width:506px;height:15px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:767px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<< Назад',
				},
				'-',
				{
					text:'Далее >>',
				},
				'-',
				{
					text:'Готово',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});