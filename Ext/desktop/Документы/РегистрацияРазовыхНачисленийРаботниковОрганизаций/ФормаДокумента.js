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
			style: 'position:absolute;left:396px;top:33px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:564px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:8px;top:57px;width:102px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:8px;top:33px;width:102px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:8px;top:461px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:396px;top:57px;width:88px;height:19px;text-align:left;',
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
					text:'Начисления списком сотрудников',
				},
				{
					text:'Доп. начисления списком сотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:488px;width:712px;height:25px;',
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
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Подбор',
				},
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
			xtype: 'radio',
			boxLabel: 'Целодневный (целосменный)',
			style: 'position:absolute;left:180px;top:7px;width:174px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внутрисменный',
			style: 'position:absolute;left:180px;top:26px;width:174px;height:19px;',
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
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
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
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Пересчитать вычет',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:170px;width:682px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
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
			style: 'position:absolute;left:30px;top:419px;width:459px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:491px;top:419px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
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
			tabBar:{hidden:true},
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
					text:'Отменить исправление',
				},
			]
		},
	]
});