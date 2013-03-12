Ext.define('Документы.СправкаПоНДФЛВНалоговыйОрган.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:805px;height:623px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справки 2-НДФЛ для передачи в ИФНС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:598px;width:805px;height:25px;',
			items:
			[
				{
					text:'Записать файл на диск',
				},
				{
					text:'OK',
				},
				{
					text:'Показать файл',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:805px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Редактировать номер',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:789px;height:43px;',
			height: 43,width: 789,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:789px;height:35px;',
			height: 35,width: 789,
			items:
			[
				{
					title:'Страница1',
					items:
					[
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
			style: 'position:absolute;left:8px;top:76px;width:789px;height:513px;',
			height: 513,width: 789,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:460px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:548px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:648px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:25px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:25px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:628px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:460px;top:25px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:548px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:0px;top:494px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:106px;top:494px;width:683px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:123px;width:789px;height:24px;',
			items:
			[
				'-',
				{
					text:'физ.лицами, получавшими доходы',
				},
				{
					text:'Действие4',
				},
				{
					text:'Пронумеровать',
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
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:147px;width:254px;height:292px;',
			height: 292,width: 254,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Налогоплательщик',
					width:'120',
				},
				{
					text:'№ справки',
					width:'60',
				},
				{
					text:'Ставка',
					width:'40',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйПериод',
			text: 'Налоговый период:',
			style: 'position:absolute;left:0px;top:0px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:106px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:338px;top:445px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:405px;top:445px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьОтветственного',
			text: 'Должность:',
			style: 'position:absolute;left:338px;top:470px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьПодписавшегоЛица',
			style: 'position:absolute;left:405px;top:470px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторФайла',
			style: 'position:absolute;left:106px;top:100px;width:662px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКАТО',
			text: 'ОКАТО/КПП:',
			style: 'position:absolute;left:0px;top:50px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:106px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайла',
			text: 'Имя файла:',
			style: 'position:absolute;left:0px;top:100px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГлавныйБухгалтер',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:0px;top:445px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:106px;top:445px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСправкуПодписал',
			text: 'Справку подписал:',
			style: 'position:absolute;left:0px;top:470px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СправкуПодписал',
			style: 'position:absolute;left:106px;top:470px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфоНадпись',
			text: '',
			style: 'position:absolute;left:26px;top:71px;width:763px;height:27px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:262px;top:147px;width:527px;height:292px;',
			height: 292,width: 527,
			items:
			[
				{
					title:'Доходы, вычеты, налоги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:28px;width:326px;height:125px;',
			height: 125,width: 326,
			columns:
			[
				{
					text:'Месяц',
					width:'42',
				},
				{
					text:'Код дохода',
					width:'80',
				},
				{
					text:'Сумма дохода',
					width:'80',
				},
				{
					text:'Код вычета',
					width:'80',
				},
				{
					text:'Сумма вычета',
					width:'80',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:341px;top:28px;width:178px;height:58px;',
			height: 58,width: 178,
			columns:
			[
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Доходы по месяцам',
			style: 'position:absolute;left:6px;top:6px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Вычеты (стандартные и пр.)',
			style: 'position:absolute;left:341px;top:6px;width:178px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУведомления',
			style: 'position:absolute;left:439px;top:109px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерУведомления',
			style: 'position:absolute;left:356px;top:109px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодНалоговогоОрганаУведомления',
			style: 'position:absolute;left:408px;top:134px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаУведомления',
			text: 'от:',
			style: 'position:absolute;left:420px;top:109px;width:18px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Уведомление на имущ. вычет',
			style: 'position:absolute;left:341px;top:87px;width:178px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерУведомления',
			text: '№:',
			style: 'position:absolute;left:341px;top:109px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:341px;top:134px;width:66px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:245px;width:82px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:156px;width:513px;height:87px;',
			height: 87,width: 513,
			items:
			[
				{
					title:'Страница2010',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исчислено',
			style: 'position:absolute;left:245px;top:24px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удержано',
			style: 'position:absolute;left:245px;top:46px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Перечислено',
			style: 'position:absolute;left:245px;top:68px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщаяСуммаДохода',
			style: 'position:absolute;left:68px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОблагаемаяСуммаДохода',
			style: 'position:absolute;left:68px;top:46px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задолженность',
			style: 'position:absolute;left:413px;top:46px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзлишнеУдержано',
			style: 'position:absolute;left:413px;top:24px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Суммы дохода',
			style: 'position:absolute;left:0px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Суммы налога',
			style: 'position:absolute;left:172px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Исчислено:',
			style: 'position:absolute;left:172px;top:24px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Удержано:',
			style: 'position:absolute;left:172px;top:46px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Общая:',
			style: 'position:absolute;left:0px;top:24px;width:38px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Облагаемая:',
			style: 'position:absolute;left:0px;top:46px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Перечислено:',
			style: 'position:absolute;left:172px;top:68px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Излишне удер-но:',
			style: 'position:absolute;left:323px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Не удержано:',
			style: 'position:absolute;left:323px;top:46px;width:70px;height:19px;',
		},
					]
				},
				{
					title:'Страница2011',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Суммы дохода',
			style: 'position:absolute;left:69px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Суммы налога',
			style: 'position:absolute;left:226px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Исчислено:',
			style: 'position:absolute;left:226px;top:24px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Общая:',
			style: 'position:absolute;left:69px;top:24px;width:38px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Облагаемая:',
			style: 'position:absolute;left:69px;top:46px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Не удержано:',
			style: 'position:absolute;left:226px;top:68px;width:70px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:63px;height:87px;',
			height: 87,width: 63,
			columns:
			[
				{
					text:'По ставке',
					width:'62',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:363px;top:8px;width:150px;height:57px;',
			height: 57,width: 150,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Перечислено:',
			style: 'position:absolute;left:0px;top:38px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Излишне удер-но:',
			style: 'position:absolute;left:0px;top:16px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзлишнеУдержано1',
			style: 'position:absolute;left:90px;top:16px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Перечислено1',
			style: 'position:absolute;left:90px;top:38px;width:60px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:226px;top:46px;width:132px;height:22px;',
			height: 22,width: 132,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Удержано:',
			style: 'position:absolute;left:0px;top:0px;width:58px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удержано1',
			style: 'position:absolute;left:72px;top:0px;width:60px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщаяСуммаДохода1',
			style: 'position:absolute;left:137px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОблагаемаяСуммаДохода1',
			style: 'position:absolute;left:136px;top:46px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задолженность1',
			style: 'position:absolute;left:298px;top:68px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исчислено1',
			style: 'position:absolute;left:298px;top:24px;width:60px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Личные данные налогоплательщика',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:6px;top:6px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:59px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:190px;top:6px;width:27px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:217px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:347px;top:6px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:399px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес в РФ:',
			style: 'position:absolute;left:6px;top:106px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРФВФорме',
			style: 'position:absolute;left:94px;top:106px;width:425px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:188px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:94px;top:188px;width:425px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:6px;top:213px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:94px;top:213px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:209px;top:213px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:252px;top:213px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес1',
			text: 'Адрес в стране проживания:',
			style: 'position:absolute;left:6px;top:131px;width:149px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЗарубежомВФорме',
			style: 'position:absolute;left:160px;top:131px;width:359px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Гражданство',
			style: 'position:absolute;left:94px;top:56px;width:425px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство',
			text: 'Гражданство:',
			style: 'position:absolute;left:6px;top:56px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:6px;top:31px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:94px;top:31px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:222px;top:31px;width:27px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:252px;top:31px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:94px;top:81px;width:425px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщика',
			text: 'Статус:',
			style: 'position:absolute;left:6px;top:81px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:165px;width:129px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:245px;width:82px;height:21px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОснованиеДляПредставленияСправок',
			text: 'Вид справок:',
			style: 'position:absolute;left:460px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОснованиеДляПредставленияСправок',
			style: 'position:absolute;left:548px;top:50px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Принято в ИФНС',
			style: 'position:absolute;left:633px;top:470px;width:111px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодИФНС',
			text: 'В ИФНС (код):',
			style: 'position:absolute;left:295px;top:50px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНС',
			style: 'position:absolute;left:372px;top:50px;width:60px;height:19px;',
		},
					]
				},
			]
		},
	]
});