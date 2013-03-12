Ext.define('Документы.РегистрацияРазовыхНачисленийРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:712px;height:513px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация разовых начислений сотрудникам организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:396px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:484px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:564px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:584px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:461px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:461px;width:608px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:396px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:484px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Зарплата к выплате (начисленные суммы за вычетом налогов)',
				},
				'-',
				{
					text:'Рассчитать',
				},
				'-',
				{
					text:'Зарплата к выплате (начисленные суммы)',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Начисления списком сотрудников',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Ввести показатели для расчета',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Доп. начисления списком сотрудников',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Редактировать номер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:712px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:696px;height:334px;',
			height: 334,width: 696,
			items:
			[
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:61px;width:682px;height:24px;',
			items:
			[
				{
					text:'Действие16',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие12',
				},
				{
					text:'Дополнительно',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:85px;width:682px;height:223px;',
			height: 223,width: 682,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
				},
				{
					text:'№',
					width:'42',
				},
				{
					text:'Таб. №',
					width:'80',
				},
				{
					text:'Сотрудник',
					width:'118',
				},
				{
					text:'Начисление',
					width:'125',
				},
				{
					text:'Подразделение',
					width:'125',
				},
				{
					text:'Показатели для расчета начисления',
					width:'190',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Результат',
					width:'80',
				},
				{
					text:'Дата начала',
					width:'96',
				},
				{
					text:'Дата окончания',
					width:'96',
				},
				{
					text:'Оплачивать часов',
					width:'96',
				},
				{
					text:'Отработано дней',
					width:'100',
				},
				{
					text:'Отработано часов',
					width:'100',
				},
				{
					text:'Оплачено дней/часов',
					width:'80',
				},
				{
					text:'Зачесть в норму дней',
					width:'100',
				},
				{
					text:'Зачесть в норму часов',
					width:'100',
				},
				{
					text:'Отработано дней по пятидневке',
					width:'100',
				},
				{
					text:'Зачесть в норму дней по пятидневке',
					width:'100',
				},
				{
					text:'Отработано часов по пятидневке',
					width:'100',
				},
				{
					text:'Норма часов по пятидневке',
					width:'100',
				},
				{
					text:'Дата начала события',
					width:'100',
				},
				{
					text:'Сторно',
					width:'45',
				},
				{
					text:'Сторнируемый документ',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРегистрацииВремени',
			text: 'Период оплачиваемого времени:',
			style: 'position:absolute;left:6px;top:7px;width:170px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:229px;width:682px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
			]
		},
					]
				},
				{
					title:'Доп. начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:682px;height:24px;',
			items:
			[
				{
					text:'Действие11',
				},
				{
					text:'Пересчитать вычет',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Дополнительно',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие17',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:170px;width:682px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие14',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:682px;height:284px;',
			height: 284,width: 682,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
				},
				{
					text:'№',
					width:'42',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Начисление',
					width:'120',
				},
				{
					text:'Договор-основание',
					width:'100',
				},
				{
					text:'Показатели для расчета начисления',
					width:'190',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Показатель1',
					width:'60',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 2',
					width:'60',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 3',
					width:'60',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 4',
					width:'60',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 5',
					width:'60',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 6',
					width:'60',
				},
				{
					text:'Результат',
					width:'76',
				},
				{
					text:'Оплачено дней/часов',
					width:'68',
				},
				{
					text:'Дата начала',
					width:'87',
				},
				{
					text:'Дата окончания',
					width:'87',
				},
				{
					text:'Код вычета',
					width:'62',
				},
				{
					text:'Сумма вычета (количество детей)',
					width:'100',
				},
				{
					text:'Сторно',
					width:'41',
				},
				{
					text:'Сторнируемый документ',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:419px;width:459px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:491px;top:419px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:575px;top:419px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:316px;height:25px;',
			items:
			[
				'-',
				{
					text:'Расчеты текущего сотрудника',
				},
				{
					text:'Расчеты нескольких сотрудников',
				},
				'-',
				{
					text:'Весь документ',
				},
				{
					text:'Отменить исправление',
				},
			]
		},
	]
});