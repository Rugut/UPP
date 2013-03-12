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
			style: 'position:absolute;left:486px;top:85px;width:30px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:519px;top:85px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Представление:',
			style: 'position:absolute;left:8px;top:84px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:103px;top:84px;width:372px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:58px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:103px;top:58px;width:484px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтактноеЛицо',
			text: 'Контактное лицо:',
			style: 'position:absolute;left:8px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо',
			style: 'position:absolute;left:103px;top:33px;width:484px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:595px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:595px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
			]
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
			style: 'position:absolute;left:6px;top:26px;width:565px;height:24px;',
			items:
			[
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Основная',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Переместить в список КИ личная',
				},
				'-',
				{
					text:'&Удалить',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Командная панель контактной информации редактировать в диалоге',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
			]
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
			style: 'position:absolute;left:6px;top:138px;width:565px;height:24px;',
			items:
			[
				{
					text:'&Удалить',
				},
				{
					text:'&Скопировать',
				},
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
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Основная',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Добавить',
				},
				'-',
				'-',
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Переместить в список КИ контактного лица контрагента',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'&Изменить',
				},
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
			style: 'position:absolute;left:6px;top:30px;width:565px;height:187px;',
			height: 187,width: 565,
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
					text:'&Добавить',
				},
				'-',
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Отключить отбор',
				},
				'-',
				'-',
				{
					text:'Поиск по номеру...',
				},
				{
					text:'',
				},
				{
					text:'Обновить',
				},
				{
					text:'',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Поиск по номеру...',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Установить интервал дат...',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'',
				},
				{
					text:'&Изменить',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:104px;width:565px;height:103px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРольКонтактногоЛица',
			text: 'Роль контактного лица:',
			style: 'position:absolute;left:6px;top:33px;width:121px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РольКонтактногоЛица',
			style: 'position:absolute;left:135px;top:33px;width:436px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:6px;top:7px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
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
			style: 'position:absolute;left:6px;top:24px;width:565px;height:193px;',
			height: 193,width: 565,
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
					text:'&Изменить',
				},
				{
					text:'&Добавить',
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
			name: 'НадписьКомментарийПросмотр',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:361px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КомментарийПросмотр',
			style: 'position:absolute;left:87px;top:361px;width:500px;height:19px;',
		},
	]
});