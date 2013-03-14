Ext.define('Документы.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:529px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение условий оплаты отпуска по уходу за ребенком',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:477px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:477px;width:560px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:350px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:436px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'Плановые начисления и удержания',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:251px;top:504px;width:413px;height:25px;',
			items:
			[
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
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:648px;height:257px;',
			height: 257,width: 648,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПособияДоПолутораЛет',
			style: 'position:absolute;left:110px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДетей',
			text: 'Количество детей:',
			style: 'position:absolute;left:6px;top:50px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДетей',
			style: 'position:absolute;left:110px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Первый/последующий ребенок',
			style: 'position:absolute;left:207px;top:50px;width:237px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПособияДоТрехЛет',
			style: 'position:absolute;left:110px;top:190px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выплачивать по:',
			style: 'position:absolute;left:6px;top:190px;width:102px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выплачивать по:',
			style: 'position:absolute;left:6px;top:26px;width:102px;height:19px;',
		},
					]
				},
				{
					title:'Плановые начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:634px;height:206px;',
			height: 206,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Рабочее место',
					width:'115',
				},
				{
					text:'',
					width:'58',
				},
				{
					text:'',
					width:'58',
				},
				{
					text:'Начисление',
					width:'85',
				},
				{
					text:'Действие',
					width:'60',
				},
				{
					text:'Показатели для расчета начисления',
					width:'205',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер',
					width:'80',
				},
				{
					text:'Валюта',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Валюта 2',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Валюта 3',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Валюта 4',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Валюта5',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд5',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Показатель6',
					width:'80',
				},
				{
					text:'Валюта6',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд6',
					width:'125',
				},
				{
					text:'Сторно',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:74px;top:156px;width:389px;height:24px;',
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
					]
				},
				{
					title:'Плановые удержания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:207px;',
			height: 207,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Действие',
					width:'100',
				},
				{
					text:'Удержание',
					width:'100',
				},
				{
					text:'Показатели для расчета удержания',
					width:'205',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 1',
					width:'80',
				},
				{
					text:'Валюта1',
					width:'45',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Валюта2',
					width:'45',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Валюта3',
					width:'45',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Валюта4',
					width:'45',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Валюта5',
					width:'45',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Валюта6',
					width:'45',
				},
				{
					text:'Документ основание',
					width:'100',
				},
				{
					text:'Сторно',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:74px;top:156px;width:389px;height:24px;',
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
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения',
			style: 'position:absolute;left:152px;top:148px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснование',
			text: 'Приказ на отпуск:',
			style: 'position:absolute;left:8px;top:101px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:118px;top:101px;width:538px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Изменить оплату с:',
			style: 'position:absolute;left:22px;top:125px;width:130px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прекратить отпуск с:',
			style: 'position:absolute;left:22px;top:148px;width:130px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:350px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:436px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:520px;top:33px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:536px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения1',
			style: 'position:absolute;left:152px;top:125px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Освободить на период отпуска ставку в штатном расписании',
			style: 'position:absolute;left:255px;top:125px;width:331px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:438px;width:414px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:444px;top:438px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:527px;top:438px;width:129px;height:33px;',
			height: 33,width: 129,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:504px;width:251px;height:25px;',
			items:
			[
				{
					text:'Исправить',
				},
				{
					text:'Отменить исправление',
				},
			]
		},
	]
});