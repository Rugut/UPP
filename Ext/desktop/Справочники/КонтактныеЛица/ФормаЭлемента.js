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
			style: 'position:absolute;left:505px;top:57px;width:40px;height:19px;',
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
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
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
				'-',
				'-',
				{
					text:'Написать письмо',
				},
				{
					text:'Электронные письма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:362px;width:595px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
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
				},
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Вид',
					width:'173',
				},
				{
					text:'Представление',
					width:'244',
				},
				{
					text:'Комментарий',
					width:'133',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:565px;height:24px;',
			items:
			[
				{
					text:'Отключить отбор',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Командная панель контактной информации редактировать в диалоге',
				},
				'-',
				{
					text:'Закончить редактирование',
				},
				{
					text:'Основная',
				},
				'-',
				{
					text:'&Скопировать',
				},
				'-',
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'&Удалить',
				},
				{
					text:'',
				},
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Установить отбор и сортировку списка...',
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
				},
				{
					text:'Период',
					width:'84',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Контактное лицо контрагента',
					width:'120',
				},
				{
					text:'Дата увольнения',
					width:'84',
				},
			]
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
				},
				{
					text:'',
					width:'32',
				},
				{
					text:'',
					width:'31',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Вид события',
					width:'80',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Описание',
					width:'180',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:565px;height:24px;',
			items:
			[
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Обновить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'',
				},
				{
					text:'Поиск по номеру...',
				},
				{
					text:'',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'',
				},
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Поиск по номеру...',
				},
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				'-',
				{
					text:'&Изменить',
				},
				'-',
				'-',
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
			style: 'position:absolute;left:186px;top:25px;width:87px;height:19px;',
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
			style: 'position:absolute;left:0px;top:25px;width:84px;height:19px;',
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
				},
				{
					text:'Свойство',
					width:'146',
				},
				{
					text:'Значение',
					width:'246',
				},
			]
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
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Категория',
					width:'360',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:565px;height:24px;',
			items:
			[
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
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
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
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