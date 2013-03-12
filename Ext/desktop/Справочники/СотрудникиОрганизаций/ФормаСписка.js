Ext.define('Справочники.СотрудникиОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сотрудники',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Поместить сотрудника в архив',
				},
				'-',
				'-',
				{
					text:'Наименованию',
				},
				{
					text:'Переместить в группу',
				},
				'-',
				{
					text:'Назначить группу доступа',
				},
				'-',
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Добавить',
				},
				'-',
				{
					text:'Скопировать',
				},
				'-',
				'-',
				{
					text:'Должности',
				},
				{
					text:'Отображать с группировкой',
				},
				{
					text:'Подразделению',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Таб. номеру',
				},
				'-',
				{
					text:'Использовать иерархию',
				},
				{
					text:'Использовать иерархию',
				},
				{
					text:'Наименованию',
				},
				{
					text:'Дате приема',
				},
				{
					text:'Должности',
				},
				'-',
				{
					text:'Таб. номеру',
				},
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Заполнить остатки отпусков',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Личные данные сотрудника',
				},
				{
					text:'Добавить',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Дате приема',
				},
				{
					text:'Изменить',
				},
				{
					text:'Показывать архив сотрудников',
				},
				{
					text:'Личные данные сотрудника',
				},
				{
					text:'Подразделению',
				},
				{
					text:'Данные сотрудника',
				},
				{
					text:'Справка',
				},
				{
					text:'Выбрать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:276px;top:159px;width:716px;height:249px;',
			height: 249,width: 716,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:716px;height:150px;',
			height: 150,width: 716,
			columns:
			[
				{
					text:'Сотрудники',
					width:'100',
				},
				{
					text:'Наименование',
					width:'142',
				},
				{
					text:'Код (Таб. №)',
					width:'71',
				},
				{
					text:'Организация',
					width:'126',
				},
				{
					text:'Подразделение',
					width:'123',
				},
				{
					text:'Должность',
					width:'120',
				},
				{
					text:'Вид договора',
					width:'140',
				},
				{
					text:'Принят',
					width:'60',
				},
				{
					text:'Уволен',
					width:'60',
				},
				{
					text:'Аванс',
					width:'60',
				},
				{
					text:'Номер лицевого счета',
					width:'120',
				},
				{
					text:'Банк',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:28px;width:175px;height:24px;',
			items:
			[
				{
					text:'Назначить группу доступа',
				},
				'-',
				{
					text:'Должности',
				},
				'-',
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Изменить личные данные',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Переместить в группу',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Таб. номеру',
				},
				{
					text:'Действие3',
				},
				{
					text:'Поместить сотрудника в архив',
				},
				'-',
				{
					text:'Подразделению',
				},
				{
					text:'Наименованию',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Дате приема',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:70px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:180px;width:716px;height:67px;',
			height: 67,width: 716,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстаткаОтпусков',
			style: 'position:absolute;left:636px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:262px;height:539px;',
			height: 539,width: 262,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:262px;height:515px;',
			height: 515,width: 262,
			items:
			[
				{
					title:'По группам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:262px;height:515px;',
			height: 515,width: 262,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:113px;width:182px;height:24px;',
			items:
			[
				{
					text:'Скопировать',
				},
				{
					text:'Новая группа',
				},
				{
					text:'Изменить',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Выбрать группу',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Обновить',
				},
				'-',
			]
		},
					]
				},
				{
					title:'По подразделениям',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:262px;height:515px;',
			height: 515,width: 262,
			columns:
			[
				{
					text:'Организация',
					width:'137',
				},
				{
					text:'Наименование',
					width:'195',
				},
				{
					text:'Код',
					width:'65',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:33px;top:166px;width:203px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'По виду договора',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:262px;height:515px;',
			height: 515,width: 262,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
				{
					text:'Вид договора',
					width:'100',
				},
			]
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:276px;top:414px;width:716px;height:158px;',
			height: 158,width: 716,
			items:
			[
				{
					title:'Форма медицинского страхования',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:1px;top:25px;width:715px;height:24px;',
			items:
			[
				{
					text:'Отчет',
				},
				{
					text:'Добровольное страхование',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Продлить ДМС',
				},
				{
					text:'Обязательное страхование',
				},
				'-',
				'-',
				{
					text:'&Изменить полис',
				},
				'-',
				{
					text:'Добровольное страхование родственника',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:1px;top:50px;width:715px;height:108px;',
			height: 108,width: 715,
			columns:
			[
				{
					text:'Серия',
					width:'80',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Выдан',
					width:'80',
				},
				{
					text:'До',
					width:'80',
				},
				{
					text:'Вид страхования',
					width:'100',
				},
				{
					text:'Программа страхования',
					width:'130',
				},
				{
					text:'Родственник',
					width:'120',
				},
			]
		},
					]
				},
				{
					title:'Форма остатков отпусков',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:55px;width:716px;height:24px;',
			items:
			[
				'-',
				{
					text:'Изменить количество дней отпуска в год',
				},
				'-',
				{
					text:'Редактировать остаток отпуска',
				},
				{
					text:'Справка по отпуску',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:1px;top:81px;width:715px;height:77px;',
			height: 77,width: 715,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'100',
				},
				{
					text:'Год работы',
					width:'100',
				},
				{
					text:'С',
					width:'80',
				},
				{
					text:'По',
					width:'80',
				},
				{
					text:'Количество дней',
					width:'70',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:276px;top:33px;width:716px;height:126px;',
			height: 126,width: 716,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});