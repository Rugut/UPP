Ext.define('Документы.СправкаПоНДФЛСотруднику.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:600px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справка о доходах (2-НДФЛ) для сотрудника',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:368px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:450px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:550px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:114px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:530px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:368px;top:58px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:450px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:550px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:114px;top:550px;width:620px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйПериод',
			text: 'Налоговый период:',
			style: 'position:absolute;left:8px;top:58px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:114px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:522px;top:526px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			style: 'position:absolute;left:574px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьОтветственного',
			text: 'Должность:',
			style: 'position:absolute;left:282px;top:526px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьПодписавшегоЛица',
			style: 'position:absolute;left:352px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКАТО',
			text: 'ОКАТО/КПП:',
			style: 'position:absolute;left:524px;top:147px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:599px;top:147px;width:135px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСправкуПодписал',
			text: 'Справку подписал:',
			style: 'position:absolute;left:8px;top:526px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СправкуПодписал',
			style: 'position:absolute;left:114px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфоНадпись',
			text: '',
			style: 'position:absolute;left:34px;top:171px;width:700px;height:27px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:204px;width:726px;height:318px;',
			height: 318,width: 726,
			items:
			[
				{
					title:'Доходы, вычеты, налоги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:28px;width:390px;height:138px;',
			height: 138,width: 390,
			columns:
			[
				{
					text:'Месяц',
					width:'42',
					dataIndex:'Месяц',
					flex:1,
				},
				{
					text:'Код дохода',
					width:'80',
					dataIndex:'КодДохода',
					flex:1,
				},
				{
					text:'Сумма дохода',
					width:'80',
					dataIndex:'СуммаДохода',
					flex:1,
				},
				{
					text:'Код вычета',
					width:'80',
					dataIndex:'КодВычета',
					flex:1,
				},
				{
					text:'Сумма вычета',
					width:'80',
					dataIndex:'СуммаВычета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СправкаПоНДФЛСотруднику/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Месяц',
					},
					{
						name:'КодДохода',
					},
					{
						name:'СуммаДохода',
					},
					{
						name:'КодВычета',
					},
					{
						name:'СуммаВычета',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:405px;top:28px;width:313px;height:91px;',
			height: 91,width: 313,
			columns:
			[
				{
					text:'Код',
					width:'80',
					dataIndex:'КодВычета',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаВычета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СправкаПоНДФЛСотруднику/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'КодВычета',
					},
					{
						name:'СуммаВычета',
					},
				]
			},
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
			text: 'Вычеты (стандартные, имущественные и пр.)',
			style: 'position:absolute;left:405px;top:6px;width:285px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаУведомления',
			style: 'position:absolute;left:503px;top:147px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерУведомления',
			style: 'position:absolute;left:420px;top:147px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодНалоговогоОрганаУведомления',
			style: 'position:absolute;left:648px;top:147px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаУведомления',
			text: 'от:',
			style: 'position:absolute;left:484px;top:147px;width:18px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Уведомление на имущественный вычет',
			style: 'position:absolute;left:405px;top:125px;width:245px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерУведомления',
			text: '№:',
			style: 'position:absolute;left:405px;top:147px;width:15px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:587px;top:147px;width:61px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:272px;width:82px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:172px;width:712px;height:94px;',
			height: 94,width: 712,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница2010',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Исчислено',
			style: 'position:absolute;left:272px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Удержано',
			style: 'position:absolute;left:272px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Перечислено',
			style: 'position:absolute;left:473px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОбщаяСуммаДохода',
			style: 'position:absolute;left:68px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОблагаемаяСуммаДохода',
			style: 'position:absolute;left:68px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Задолженность',
			style: 'position:absolute;left:272px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИзлишнеУдержано',
			style: 'position:absolute;left:473px;top:25px;width:80px;height:19px;',
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
			style: 'position:absolute;left:196px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Исчислено:',
			style: 'position:absolute;left:196px;top:25px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Удержано:',
			style: 'position:absolute;left:196px;top:50px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Общая:',
			style: 'position:absolute;left:0px;top:25px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Облагаемая:',
			style: 'position:absolute;left:0px;top:50px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Перечислено:',
			style: 'position:absolute;left:368px;top:50px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Излишне удержано:',
			style: 'position:absolute;left:368px;top:25px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Не удержано:',
			style: 'position:absolute;left:196px;top:75px;width:71px;height:19px;',
		},
					]
				},
				{
					title:'Страница2011',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Суммы дохода',
			style: 'position:absolute;left:94px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Суммы налога',
			style: 'position:absolute;left:274px;top:0px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Исчислено:',
			style: 'position:absolute;left:274px;top:25px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Общая:',
			style: 'position:absolute;left:94px;top:25px;width:38px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Облагаемая:',
			style: 'position:absolute;left:94px;top:51px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Не удержано:',
			style: 'position:absolute;left:274px;top:75px;width:70px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:94px;',
			height: 94,width: 82,
			columns:
			[
				{
					text:'По ставке:',
					width:'64',
					dataIndex:'Ставка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СправкаПоНДФЛСотруднику/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Ставка',
					},
				]
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Перечислено1',
			style: 'position:absolute;left:535px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИзлишнеУдержано1',
			style: 'position:absolute;left:535px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Перечислено:',
			style: 'position:absolute;left:440px;top:50px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Излишне удер-но:',
			style: 'position:absolute;left:440px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Удержано1',
			style: 'position:absolute;left:348px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Удержано:',
			style: 'position:absolute;left:274px;top:50px;width:58px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Задолженность1',
			style: 'position:absolute;left:348px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Исчислено1',
			style: 'position:absolute;left:348px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОблагаемаяСуммаДохода1',
			style: 'position:absolute;left:162px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОбщаяСуммаДохода1',
			style: 'position:absolute;left:162px;top:25px;width:80px;height:19px;',
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
			style: 'position:absolute;left:6px;top:6px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			style: 'position:absolute;left:94px;top:6px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:286px;top:6px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			style: 'position:absolute;left:322px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:495px;top:6px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			style: 'position:absolute;left:558px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес в РФ:',
			style: 'position:absolute;left:6px;top:106px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресРФВФорме',
			style: 'position:absolute;left:94px;top:106px;width:624px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:182px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидДокумента',
			style: 'position:absolute;left:94px;top:182px;width:624px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:6px;top:207px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияДокумента',
			style: 'position:absolute;left:94px;top:207px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:199px;top:207px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДокумента',
			style: 'position:absolute;left:242px;top:207px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес1',
			text: 'Адрес в стране проживания:',
			style: 'position:absolute;left:6px;top:131px;width:149px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЗарубежомВФорме',
			style: 'position:absolute;left:160px;top:131px;width:558px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Гражданство',
			style: 'position:absolute;left:94px;top:56px;width:624px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство',
			text: 'Гражданство:',
			style: 'position:absolute;left:6px;top:56px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:6px;top:31px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаРождения',
			style: 'position:absolute;left:94px;top:31px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:212px;top:31px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			style: 'position:absolute;left:242px;top:31px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:94px;top:81px;width:624px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщика',
			text: 'Статус:',
			style: 'position:absolute;left:6px;top:81px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:159px;width:129px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:272px;width:82px;height:21px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:83px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сотрудник',
			style: 'position:absolute;left:114px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Справка формируется ...',
			style: 'position:absolute;left:8px;top:108px;width:359px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:383px;top:136px;width:141px;height:30px;',
			height: 30,width: 141,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтавка',
			text: 'Ставка:',
			style: 'position:absolute;left:0px;top:11px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ставка',
			style: 'position:absolute;left:50px;top:11px;width:82px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКодИФНС',
			text: 'В ИФНС (код):',
			style: 'position:absolute;left:200px;top:58px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИФНС',
			style: 'position:absolute;left:274px;top:58px;width:60px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'сводно (например, в банк)',
			style: 'position:absolute;left:14px;top:128px;width:353px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'для декларирования в ИФНС - в разрезе ставок и кодов по ОКАТО:',
			style: 'position:absolute;left:14px;top:147px;width:367px;height:19px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:575px;width:742px;height:25px;',
			dock: 'bottom',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});