Ext.define('Документы.РасчетПриУвольненииРаботникаОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:682px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчет при увольнении сотрудника',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:368px;top:33px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:454px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:534px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:554px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:100px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:368px;top:58px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:454px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:682px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:100px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:8px;top:528px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:528px;width:578px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:81px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:666px;height:377px;',
			height: 377,width: 666,
			items:
			[
				{
					title:'Условия',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата:',
			style: 'position:absolute;left:14px;top:52px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУвольнения',
			style: 'position:absolute;left:71px;top:52px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Выходное пособие за:',
			style: 'position:absolute;left:14px;top:207px;width:212px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейЧасовВыходногоПособия',
			style: 'position:absolute;left:230px;top:207px;width:30px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейЧасовКомпенсацииУдержанияОтпуска',
			style: 'position:absolute;left:355px;top:106px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Заработок на время трудоустройства за:',
			style: 'position:absolute;left:14px;top:232px;width:213px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейЧасовСохраненияСреднегоЗаработка',
			style: 'position:absolute;left:230px;top:232px;width:30px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Компенсировать за неиспользованный',
			style: 'position:absolute;left:32px;top:130px;width:226px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Удержать за использованный авансом',
			style: 'position:absolute;left:32px;top:152px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Приказ:',
			style: 'position:absolute;left:14px;top:28px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:71px;top:28px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокРасчета',
			text: 'Порядок расчета:',
			style: 'position:absolute;left:422px;top:106px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокРасчетаОтпуска',
			style: 'position:absolute;left:516px;top:106px;width:142px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВремя3',
			text: 'Дней:',
			style: 'position:absolute;left:321px;top:106px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВремяВыходногоПособия',
			text: 'дней',
			style: 'position:absolute;left:264px;top:207px;width:30px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВремяСохраненияСреднегоЗаработка',
			text: 'дней',
			style: 'position:absolute;left:264px;top:232px;width:30px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодС',
			style: 'position:absolute;left:126px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодПо',
			style: 'position:absolute;left:232px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРабочийГодС',
			text: 'За период работы с:',
			style: 'position:absolute;left:16px;top:106px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРабочийГодПо',
			text: 'по:',
			style: 'position:absolute;left:211px;top:106px;width:15px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьВсе',
			text: '',
			style: 'position:absolute;left:6px;top:268px;width:82px;height:71px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмер',
			text: 'Начислено:',
			style: 'position:absolute;left:105px;top:268px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеРазмер',
			text: '',
			style: 'position:absolute;left:105px;top:283px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьРазмер',
			text: '',
			style: 'position:absolute;left:105px;top:330px;width:181px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднийЗаработок',
			text: 'Средний дневной заработок:',
			style: 'position:absolute;left:296px;top:268px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:296px;top:283px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:296px;top:299px;width:181px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'ЗаголовокДополнительнойИнформационнойНадписи',
			text: 'Заголовок:',
			style: 'position:absolute;left:491px;top:268px;width:167px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДополнительнаяИнформационнаяНадпись',
			text: '',
			style: 'position:absolute;left:491px;top:283px;width:167px;height:56px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУвольнение',
			text: 'Увольнение',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтпуск',
			text: 'Отпуск',
			style: 'position:absolute;left:6px;top:84px;width:82px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомпенсации',
			text: 'Компенсации при увольнении',
			style: 'position:absolute;left:6px;top:184px;width:200px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмер1',
			text: 'Удержано:',
			style: 'position:absolute;left:105px;top:298px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеРазмер1',
			text: '',
			style: 'position:absolute;left:105px;top:314px;width:181px;height:15px;',
		},
					]
				},
				{
					title:'Оплата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:652px;height:283px;',
			height: 283,width: 652,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'№',
					width:'28',
				},
				{
					text:'Начисление (удержание)',
					width:'100',
				},
				{
					text:'Дней/часов',
					width:'72',
				},
				{
					text:'Результат',
					width:'82',
				},
				{
					text:'Сторно',
					width:'47',
				},
				{
					text:'Оплачено дней/часов',
					width:'80',
				},
				{
					text:'Начало расчетного периода',
					width:'100',
				},
				{
					text:'Окончание расчетного периода',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:652px;height:24px;',
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
				'-',
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
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:66px;width:652px;height:24px;',
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
			xtype: 'label',
			name: 'НадписьОплата',
			text: '',
			style: 'position:absolute;left:6px;top:313px;width:652px;height:39px;',
		},
					]
				},
				{
					title:'Расчет среднего заработка',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:50px;width:652px;height:263px;',
			height: 263,width: 652,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Расчет среднего',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:652px;height:24px;',
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
				'-',
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
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:652px;height:218px;',
			height: 218,width: 652,
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
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
				{
					text:'Коэффициент индексации',
					width:'61',
				},
				{
					text:'Число месяцев',
					width:'100',
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
					title:'Расчет среднего для отпуска',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:652px;height:218px;',
			height: 218,width: 652,
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
					width:'102',
				},
				{
					text:'Отработано за расчетный период',
					width:'111',
				},
				{
					text:'Норма за расчетный период',
					width:'111',
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
			style: 'position:absolute;left:0px;top:21px;width:652px;height:24px;',
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
				'-',
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
					text:'Рассчитать',
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
					title:'Оба расчета среднего',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:153px;width:652px;height:24px;',
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
				'-',
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
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:177px;width:652px;height:86px;',
			height: 86,width: 652,
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
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
				{
					text:'Коэффициент индексации',
					width:'61',
				},
				{
					text:'Число месяцев',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:652px;height:86px;',
			height: 86,width: 652,
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
					width:'102',
				},
				{
					text:'Отработано за расчетный период',
					width:'111',
				},
				{
					text:'Норма за расчетный период',
					width:'111',
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
			style: 'position:absolute;left:0px;top:16px;width:652px;height:24px;',
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
				'-',
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
					text:'Рассчитать',
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
			style: 'position:absolute;left:146px;top:317px;width:512px;height:35px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНачисления',
			text: 'Рассчитать начисления (удержания)',
			style: 'position:absolute;left:6px;top:317px;width:130px;height:35px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:282px;height:25px;',
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
			style: 'position:absolute;left:32px;top:490px;width:398px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:430px;top:490px;width:83px;height:33px;',
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
			text: 'Открыть исправление',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:513px;top:490px;width:129px;height:33px;',
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
	]
});