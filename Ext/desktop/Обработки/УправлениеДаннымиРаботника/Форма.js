Ext.define('Обработки.УправлениеДаннымиРаботника.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Иванова Анна Петровна',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:51px;width:780px;height:399px;',
			height: 399,width: 780,
			items:
			[
				{
					title:'Основное',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНачислениеЗарплаты',
			text: 'Начислить зарплату',
			style: 'position:absolute;left:37px;top:289px;width:145px;height:25px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			items:
			[
				{
					text:'Действие13',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Выбрать',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНДФЛ',
			text: 'Вычеты НДФЛ',
			style: 'position:absolute;left:37px;top:364px;width:189px;height:25px;',
		},
					]
				},
				{
					title:'Расчеты зарплата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Вид документа',
					width:'100',
				},
				{
					text:'Номер',
					width:'77',
				},
				{
					text:'Дата',
					width:'84',
				},
				{
					text:'Месяц',
					width:'84',
				},
				{
					text:'Организация',
					width:'93',
				},
				{
					text:'Комментарий',
					width:'161',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			items:
			[
				{
					text:'Оплата по среднему заработку',
				},
				{
					text:'Простой',
				},
				'-',
				{
					text:'Разовое удержание',
				},
				{
					text:'Сдельный наряд',
				},
				'-',
				'-',
				{
					text:'Расчет при увольнении',
				},
				'-',
				'-',
				{
					text:'Сверхурочные часы',
				},
				{
					text:'Больничный лист',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Единовременные пособия за счет ФСС',
				},
				'-',
				{
					text:'Отпуск',
				},
				{
					text:'Премия',
				},
				'-',
				{
					text:'Разовое начисление',
				},
				{
					text:'Начисление дивидендов',
				},
				{
					text:'Работа в праздники',
				},
				{
					text:'Начисление зарплаты',
				},
				{
					text:'Действие5',
				},
				{
					text:'Невыход',
				},
			]
		},
					]
				},
				{
					title:'Плановые данные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Вид документа',
					width:'100',
				},
				{
					text:'Дата',
					width:'140',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Прием на работу',
				},
				'-',
				{
					text:'Изменить плановые начисления',
				},
				{
					text:'Исполнительный лист',
				},
				{
					text:'Кадровое перемещение',
				},
				{
					text:'Действие2',
				},
				{
					text:'Увольнение',
				},
				'-',
				{
					text:'Отпуск по уходу',
				},
				{
					text:'Изменить плановые удержания',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИсполнительныйЛист',
			text: 'Ввести исполнительный лист',
			style: 'position:absolute;left:37px;top:364px;width:164px;height:25px;',
		},
					]
				},
				{
					title:'Кадровые данные',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись11',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: '',
			style: 'position:absolute;left:0px;top:257px;width:27px;height:142px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Вид документа',
					width:'100',
				},
				{
					text:'Дата',
					width:'140',
				},
				{
					text:'Организация',
					width:'109',
				},
				{
					text:'Сотрудники',
					width:'127',
				},
				{
					text:'Ответственный',
					width:'150',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			items:
			[
				'-',
				{
					text:'Кадровое перемещение',
				},
				{
					text:'Заявление об обмене...',
				},
				{
					text:'Прием на работу',
				},
				'-',
				'-',
				{
					text:'СЗВ-К',
				},
				{
					text:'Увольнение',
				},
				{
					text:'Анкета застрахованного лица',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПриемНаРаботу',
			text: 'Принять на работу',
			style: 'position:absolute;left:36px;top:289px;width:145px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКадровоеПеремещение',
			text: 'Переместить',
			style: 'position:absolute;left:36px;top:314px;width:145px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАнкетаЗастрахованногоЛица',
			text: 'Отправить анкету',
			style: 'position:absolute;left:36px;top:339px;width:145px;height:25px;',
		},
					]
				},
				{
					title:'Налоги',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись12',
			text: '  Все первичные документы',
			style: 'position:absolute;left:294px;top:269px;width:475px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:294px;top:312px;width:475px;height:76px;',
			height: 76,width: 475,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Вид документа',
					width:'100',
				},
				{
					text:'Дата',
					width:'84',
				},
				{
					text:'Период',
					width:'100',
				},
				{
					text:'Организация',
					width:'93',
				},
				{
					text:'Комментарий',
					width:'161',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:294px;top:287px;width:475px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отражение зарплаты в регл. учете',
				},
				{
					text:'Действие2',
				},
				{
					text:'Расчет ЕСН',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Начисление страховых взносов',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: '  Основные',
			style: 'position:absolute;left:37px;top:269px;width:239px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетЕСН',
			text: 'Рассчитать ЕСН',
			style: 'position:absolute;left:36px;top:289px;width:240px;height:25px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеЗПвРеглУчете',
			text: 'Отражение зарплаты в регл. учете',
			style: 'position:absolute;left:36px;top:314px;width:240px;height:25px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:26px;width:780px;height:25px;',
			items:
			[
				{
					text:'Расчеты, зарплата',
				},
				{
					text:'Основное',
				},
				'-',
				'-',
				{
					text:'Страховые взносы, ЕСН и отражение зарплаты в учете',
				},
				{
					text:'Кадровые данные',
				},
				'-',
				{
					text:'Плановые начисления и удержания',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:727px;top:2px;width:53px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Физлицо',
			style: 'position:absolute;left:151px;top:4px;width:229px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:380px;top:2px;width:201px;height:24px;',
			items:
			[
				{
					text:'Выбрать',
				},
				{
					text:'Открыть',
				},
				{
					text:'Ввести нового',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцСтрока',
			style: 'position:absolute;left:4px;top:4px;width:136px;height:19px;',
		},
	]
});