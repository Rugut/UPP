Ext.define('Обработки.ОбменДаннымиXML.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:626px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:626px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Настройки',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:28px;width:618px;height:545px;',
			height: 545,width: 618,
			items:
			[
				{
					title:'Выгрузка данных',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Имя файла правил:',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаПравил',
			style: 'position:absolute;left:111px;top:6px;width:323px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Версия:',
			style: 'position:absolute;left:443px;top:6px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВерсияПравилОбмена',
			text: 'Надпись6',
			style: 'position:absolute;left:493px;top:6px;width:117px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:245px;width:604px;height:249px;',
			height: 249,width: 604,
			items:
			[
				{
					title:'Правила выгрузки данных',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:273px;height:193px;',
			height: 193,width: 273,
			columns:
			[
				{
					text:'Правила выгрузки данных',
					width:'204',
					dataIndex:'ПВД',
					flex:1,
				},
				{
					text:'Узел обмена',
					width:'126',
					dataIndex:'СсылкаНаУзелОбмена',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбменДаннымиXML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПВД',
					},
					{
						name:'СсылкаНаУзелОбмена',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:273px;height:25px;',
			items:
			[
				{
					text:'Установить для правил',
				},
				{
					text:'Снять для правил',
				},
				'-',
				{
					text:'Загрузить правила',
				},
				'-',
				{
					text:'Очистить отборы',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:285px;top:31px;width:311px;height:193px;',
			height: 193,width: 311,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбменДаннымиXML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:285px;top:6px;width:311px;height:25px;',
			items:
			[
				'-',
				{
					text:'Показать выбранные записи',
				},
			]
		},
					]
				},
				{
					title:'Параметры выгрузки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:590px;height:218px;',
			height: 218,width: 590,
			columns:
			[
				{
					text:'Наименование',
					width:'286',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Значение',
					width:'301',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбменДаннымиXML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'Значение',
					},
				]
			},
		},
					]
				},
				{
					title:'Комментарий',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:6px;width:590px;height:218px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьУзелДляОбмена',
			text: 'Узел для обмена:',
			style: 'position:absolute;left:6px;top:151px;width:146px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелДляОбмена',
			style: 'position:absolute;left:158px;top:151px;width:322px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не выгружать объекты по ссылкам',
			style: 'position:absolute;left:6px;top:223px;width:206px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:55px;width:604px;height:92px;',
			height: 92,width: 604,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Выгрузка в файл',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя файла данных:',
			style: 'position:absolute;left:0px;top:1px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаДанных',
			style: 'position:absolute;left:105px;top:0px;width:322px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Архивировать файл данных',
			style: 'position:absolute;left:0px;top:24px;width:161px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипИнформационнойБазыДляПодключения',
			text: 'Тип информационной базы:',
			style: 'position:absolute;left:0px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлатформа',
			text: 'Платформа:',
			style: 'position:absolute;left:381px;top:0px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользовательДляПодключения',
			text: 'Пользователь:',
			style: 'position:absolute;left:0px;top:73px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПароль',
			text: 'Пароль:',
			style: 'position:absolute;left:383px;top:73px;width:62px;height:19px;',
		},
					]
				},
				{
					title:'Выгрузка в ИБ приемник',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:172px;top:0px;width:202px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:454px;top:0px;width:150px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:604px;height:19px;',
			height: 19,width: 604,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Подключение файловая ИБ',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКаталогИБ',
			text: 'Каталог информационной базы:
',
			style: 'position:absolute;left:0px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:172px;top:0px;width:432px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерверПредприятия',
			text: 'Имя сервера 1С:Предприятия:',
			style: 'position:absolute;left:0px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяИнформационнойБазы',
			text: 'Информационная база:',
			style: 'position:absolute;left:325px;top:0px;width:123px;height:19px;',
		},
					]
				},
				{
					title:'Подключение серверная ИБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяСервераИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:172px;top:0px;width:149px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяИнформационнойБазыНаСервереДляПодключения',
			style: 'position:absolute;left:453px;top:0px;width:151px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Аутентификация Windows',
			style: 'position:absolute;left:0px;top:49px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПользовательИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:172px;top:73px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:454px;top:73px;width:150px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ТестПодключенияъ',
			text: 'Тест подключения...',
			style: 'position:absolute;left:454px;top:49px;width:150px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'Выгрузка в файл обмена',
			style: 'position:absolute;left:6px;top:30px;width:156px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Подключение и выгрузка данных в ИБ приемник',
			style: 'position:absolute;left:167px;top:30px;width:272px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУзелДляФоновогоОбмена',
			text: 'Узел для фонового обмена:',
			style: 'position:absolute;left:6px;top:175px;width:146px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелДляФоновогоОбмена',
			style: 'position:absolute;left:158px;top:175px;width:322px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипДобавленияДанныхИзФоновогоОбмена',
			text: 'Фоновый обмен:',
			style: 'position:absolute;left:6px;top:199px;width:146px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:158px;top:199px;width:187px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДополняемыхОбъектов',
			text: 'Количество объектов:',
			style: 'position:absolute;left:350px;top:199px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОбъектовДляФоновогоОбмена',
			style: 'position:absolute;left:485px;top:199px;width:125px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Режим отладки обработчиков выгрузки',
			style: 'position:absolute;left:6px;top:500px;width:232px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаОтладкиВыгрузки',
			text: 'Настройка отладки выгрузки...',
			style: 'position:absolute;left:239px;top:498px;width:200px;height:21px;',
		},
					]
				},
				{
					title:'Загрузка данных',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Имя файла для загрузки:',
			style: 'position:absolute;left:6px;top:6px;width:136px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаОбмена',
			style: 'position:absolute;left:146px;top:6px;width:464px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Дата выгрузки данных:',
			style: 'position:absolute;left:6px;top:216px;width:150px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Надпись5',
			style: 'position:absolute;left:166px;top:216px;width:342px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Версия правил обмена:',
			style: 'position:absolute;left:6px;top:194px;width:150px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВерсияПравилОбмена1',
			text: 'Надпись6',
			style: 'position:absolute;left:166px;top:194px;width:342px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать транзакции',
			style: 'position:absolute;left:6px;top:30px;width:157px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОбъектовНаТранзакцию',
			style: 'position:absolute;left:304px;top:54px;width:107px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакции',
			text: 'Количество элементов в транзакции:',
			style: 'position:absolute;left:29px;top:54px;width:267px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Задавать вопрос при автоматической загрузке данных при открытии обработки',
			style: 'position:absolute;left:6px;top:170px;width:433px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отслеживать коллизии при загрузке данных',
			style: 'position:absolute;left:6px;top:78px;width:251px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Оптимизированная запись объектов',
			style: 'position:absolute;left:6px;top:102px;width:405px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Режим отладки обработчиков загрузки',
			style: 'position:absolute;left:6px;top:499px;width:228px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаОтладкиЗагрузки',
			text: 'Настройка отладки загрузки...',
			style: 'position:absolute;left:239px;top:497px;width:200px;height:21px;',
		},
					]
				},
				{
					title:'Дополнительные настройки',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаПротокола',
			text: 'Имя файла, протокола обмена:',
			style: 'position:absolute;left:6px;top:211px;width:198px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаПротоколаОбмена',
			style: 'position:absolute;left:209px;top:211px;width:401px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дописывать данные в протокол обмена',
			style: 'position:absolute;left:6px;top:235px;width:227px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вывод в протокол информационных сообщений',
			style: 'position:absolute;left:6px;top:258px;width:266px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вывод информационных сообщений в окно сообщений',
			style: 'position:absolute;left:6px;top:187px;width:303px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Режим отладки',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать транзакции при выгрузке для планов обмена',
			style: 'position:absolute;left:6px;top:74px;width:329px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииДляПлановОбмена',
			text: 'Количество элементов в транзакции:',
			style: 'position:absolute;left:25px;top:98px;width:317px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииПриВыгрузкеДляПлановОбмена',
			style: 'position:absolute;left:352px;top:98px;width:137px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоОбъектовЗагрузкиДляОбновленияСтатуса',
			text: 'Количество обработанных объектов для обновления статуса:',
			style: 'position:absolute;left:6px;top:30px;width:337px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоОбъектовЗагрузкиДляОбновленияСтатуса',
			style: 'position:absolute;left:352px;top:30px;width:137px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать только объекты на которые есть права доступа',
			style: 'position:absolute;left:6px;top:122px;width:604px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически удалять недопустимые символы из строк для записи в XML',
			style: 'position:absolute;left:6px;top:143px;width:413px;height:19px;',
		},
					]
				},
			]
		},
	]
});