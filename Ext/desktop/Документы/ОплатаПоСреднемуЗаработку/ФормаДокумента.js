Ext.define('Документы.ОплатаПоСреднемуЗаработку.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:686px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оплата по среднему заработку',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:334px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:422px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:502px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:522px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:334px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:686px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Открыть категории',
				},
				{
					text:'Открыть свойства',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:686px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
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
			name: 'НадписьПериод',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:528px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:528px;width:584px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:81px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:81px;width:203px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:107px;width:670px;height:380px;',
			height: 380,width: 670,
			items:
			[
				{
					title:'Условия',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Вид расчета:',
			style: 'position:absolute;left:26px;top:141px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:98px;top:141px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент',
			text: 'Процент среднего заработка:',
			style: 'position:absolute;left:26px;top:167px;width:157px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:187px;top:167px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:210px;top:61px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:324px;top:61px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:354px;top:61px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособВводаВремени',
			text: 'Период оплачиваемого времени',
			style: 'position:absolute;left:6px;top:37px;width:207px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаВнутрисменная',
			style: 'position:absolute;left:210px;top:87px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплачиватьЧасов',
			text: 'часы:',
			style: 'position:absolute;left:319px;top:87px;width:30px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОплачиватьЧасов',
			style: 'position:absolute;left:354px;top:87px;width:60px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьВсе',
			text: '',
			style: 'position:absolute;left:6px;top:271px;width:82px;height:71px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмер',
			text: 'Начислено:',
			style: 'position:absolute;left:98px;top:271px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеРазмер',
			text: '',
			style: 'position:absolute;left:98px;top:286px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьРазмер',
			text: '',
			style: 'position:absolute;left:98px;top:302px;width:181px;height:52px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднийЗаработок',
			text: 'Средний дневной заработок:',
			style: 'position:absolute;left:288px;top:271px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:288px;top:286px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:288px;top:302px;width:181px;height:52px;',
		},
		{
			xtype: 'label',
			name: 'ЗаголовокДополнительнойИнформационнойНадписи',
			text: 'Заголовок:',
			style: 'position:absolute;left:480px;top:271px;width:172px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДополнительнаяИнформационнаяНадпись',
			text: '',
			style: 'position:absolute;left:480px;top:286px;width:172px;height:68px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Дата начала периода сохранения среднего заработка:',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаСобытия',
			style: 'position:absolute;left:300px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчетаЗаголовок',
			text: 'Начислить',
			style: 'position:absolute;left:6px;top:117px;width:131px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаВнутрисменная',
			text: 'Дата:',
			style: 'position:absolute;left:175px;top:87px;width:32px;height:19px;',
		},
					]
				},
				{
					title:'Оплата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:656px;height:288px;',
			height: 288,width: 656,
			columns:
			[
				{
					text:'Картинка',
					width:'28',
				},
				{
					text:'№',
					width:'28',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата окончания',
					width:'80',
				},
				{
					text:'Начисление',
					width:'80',
				},
				{
					text:'Показатели для расчета',
					width:'133',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 2',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 3',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 4',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 5',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 6',
					width:'50',
				},
				{
					text:'Результат',
					width:'65',
				},
				{
					text:'Оплачено дней/часов',
					width:'80',
				},
				{
					text:'Дней отработано',
					width:'55',
				},
				{
					text:'Часов отработано',
					width:'55',
				},
				{
					text:'Зачесть в норму дней',
					width:'80',
				},
				{
					text:'Зачесть в норму часов',
					width:'80',
				},
				{
					text:'Подразделение организации',
					width:'73',
				},
				{
					text:'Сторно',
					width:'44',
				},
				{
					text:'Норма по пятидневке',
					width:'96',
				},
				{
					text:'Отработано по пятидневке',
					width:'96',
				},
				{
					text:'Норма часов по пятидневке',
					width:'100',
				},
				{
					text:'Отработано часов по пятидневке',
					width:'100',
				},
				{
					text:'Начало расчетного периода',
					width:'83',
				},
				{
					text:'Окончание расчетного периода',
					width:'83',
				},
				{
					text:'Дата начала события',
					width:'100',
				},
				{
					text:'Сторнируемый документ',
					width:'100',
				},
				{
					text:'Число месяцев',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Рассчитать начисления',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:72px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие13',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:73px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Рассчитать средний заработок',
				},
				{
					text:'Действие9',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:97px;width:656px;height:212px;',
			height: 212,width: 656,
			columns:
			[
				{
					text:'№',
					width:'28',
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
					text:'Часов отработано',
					width:'100',
				},
				{
					text:'Отработано за расчетный период',
					width:'100',
				},
				{
					text:'Норма за расчетный период',
					width:'100',
				},
				{
					text:'Дата начала',
					width:'90',
				},
				{
					text:'Дата окончания',
					width:'84',
				},
				{
					text:'Коэффициент индексации',
					width:'46',
				},
				{
					text:'Число месяцев',
					width:'86',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетСреднегоЗаработка',
			text: '',
			style: 'position:absolute;left:143px;top:317px;width:519px;height:36px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНачисления',
			text: 'Рассчитать начисления',
			style: 'position:absolute;left:6px;top:317px;width:130px;height:36px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:42px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:160px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаНачало',
			text: 'С:',
			style: 'position:absolute;left:26px;top:24px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по:',
			style: 'position:absolute;left:137px;top:24px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:255px;top:24px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработка',
			text: 'Расчетный период',
			style: 'position:absolute;left:6px;top:5px;width:215px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаЗаработок',
			text: 'Заработок за расчетный период',
			style: 'position:absolute;left:6px;top:52px;width:215px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:233px;height:25px;',
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
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:31px;top:491px;width:435px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:466px;top:491px;width:83px;height:33px;',
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
			text: 'Открыть исправление',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:549px;top:491px;width:129px;height:33px;',
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
	]
});