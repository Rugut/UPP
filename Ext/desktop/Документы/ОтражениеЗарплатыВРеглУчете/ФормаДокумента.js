Ext.define('Документы.ОтражениеЗарплатыВРеглУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:659px;height:479px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отражение зарплаты в регламентированном учете',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:326px;top:33px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:431px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:513px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:531px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:326px;top:57px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:431px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:326px;top:81px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:431px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:659px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Открыть свойства',
				},
				'-',
				{
					text:'Очистить',
				},
				{
					text:'Открыть категории',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:454px;width:659px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:110px;width:643px;height:312px;',
			height: 312,width: 643,
			items:
			[
				{
					title:'Проводки',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:629px;height:24px;',
			items:
			[
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'Отчисления в резервы',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Пустой счет дебета',
				},
				{
					text:'Прочие',
				},
				{
					text:'Удержания',
				},
				'-',
				{
					text:'Все проводки',
				},
				'-',
				'-',
				'-',
				{
					text:'Сформировать проводки',
				},
				{
					text:'Начисления',
				},
				{
					text:'Списание РБП',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Изменить',
				},
				{
					text:'ЕСН и взносы в ПФР',
				},
				{
					text:'НДФЛ',
				},
				{
					text:'Взносы в ФСС на НС и ПЗ',
				},
				{
					text:'Пособия за счет ФСС',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Пустой счет кредита',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:629px;height:262px;',
			height: 262,width: 629,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Счет Дт',
					width:'60',
				},
				{
					text:'Подразделение Дт',
					width:'100',
				},
				{
					text:'Субконто Дт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Способ распределения затрат',
					width:'100',
				},
				{
					text:'Счет Кт',
					width:'60',
				},
				{
					text:'Подразделение Кт',
					width:'100',
				},
				{
					text:'Субконто Кт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Код по ОКАТО',
					width:'101',
				},
				{
					text:'КПП',
					width:'101',
				},
				{
					text:'Счет Дт НУ',
					width:'71',
				},
				{
					text:'Субконто Дт НУ',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Счет Кт НУ',
					width:'72',
				},
				{
					text:'Субконто Кт НУ',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Отражение в УСН',
					width:'84',
				},
				{
					text:'Вид начисления (удержания)',
					width:'100',
				},
				{
					text:'Вид начислений оплаты труда по статье 255 НК',
					width:'100',
				},
				{
					text:'Сумма',
					width:'75',
				},
				{
					text:'Сумма НУ',
					width:'100',
				},
				{
					text:'Сумма ПР',
					width:'100',
				},
				{
					text:'Сумма ВР',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Основные начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:629px;height:24px;',
			items:
			[
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Подбор',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:629px;height:262px;',
			height: 262,width: 629,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'116',
				},
				{
					text:'Вид расчета',
					width:'116',
				},
				{
					text:'Дата начала',
					width:'97',
				},
				{
					text:'Дата окончания',
					width:'97',
				},
				{
					text:'Счет Дт',
					width:'49',
				},
				{
					text:'Подразделение Дт',
					width:'100',
				},
				{
					text:'Субконто Дт',
					width:'104',
				},
				{
					text:'',
					width:'104',
				},
				{
					text:'',
					width:'104',
				},
				{
					text:'Способ распределения затрат',
					width:'100',
				},
				{
					text:'Счет Кт',
					width:'49',
				},
				{
					text:'Подразделение Кт',
					width:'100',
				},
				{
					text:'Субконто Кт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Счет Дт НУ',
					width:'65',
				},
				{
					text:'Субконто Дт НУ',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Счет Кт НУ',
					width:'73',
				},
				{
					text:'Субконто Кт НУ',
					width:'127',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Отражение в УСН',
					width:'85',
				},
				{
					text:'Вид начислений оплаты труда по статье 255 НК',
					width:'100',
				},
				{
					text:'Результат',
					width:'81',
				},
				{
					text:'Сумма НУ',
					width:'100',
				},
				{
					text:'Сумма ПР',
					width:'100',
				},
				{
					text:'Сумма ВР',
					width:'100',
				},
				{
					text:'Сторно',
					width:'42',
				},
				{
					text:'Документ основание',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Дополнительные начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:629px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Подбор',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Добавить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:629px;height:262px;',
			height: 262,width: 629,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Вид расчета',
					width:'100',
				},
				{
					text:'Счет Дт',
					width:'52',
				},
				{
					text:'Подразделение Дт',
					width:'100',
				},
				{
					text:'Субконто Дт',
					width:'110',
				},
				{
					text:'',
					width:'74',
				},
				{
					text:'',
					width:'74',
				},
				{
					text:'Способ распределения затрат',
					width:'100',
				},
				{
					text:'Счет Кт',
					width:'52',
				},
				{
					text:'Подразделение Кт',
					width:'100',
				},
				{
					text:'Субконто Кт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Счет Дт НУ',
					width:'67',
				},
				{
					text:'Субконто Дт НУ',
					width:'92',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Счет Кт НУ',
					width:'75',
				},
				{
					text:'Субконто Кт НУ',
					width:'96',
				},
				{
					text:'',
					width:'129',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Отражение в УСН',
					width:'88',
				},
				{
					text:'Вид начислений оплаты труда по статье 255 НК',
					width:'100',
				},
				{
					text:'Результат',
					width:'77',
				},
				{
					text:'Сумма НУ',
					width:'100',
				},
				{
					text:'Сумма ПР',
					width:'100',
				},
				{
					text:'Сумма ВР',
					width:'100',
				},
				{
					text:'Сторно',
					width:'38',
				},
				{
					text:'Документ основание',
					width:'104',
				},
				{
					text:'Дата начисления',
					width:'80',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:427px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:427px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:113px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:64px;width:120px;height:36px;',
		},
	]
});