Ext.define('Справочники.КонтактныеЛицаКонтрагентов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:595px;height:413px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контактные лица контрагентов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:486px;top:85px;width:30px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 68,
			height: 19,
			style: 'position:absolute;left:519px;top:85px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Представление:',
			style: 'position:absolute;left:8px;top:84px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 372,
			height: 19,
			style: 'position:absolute;left:103px;top:84px;width:372px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:58px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Владелец',
			width: 484,
			height: 19,
			style: 'position:absolute;left:103px;top:58px;width:484px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтактноеЛицо',
			text: 'Контактное лицо:',
			style: 'position:absolute;left:8px;top:33px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'КонтактноеЛицо',
			width: 484,
			height: 19,
			style: 'position:absolute;left:103px;top:33px;width:484px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:112px;width:579px;height:243px;',
			height: 243,width: 579,
			items:
			[
				{
					title:'Адреса и телефоны',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:565px;height:55px;',
			height: 55,width: 565,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Вид',
					width:'173',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Представление',
					width:'244',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'133',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛицаКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Тип',
					},
					{
						name:'Вид',
					},
					{
						name:'Представление',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Работника контрагента',
			style: 'position:absolute;left:6px;top:8px;width:565px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:162px;width:565px;height:55px;',
			height: 55,width: 565,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Вид',
					width:'173',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Представление',
					width:'244',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'133',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛицаКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Тип',
					},
					{
						name:'Вид',
					},
					{
						name:'Представление',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:138px;width:565px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
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
					text:'История отборов',
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
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'Основная',
				},
				'-',
				{
					text:'Переместить в список КИ контактного лица контрагента',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Личная',
			style: 'position:absolute;left:6px;top:120px;width:565px;height:16px;',
		},
					]
				},
				{
					title:'События',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:565px;height:187px;',
			height: 187,width: 565,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'',
					width:'32',
					dataIndex:'СостояниеСобытия',
					flex:1,
				},
				{
					text:'',
					width:'31',
					dataIndex:'Важность',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
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
					text:'Вид события',
					width:'80',
					dataIndex:'ВидСобытия',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Описание',
					width:'180',
					dataIndex:'ОписаниеСобытия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛицаКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'СостояниеСобытия',
					},
					{
						name:'Важность',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ВидСобытия',
					},
					{
						name:'Ответственный',
					},
					{
						name:'ОписаниеСобытия',
					},
				]
			},
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Комментарий',
			style: 'position:absolute;left:6px;top:82px;width:565px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 565,
			height: 103,
			style: 'position:absolute;left:6px;top:104px;width:565px;height:103px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРольКонтактногоЛица',
			text: 'Роль контактного лица:',
			style: 'position:absolute;left:6px;top:33px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'РольКонтактногоЛица',
			width: 436,
			height: 19,
			style: 'position:absolute;left:135px;top:33px;width:436px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:6px;top:7px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Должность',
			width: 437,
			height: 19,
			style: 'position:absolute;left:134px;top:7px;width:437px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекущееСостояние',
			text: 'Текущее состояние:',
			style: 'position:absolute;left:6px;top:57px;width:121px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Состояние',
			text: 'Работает',
			style: 'position:absolute;left:135px;top:57px;width:436px;height:19px;',
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:193px;',
			height: 193,width: 565,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'146',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'246',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛицаКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:193px;',
			height: 193,width: 565,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'360',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛицаКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарийПросмотр',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:361px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КомментарийПросмотр',
			width: 500,
			height: 19,
			style: 'position:absolute;left:87px;top:361px;width:500px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:595px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:595px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
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