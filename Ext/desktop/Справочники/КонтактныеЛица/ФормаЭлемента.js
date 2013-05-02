Ext.define('Справочники.КонтактныеЛица.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:595px;height:387px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контактные лица',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:505px;top:57px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:547px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Представление:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:57px;width:400px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:595px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				'-',
				{
					text:'Электронные письма',
				},
					]
				},
				'-',
				{
					text:'Написать письмо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:362px;width:595px;height:25px;',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:579px;height:270px;',
			height: 270,width: 579,
			items:
			[
				{
					title:'Адреса и телефоны',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:565px;height:214px;',
			height: 214,width: 565,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛица/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:6px;top:6px;width:565px;height:24px;',
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
					text:'Командная панель контактной информации редактировать в диалоге',
				},
				'-',
				{
					text:'Основная',
				},
			]
		},
					]
				},
				{
					title:'Контрагенты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:565px;height:214px;',
			height: 214,width: 565,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период',
					width:'84',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Контактное лицо контрагента',
					width:'120',
					dataIndex:'КонтактноеЛицоКонтрагента',
					flex:1,
				},
				{
					text:'Дата увольнения',
					width:'84',
					dataIndex:'ДатаУвольнения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛица/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'Контрагент',
					},
					{
						name:'КонтактноеЛицоКонтрагента',
					},
					{
						name:'ДатаУвольнения',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:565px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'События',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:565px;height:214px;',
			height: 214,width: 565,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛица/ВыбратьПоСсылке/100'},
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:565px;height:24px;',
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
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Поиск по номеру...',
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
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
				{
					text:'(Ввести на основании)',
				},
					]
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
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Поиск по номеру...',
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
				'-',
					]
				},
				{
					text:'Отключить отбор',
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
					text:'Обновить',
				},
			]
		},
					]
				},
				{
					title:'Дополнительная информация',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:565px;height:238px;',
			height: 238,width: 565,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:0px;top:69px;width:565px;height:169px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:92px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Напоминать о дне рождения за:',
			style: 'position:absolute;left:186px;top:0px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДнейДоНапоминания',
			style: 'position:absolute;left:376px;top:0px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУдостоверение',
			text: 'Удостоверение:',
			style: 'position:absolute;left:186px;top:25px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удостоверение',
			style: 'position:absolute;left:282px;top:25px;width:283px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:0px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:92px;top:25px;width:80px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:220px;',
			height: 220,width: 565,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛица/ВыбратьПоСсылке/100'},
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:565px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:220px;',
			height: 220,width: 565,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛица/ВыбратьПоСсылке/100'},
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:565px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
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
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФИО',
			text: 'Фамилия И.О.:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:98px;top:33px;width:201px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:304px;top:33px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:448px;top:33px;width:139px;height:19px;',
		},
	]
});