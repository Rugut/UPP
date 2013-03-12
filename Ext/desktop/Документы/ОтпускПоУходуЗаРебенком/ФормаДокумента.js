Ext.define('Документы.ОтпускПоУходуЗаРебенком.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:784px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отпуск по уходу за ребенком',
	
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
			style: 'position:absolute;left:106px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:531px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:531px;width:680px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:784px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Открыть свойства',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				{
					text:'Плановые начисления и удержания',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Данные для расчета среднего заработка',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:251px;top:555px;width:533px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
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
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:106px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:768px;height:386px;',
			height: 386,width: 768,
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
			style: 'position:absolute;left:152px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднедневнойЗаработок',
			text: 'Среднедневной заработок:',
			style: 'position:absolute;left:12px;top:50px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СреднедневнойЗаработок',
			style: 'position:absolute;left:152px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДетей',
			text: 'Количество детей:',
			style: 'position:absolute;left:12px;top:91px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДетей',
			style: 'position:absolute;left:152px;top:91px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Первый/последующий ребенок',
			style: 'position:absolute;left:252px;top:91px;width:221px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выплачивать по:',
			style: 'position:absolute;left:12px;top:26px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПособияДоТрехЛет',
			style: 'position:absolute;left:152px;top:233px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выплачивать по:',
			style: 'position:absolute;left:12px;top:233px;width:138px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Применять при начислении пособия льготы для проживающих в зонах с льготным статусом',
			style: 'position:absolute;left:12px;top:115px;width:501px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:252px;top:43px;width:420px;height:44px;',
			height: 44,width: 420,
			items:
			[
				{
					title:'Страница обычный расчет',
					items:
					[
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:306px;top:4px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать заработок предыдущих страхователей',
			style: 'position:absolute;left:0px;top:25px;width:277px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рассчитывать заработок по правилам 2010 года',
			style: 'position:absolute;left:0px;top:4px;width:277px;height:19px;',
		},
					]
				},
				{
					title:'Страница переходный период',
					items:
					[
		{
			xtype: 'button',
			name: 'РассчитатьПереходногоПериода',
			text: 'Рассчитать',
			style: 'position:absolute;left:270px;top:7px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднедневнойЗаработокПереходногоПериода2010',
			text: 'Заработок переходного периода:',
			style: 'position:absolute;left:0px;top:7px;width:175px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СреднедневнойЗаработокПереходногоПериода2010',
			style: 'position:absolute;left:176px;top:7px;width:88px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Расчет среднего заработка',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:0px;width:754px;height:360px;',
			height: 360,width: 754,
			items:
			[
				{
					title:'Страница до 2011 года',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:75px;width:754px;height:285px;',
			height: 285,width: 754,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Рабочее место',
					width:'120',
				},
				{
					text:'',
					width:'60',
				},
				{
					text:'',
					width:'60',
				},
				{
					text:'Вид заработка',
					width:'120',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Дней отработано',
					width:'100',
				},
				{
					text:'Скидка',
					width:'80',
				},
				{
					text:'Дата начала',
					width:'82',
				},
				{
					text:'Дата окончания',
					width:'98',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:50px;width:754px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:111px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:227px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаНачало',
			text: 'Расчетный период с:',
			style: 'position:absolute;left:0px;top:8px;width:109px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по',
			style: 'position:absolute;left:206px;top:8px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:324px;top:8px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'Страница с 2011 года',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРасчетныеГоды',
			text: 'Расчетные годы:',
			style: 'position:absolute;left:0px;top:8px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервыйГодРасчета',
			style: 'position:absolute;left:88px;top:8px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИ',
			text: ' и ',
			style: 'position:absolute;left:156px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:178px;top:8px;width:64px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:75px;width:754px;height:285px;',
			height: 285,width: 754,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Расчетный год',
					width:'100',
				},
				{
					text:'Заработок',
					width:'100',
				},
				{
					text:'Дней болезни, ухода за детьми и др.',
					width:'200',
				},
				{
					text:'Страхователь',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:50px;width:754px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
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
					title:'Плановые начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:754px;height:336px;',
			height: 336,width: 754,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Рабочее место',
					width:'120',
				},
				{
					text:'',
					width:'60',
				},
				{
					text:'',
					width:'60',
				},
				{
					text:'Начисление',
					width:'100',
				},
				{
					text:'Действие',
					width:'63',
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
					text:'Показатель5',
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
			style: 'position:absolute;left:6px;top:0px;width:754px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Добавить',
				},
				'-',
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:57px;width:389px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие14',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие10',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				{
					text:'Действие8',
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
			style: 'position:absolute;left:6px;top:25px;width:754px;height:336px;',
			height: 336,width: 754,
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
					text:'Показатель1',
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
					text:'Показатель2',
					width:'81',
				},
				{
					text:'Валюта2',
					width:'44',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Показатель3',
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
					text:'Показатель4',
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
					text:'Показатель5',
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
					text:'Показатель6',
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
			style: 'position:absolute;left:6px;top:0px;width:754px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие8',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:85px;top:167px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие12',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Добавить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
				{
					title:'Заявление',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:6px;top:6px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:65px;top:6px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:273px;top:6px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:309px;top:6px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:515px;top:6px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:570px;top:6px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:14px;top:54px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:103px;top:54px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:351px;top:54px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:400px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:494px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:536px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:31px;width:129px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйВФорме',
			style: 'position:absolute;left:203px;top:203px;width:337px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:672px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействияДокумента',
			style: 'position:absolute;left:341px;top:79px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента',
			text: 'Выдан:',
			style: 'position:absolute;left:629px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента1',
			text: 'Действует до:',
			style: 'position:absolute;left:261px;top:79px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:203px;top:153px;width:366px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета',
			text: '№ счета:',
			style: 'position:absolute;left:575px;top:153px;width:47px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:624px;top:153px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование банка:',
			style: 'position:absolute;left:14px;top:178px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:132px;top:178px;width:290px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:639px;top:178px;width:29px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:672px;top:178px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Пособие выплатить',
			style: 'position:absolute;left:6px;top:130px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Прочее',
			style: 'position:absolute;left:6px;top:278px;width:74px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьУполномоченного',
			text: 'Должность:',
			style: 'position:absolute;left:294px;top:341px;width:63px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьУполномоченного',
			style: 'position:absolute;left:358px;top:341px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУполномоченный',
			text: 'Уполномоченный страхователя:',
			style: 'position:absolute;left:14px;top:341px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Уполномоченный',
			style: 'position:absolute;left:181px;top:341px;width:110px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:627px;top:289px;width:133px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьЗаявление',
			text: 'Заявление',
			style: 'position:absolute;left:627px;top:314px;width:133px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьБланкЗаявления',
			text: 'Бланк заявления',
			style: 'position:absolute;left:627px;top:339px;width:133px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:227px;width:618px;height:48px;',
			height: 48,width: 618,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Льготы при выплате пособия',
			style: 'position:absolute;left:0px;top:6px;width:476px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'В зоне:',
			style: 'position:absolute;left:214px;top:29px;width:39px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:14px;top:79px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:77px;top:79px;width:178px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:430px;top:178px;width:58px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:496px;top:178px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента1',
			text: 'Для иностранных граждан:',
			style: 'position:absolute;left:438px;top:79px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеДокументаНаПроживание',
			style: 'position:absolute;left:580px;top:79px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес по регистрации:',
			style: 'position:absolute;left:14px;top:104px;width:121px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииВФорме',
			style: 'position:absolute;left:138px;top:104px;width:474px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:616px;top:104px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:672px;top:104px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пособие рассчитывается из оклада (тарифной ставки)',
			style: 'position:absolute;left:14px;top:319px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:221px;top:297px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТарифнаяСтавкаОклад',
			text: 'Должностной оклад (тарифная ставка):',
			style: 'position:absolute;left:14px;top:297px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон1',
			text: 'Телефон:',
			style: 'position:absolute;left:482px;top:341px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон1',
			style: 'position:absolute;left:535px;top:341px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПочтовыйКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:544px;top:203px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйКодПоКЛАДР',
			style: 'position:absolute;left:624px;top:203px;width:136px;height:19px;',
		},
					]
				},
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:754px;height:203px;',
			height: 203,width: 754,
			columns:
			[
				{
					text:'Очередность',
					width:'74',
				},
				{
					text:'Фамилия',
					width:'60',
				},
				{
					text:'Имя',
					width:'60',
				},
				{
					text:'Отчество',
					width:'60',
				},
				{
					text:'Дата рождения',
					width:'80',
				},
				{
					text:'Выплачивается пособие',
					width:'92',
				},
				{
					text:'Подтверждающий документ',
					width:'410',
				},
				{
					text:'Вид документа',
					width:'90',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Серия',
					width:'70',
				},
				{
					text:'Номер',
					width:'70',
				},
				{
					text:'Полное наименование документа',
					width:'100',
				},
				{
					text:'Решение суда о лишении прав',
					width:'92',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОНеполученииПособияОтОтца',
			text: 'отцом от:',
			style: 'position:absolute;left:14px;top:291px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиОНеполученииПособияОтОтца',
			style: 'position:absolute;left:175px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиОНеполученииПособияОтОтца',
			style: 'position:absolute;left:292px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОНеполученииПособияОтМатери',
			text: 'матерью от:',
			style: 'position:absolute;left:14px;top:316px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиОНеполученииПособияОтМатери',
			style: 'position:absolute;left:175px;top:316px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиОНеполученииПособияОтМатери',
			style: 'position:absolute;left:292px;top:316px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя',
			text: '№',
			style: 'position:absolute;left:263px;top:291px;width:25px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя1',
			text: '№',
			style: 'position:absolute;left:263px;top:316px;width:25px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Документы на всех детей',
			style: 'position:absolute;left:6px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Справки о неполучении пособия',
			style: 'position:absolute;left:6px;top:268px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиПоДругимМестамРаботы',
			text: 'по другим местам работы от:',
			style: 'position:absolute;left:14px;top:341px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиПоДругимМестамРаботы',
			style: 'position:absolute;left:175px;top:341px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиПоДругимМестамРаботы',
			style: 'position:absolute;left:292px;top:341px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя2',
			text: '№',
			style: 'position:absolute;left:263px;top:341px;width:25px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:30px;width:754px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Период отпуска с:',
			style: 'position:absolute;left:8px;top:81px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:106px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:206px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончания',
			text: 'по:',
			style: 'position:absolute;left:188px;top:81px;width:16px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Освободить на период отпуска ставку в штатном расписании',
			style: 'position:absolute;left:297px;top:81px;width:341px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:382px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:478px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:560px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:578px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:494px;width:531px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:382px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:478px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:564px;top:494px;width:83px;height:33px;',
			height: 33,width: 83,
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
			style: 'position:absolute;left:647px;top:494px;width:129px;height:33px;',
			height: 33,width: 129,
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
			style: 'position:absolute;left:0px;top:555px;width:371px;height:25px;',
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