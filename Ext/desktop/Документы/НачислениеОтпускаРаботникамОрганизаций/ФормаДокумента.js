Ext.define('Документы.НачислениеОтпускаРаботникамОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:679px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисление отпуска сотрудникам организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:362px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:452px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:532px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:552px;top:33px;width:120px;height:19px;',
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
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:362px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:452px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:679px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:679px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
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
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:528px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:104px;top:528px;width:568px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:82px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:106px;width:664px;height:380px;',
			height: 380,width: 664,
			items:
			[
				{
					title:'Условия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаОсновногоОтпуска',
			style: 'position:absolute;left:141px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияОсновногоОтпуска',
			style: 'position:absolute;left:248px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияДополнительногоОтпуска',
			style: 'position:absolute;left:248px;top:151px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'по:',
			style: 'position:absolute;left:226px;top:52px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаДополнительногоОтпуска',
			style: 'position:absolute;left:141px;top:151px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'по:',
			style: 'position:absolute;left:226px;top:151px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Рассчитывать средний заработок:',
			style: 'position:absolute;left:26px;top:100px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокРасчетаОсновногоОтпуска',
			style: 'position:absolute;left:211px;top:100px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Вид отпуска:',
			style: 'position:absolute;left:26px;top:175px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаДополнительногоОтпуска',
			style: 'position:absolute;left:141px;top:175px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Процент оплаты:',
			style: 'position:absolute;left:376px;top:175px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:467px;top:175px;width:58px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейЧасовКомпенсацииОтпуска',
			style: 'position:absolute;left:141px;top:223px;width:41px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДнейКомпенсации',
			text: 'дней.',
			style: 'position:absolute;left:190px;top:223px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокРасчетаКомпенсацииОтпуска',
			style: 'position:absolute;left:411px;top:223px;width:138px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Рассчитывать средний заработок:',
			style: 'position:absolute;left:226px;top:223px;width:182px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодС',
			style: 'position:absolute;left:141px;top:76px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодПо',
			style: 'position:absolute;left:248px;top:76px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРабочийГодС',
			text: 'За период работы с:',
			style: 'position:absolute;left:26px;top:76px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРабочийГодПо',
			text: 'по:',
			style: 'position:absolute;left:226px;top:76px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейДопОтпуска',
			style: 'position:absolute;left:355px;top:151px;width:27px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейОтпуска',
			style: 'position:absolute;left:355px;top:52px;width:27px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'за:',
			style: 'position:absolute;left:335px;top:52px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДнейОсновногоОтпуска',
			text: 'календарный день',
			style: 'position:absolute;left:387px;top:52px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДнейДополнительногоОтпуска',
			text: 'календарных дней',
			style: 'position:absolute;left:387px;top:151px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'за:',
			style: 'position:absolute;left:335px;top:151px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Дата начала отпуска:',
			style: 'position:absolute;left:6px;top:6px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаСобытия',
			style: 'position:absolute;left:131px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьВсе',
			text: '',
			style: 'position:absolute;left:6px;top:282px;width:82px;height:71px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмерОтпускных',
			text: 'Начислено отпускных:',
			style: 'position:absolute;left:104px;top:282px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеРазмерОтпускных',
			text: '',
			style: 'position:absolute;left:104px;top:297px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьРазмерОтпускных',
			text: '',
			style: 'position:absolute;left:104px;top:313px;width:181px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднийЗаработок',
			text: 'Средний дневной заработок:',
			style: 'position:absolute;left:293px;top:282px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:293px;top:297px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:293px;top:313px;width:181px;height:40px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислить за:',
			style: 'position:absolute;left:26px;top:223px;width:108px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислить с:',
			style: 'position:absolute;left:26px;top:52px;width:108px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислить с:',
			style: 'position:absolute;left:26px;top:151px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕжегодныйОплачиваемыйОтпуск',
			text: 'Ежегодный оплачиваемый отпуск',
			style: 'position:absolute;left:6px;top:32px;width:215px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйОтпуск',
			text: 'Дополнительный (другой) отпуск',
			style: 'position:absolute;left:6px;top:129px;width:215px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомпенсацияОтпуска',
			text: 'Компенсация отпуска',
			style: 'position:absolute;left:6px;top:204px;width:215px;height:15px;',
		},
					]
				},
				{
					title:'Оплата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:649px;height:291px;',
			height: 291,width: 649,
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
					width:'74',
				},
				{
					text:'Начисление',
					width:'100',
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
					text:'Дней отработано',
					width:'55',
				},
				{
					text:'Часов отработано',
					width:'56',
				},
				{
					text:'Оплачено дней/часов',
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
					text:'Зачесть в норму дней',
					width:'79',
				},
				{
					text:'Зачесть в норму часов',
					width:'80',
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
			style: 'position:absolute;left:6px;top:0px;width:649px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Рассчитать начисления',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:68px;width:649px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОплата',
			text: '',
			style: 'position:absolute;left:6px;top:320px;width:649px;height:34px;',
		},
					]
				},
				{
					title:'Расчет среднего заработка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:42px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:160px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаНачало',
			text: 'С:',
			style: 'position:absolute;left:26px;top:25px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по:',
			style: 'position:absolute;left:137px;top:25px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:252px;top:25px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработка',
			text: 'Расчетный период',
			style: 'position:absolute;left:6px;top:6px;width:215px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетСреднегоЗаработка',
			text: '',
			style: 'position:absolute;left:150px;top:320px;width:512px;height:34px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНачисления',
			text: 'Рассчитать начисления',
			style: 'position:absolute;left:6px;top:320px;width:130px;height:34px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:50px;width:656px;height:267px;',
			height: 267,width: 656,
			items:
			[
				{
					title:'Расчет среднего по календарным',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие16',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:656px;height:222px;',
			height: 222,width: 656,
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
					text:'Дней расчетного периода',
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
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
				{
					text:'Коэффициент индексации',
					width:'100',
				},
				{
					text:'Число месяцев',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаЗаработок1',
			text: 'Заработок за расчетный период',
			style: 'position:absolute;left:0px;top:0px;width:215px;height:15px;',
		},
					]
				},
				{
					title:'Расчет среднего по шестидневке',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:656px;height:222px;',
			height: 222,width: 656,
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
					text:'Дней расчетного периода',
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
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
				{
					text:'Коэффициент индексации',
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
			style: 'position:absolute;left:0px;top:21px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие9',
				},
				{
					text:'Рассчитать',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие17',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие11',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаЗаработок2',
			text: 'Заработок за расчетный период',
			style: 'position:absolute;left:0px;top:0px;width:215px;height:15px;',
		},
					]
				},
				{
					title:'Оба расчета среднего',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				{
					text:'Рассчитать заработок',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие12',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:656px;height:97px;',
			height: 97,width: 656,
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
					text:'Дней расчетного периода',
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
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
				{
					text:'Коэффициент индексации',
					width:'100',
				},
				{
					text:'Число месяцев',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:183px;width:656px;height:84px;',
			height: 84,width: 656,
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
					text:'Дней расчетного периода',
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
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
				{
					text:'Коэффициент индексации',
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
			style: 'position:absolute;left:0px;top:159px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
				{
					text:'Рассчитать заработок',
				},
				{
					text:'Действие13',
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
					title:'Заявление на выплату пособия',
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
			style: 'position:absolute;left:65px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:235px;top:6px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:271px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:441px;top:6px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:496px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:14px;top:56px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:103px;top:56px;width:276px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:385px;top:56px;width:34px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:423px;top:56px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:522px;top:56px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:564px;top:56px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:33px;width:129px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйВФорме',
			style: 'position:absolute;left:203px;top:206px;width:453px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:57px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействияДокумента',
			style: 'position:absolute;left:564px;top:81px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента',
			text: 'Выдан:',
			style: 'position:absolute;left:14px;top:81px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента1',
			text: 'Действует до:',
			style: 'position:absolute;left:484px;top:81px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:203px;top:156px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета',
			text: '№ счета:',
			style: 'position:absolute;left:448px;top:156px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:500px;top:156px;width:156px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование банка:',
			style: 'position:absolute;left:14px;top:181px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:132px;top:181px;width:197px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:534px;top:181px;width:29px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:564px;top:181px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Пособие выплатить',
			style: 'position:absolute;left:6px;top:133px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Прочее',
			style: 'position:absolute;left:6px;top:233px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьУполномоченного',
			text: 'Должность:',
			style: 'position:absolute;left:14px;top:281px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьУполномоченного',
			style: 'position:absolute;left:203px;top:281px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУполномоченный',
			text: 'Уполномоченный страхователя:',
			style: 'position:absolute;left:14px;top:256px;width:170px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Уполномоченный',
			style: 'position:absolute;left:203px;top:256px;width:206px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:535px;top:283px;width:121px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьЗаявление',
			text: 'Заявление',
			style: 'position:absolute;left:535px;top:308px;width:121px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьБланкЗаявления',
			text: 'Бланк заявления',
			style: 'position:absolute;left:535px;top:333px;width:121px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:333px;top:181px;width:58px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:393px;top:181px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:150px;top:81px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:213px;top:81px;width:267px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес по регистрации:',
			style: 'position:absolute;left:14px;top:106px;width:121px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииВФорме',
			style: 'position:absolute;left:139px;top:106px;width:341px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:508px;top:106px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:564px;top:106px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон1',
			text: 'Телефон:',
			style: 'position:absolute;left:14px;top:306px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон1',
			style: 'position:absolute;left:203px;top:306px;width:206px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:262px;height:25px;',
			items:
			[
				{
					text:'Отменить исправление',
				},
				{
					text:'Исправить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:490px;width:422px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:452px;top:490px;width:83px;height:33px;',
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
			style: 'position:absolute;left:543px;top:490px;width:129px;height:33px;',
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