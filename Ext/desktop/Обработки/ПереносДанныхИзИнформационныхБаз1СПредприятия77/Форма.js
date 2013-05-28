Ext.define('Обработки.ПереносДанныхИзИнформационныхБаз1СПредприятия77.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:610px;height:410px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перенос данных из информационных баз 1С:Предприятия 7.7',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:594px;height:394px;',
			height: 394,width: 594,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'СтраницаНачало',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗагрузитьИзИБ',
			text: 'Загрузить данные из информационной базы',
			style: 'position:absolute;left:42px;top:95px;width:510px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеЗагрузитьИзИБ',
			text: 'Выберите этот  вариант, если вы хотите, чтобы программа загрузила данные непосредственно из Вашей информационной базы',
			style: 'position:absolute;left:105px;top:162px;width:445px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗагрузитьИзФайла',
			text: 'Загрузить данные из файла',
			style: 'position:absolute;left:42px;top:253px;width:510px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеЗагрузитьИзФайла',
			text: 'Выберите этот вариант, если Вы уже выгрузили данные из Вашей информационной базы при помощи "Помощника перехода на <Очень длинный синоним конфигурации, редакция N.M>"',
			style: 'position:absolute;left:105px;top:321px;width:445px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовок',
			text: 'Выберите вариант загрузки данных из информационной базы\r\nна платформе 1С:Предприятие 7.7',
			style: 'position:absolute;left:0px;top:0px;width:594px;height:60px;text-align:center;',
		},
					]
				},
				{
					title:'ИБСтраница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗаголовок1',
			text: 'Укажите информационную базу, из которой\r\nтребуется загрузить данные',
			style: 'position:absolute;left:138px;top:0px;width:456px;height:33px;text-align:center;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:138px;top:78px;width:456px;height:96px;',
			height: 96,width: 456,
			columns:
			[
				{
					text:'Информационные Базы:',
					width:'459',
					dataIndex:'Имя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПереносДанныхИзИнформационныхБаз1СПредприятия77/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Имя',
					},
				]
			},
		},
		{
			xtype: 'button',
			name: 'Далее',
			text: 'Далее',
			style: 'position:absolute;left:491px;top:372px;width:103px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснения1',
			text: 'По кнопке "Далее" будет произведен перенос данных.',
			style: 'position:absolute;left:138px;top:350px;width:456px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОПути',
			text: '',
			style: 'position:absolute;left:138px;top:177px;width:456px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьШапкаТаблицы',
			text: 'Информационные Базы 1С:Предприятия 7.7:',
			style: 'position:absolute;left:166px;top:58px;width:232px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'ВНачало',
			text: 'В начало',
			style: 'position:absolute;left:382px;top:372px;width:103px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'Надпись49',
			text: 'Расчетные данные будут перенесены с:',
			style: 'position:absolute;left:138px;top:223px;width:456px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись50',
			text: 'Будут перенесены все кадровые данные',
			style: 'position:absolute;left:138px;top:205px;width:456px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Взаиморасчеты по зарплате ведутся в разрезе месяцев ее начисления',
			style: 'position:absolute;left:138px;top:303px;width:389px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обнулить перенесенную задолженность по зарплате',
			style: 'position:absolute;left:138px;top:327px;width:389px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМинимальныйРелиз',
			text: 'Перенос данных возможен из релиза не ниже',
			style: 'position:absolute;left:138px;top:36px;width:237px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерМинимальногоРелиза',
			text: '7.70.000',
			style: 'position:absolute;left:378px;top:36px;width:58px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '2006 года',
			style: 'position:absolute;left:158px;top:243px;width:295px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: '2007 года',
			style: 'position:absolute;left:158px;top:262px;width:295px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: '2008 года',
			style: 'position:absolute;left:158px;top:281px;width:295px;height:15px;',
		},
			]
		},
					]
				},
				{
					title:'ФСтраница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗаголовок3',
			text: 'Укажите файл из которого требуется загрузить данные',
			style: 'position:absolute;left:138px;top:0px;width:456px;height:33px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'Далее2',
			text: 'Далее',
			style: 'position:absolute;left:491px;top:372px;width:103px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'По кнопке "Далее" будет произведена загрузка данных.',
			style: 'position:absolute;left:138px;top:350px;width:456px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'ВНачало1',
			text: 'В начало',
			style: 'position:absolute;left:382px;top:372px;width:103px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаВыгруженныхДанных',
			width: 456,
			height: 19,
			style: 'position:absolute;left:138px;top:73px;width:456px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьШапкаТаблицы1',
			text: 'Путь к файлу данных:',
			style: 'position:absolute;left:166px;top:51px;width:335px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Описание загружаемых данных',
			style: 'position:absolute;left:138px;top:102px;width:456px;height:183px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизацияЗаголовок',
			text: 'Организация:',
			style: 'position:absolute;left:148px;top:182px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Загружаемые данные:',
			style: 'position:absolute;left:148px;top:209px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Дата выгрузки данных:',
			style: 'position:absolute;left:148px;top:256px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Конфигурация:',
			style: 'position:absolute;left:148px;top:128px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Номер релиза:',
			style: 'position:absolute;left:148px;top:155px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонфигурация',
			text: '',
			style: 'position:absolute;left:294px;top:128px;width:292px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРелиза',
			text: '',
			style: 'position:absolute;left:294px;top:155px;width:292px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: '',
			style: 'position:absolute;left:294px;top:182px;width:292px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: '',
			style: 'position:absolute;left:294px;top:209px;width:292px;height:28px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: '',
			style: 'position:absolute;left:294px;top:256px;width:292px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:171px;top:246px;width:410px;height:2px;',
		},
					]
				},
				{
					title:'ИБСтраница2',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗаголовок2',
			text: 'Перенос данных',
			style: 'position:absolute;left:138px;top:0px;width:456px;height:33px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'ИБНадписьДействий1',
			text: 'Подключение к информационной базе',
			style: 'position:absolute;left:179px;top:38px;width:415px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'ИБНадписьДействий2',
			text: 'Выгрузка данных',
			style: 'position:absolute;left:179px;top:76px;width:415px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'ИБНадписьДействий3',
			text: 'Загрузка данных',
			style: 'position:absolute;left:179px;top:114px;width:415px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'ИБНадписьДействий4',
			text: 'Проверка загруженных данных',
			style: 'position:absolute;left:179px;top:152px;width:415px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:138px;top:269px;width:456px;height:125px;',
			height: 125,width: 456,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница ошибка',
					items:
					[
		{
			xtype: 'button',
			name: 'ИБДалееКонОшибка',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ИБИнформацияОбОшибках',
			text: 'Информация о возникших ошибках',
			style: 'position:absolute;left:0px;top:0px;width:210px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'Рекомендуется ознакомиться с информацией об ошибках. Возможно, потребуется повторить перенос данных, либо перейти к началу и изменить вариант переноса.',
			style: 'position:absolute;left:0px;top:60px;width:456px;height:31px;',
		},
		{
			xtype: 'button',
			name: 'ИБВНачало1',
			text: 'В начало',
			style: 'position:absolute;left:0px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ИБПовторить1',
			text: 'Повторить',
			style: 'position:absolute;left:110px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ИБНадписьИмяИсточникаОшибка',
			text: '',
			style: 'position:absolute;left:3px;top:28px;width:453px;height:32px;text-align:left;',
		},
					]
				},
				{
					title:'Страница успех проф',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Вы можете продолжить работу по переносу данных и провести перенос из другой информационной базы либо вернуться в начало и изменить вариант переноса данных.',
			style: 'position:absolute;left:0px;top:60px;width:456px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: ' Перенос данных прошел успешно!',
			style: 'position:absolute;left:0px;top:0px;width:456px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ИБВНачало2',
			text: 'В начало',
			style: 'position:absolute;left:0px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ИБПовторить2',
			text: 'Продолжить',
			style: 'position:absolute;left:110px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ИБДалееКонПроф',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ИБНадписьИмяИсточникаУспешно',
			text: '',
			style: 'position:absolute;left:3px;top:28px;width:453px;height:32px;text-align:left;',
		},
					]
				},
				{
					title:'Страница успех базовая',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись38',
			text: ' В программу были успешно загружены сведения из информационной базы:',
			style: 'position:absolute;left:0px;top:0px;width:456px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ИБНадписьИмяИсточникаБазовая',
			text: '',
			style: 'position:absolute;left:3px;top:28px;width:453px;height:32px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'ИБДалееКонБазовая',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
					]
				},
				{
					title:'Страница процесс',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИБСостояниеПереноса',
			text: '',
			style: 'position:absolute;left:0px;top:0px;width:454px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ИБНадписьИмяИсточникаПроцесс',
			text: '',
			style: 'position:absolute;left:1px;top:28px;width:453px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Внимание! Операция может занять продолжительное время.',
			style: 'position:absolute;left:0px;top:60px;width:326px;height:22px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИБИндикаторНадпись',
			text: 'Выполнение:',
			style: 'position:absolute;left:138px;top:227px;width:456px;height:15px;',
		},
					]
				},
				{
					title:'ФСтраница2',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗаголовок4',
			text: 'Перенос данных',
			style: 'position:absolute;left:138px;top:0px;width:456px;height:33px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'ФНадписьДействий3',
			text: 'Загрузка данных',
			style: 'position:absolute;left:179px;top:39px;width:415px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'ФНадписьДействий4',
			text: 'Проверка загруженных данных',
			style: 'position:absolute;left:179px;top:77px;width:415px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:138px;top:269px;width:456px;height:125px;',
			height: 125,width: 456,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница ошибка',
					items:
					[
		{
			xtype: 'label',
			name: 'ФИнформацияОбОшибках',
			text: 'Информация о возникших ошибках',
			style: 'position:absolute;left:0px;top:0px;width:210px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'Надпись48',
			text: 'Рекомендуется ознакомиться с информацией об ошибках. Возможно, потребуется повторить перенос данных, либо перейти к началу и изменить вариант переноса.',
			style: 'position:absolute;left:0px;top:60px;width:456px;height:31px;',
		},
		{
			xtype: 'button',
			name: 'ФВНачало1',
			text: 'В начало',
			style: 'position:absolute;left:0px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФПовторить1',
			text: 'Повторить',
			style: 'position:absolute;left:110px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФДалееКонОшибка',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ФНадписьИмяИсточникаОшибка',
			text: '',
			style: 'position:absolute;left:3px;top:28px;width:453px;height:32px;text-align:left;',
		},
					]
				},
				{
					title:'Страница успех проф',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись45',
			text: 'Вы можете продолжить работу по переносу данных и провести загрузку информации из другого файла данных либо вернуться в начало и изменить вариант переноса данных.',
			style: 'position:absolute;left:0px;top:60px;width:456px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: ' Перенос данных прошел успешно!',
			style: 'position:absolute;left:0px;top:0px;width:456px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФНачало2',
			text: 'В начало',
			style: 'position:absolute;left:0px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФПовторить2',
			text: 'Продолжить',
			style: 'position:absolute;left:110px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФДалееКонПроф',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ФНадписьИмяИсточникаПроф',
			text: '',
			style: 'position:absolute;left:3px;top:28px;width:453px;height:32px;text-align:left;',
		},
					]
				},
				{
					title:'Страница успех базовая',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись47',
			text: ' В программу были успешно загружены сведения из файла данных:',
			style: 'position:absolute;left:0px;top:0px;width:456px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ФНадписьИмяИсточникаБазовая',
			text: '',
			style: 'position:absolute;left:3px;top:28px;width:453px;height:32px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'ФДалееКонБазовая',
			text: 'Завершить',
			style: 'position:absolute;left:353px;top:99px;width:103px;height:22px;',
		},
					]
				},
				{
					title:'Страница процесс',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФСостояниеПереноса',
			text: '',
			style: 'position:absolute;left:2px;top:0px;width:454px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ФНадписьИмяИсточникаПроцесс',
			text: '',
			style: 'position:absolute;left:3px;top:28px;width:453px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись44',
			text: 'Внимание! Операция может занять продолжительное время.',
			style: 'position:absolute;left:2px;top:60px;width:454px;height:22px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ИБСтраница3',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗаголовок5',
			text: 'Копирование помощника перехода для 1С:Предприятия 7.7',
			style: 'position:absolute;left:138px;top:0px;width:456px;height:33px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьИБТекстОшибкиПриПодключении',
			text: '',
			style: 'position:absolute;left:138px;top:38px;width:456px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ФВНачало2',
			text: 'В начало',
			style: 'position:absolute;left:138px;top:322px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ФПовторить3',
			text: 'Повторить',
			style: 'position:absolute;left:248px;top:322px;width:103px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИБОписаниеОшибкиПриПодключении',
			text: '',
			style: 'position:absolute;left:138px;top:63px;width:456px;height:31px;',
		},
		{
			xtype: 'button',
			name: 'ФДалееКонПомощник',
			text: 'Завершить',
			style: 'position:absolute;left:491px;top:372px;width:103px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ПерейтиКЗагрузкеФайла',
			text: 'Перейти к загрузке данных из файла',
			style: 'position:absolute;left:358px;top:322px;width:227px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнструкции',
			text: 'Вы можете повторить попытку подключения, либо перенести данные с помощью помощника перехода для 1С:Предприятия 7.7.',
			style: 'position:absolute;left:138px;top:105px;width:456px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнструкции1',
			text: 'Для использования помощника для 1С:Предприятия 7.7 Вам необходимо:',
			style: 'position:absolute;left:138px;top:134px;width:456px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнструкции2',
			text: '- перейти к загрузке данных из файла.',
			style: 'position:absolute;left:138px;top:197px;width:456px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнструкции3',
			text: '- скопировать помощника в каталог ExtForms информационной базы, из которой необходимо перенести данные',
			style: 'position:absolute;left:138px;top:151px;width:456px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнструкции4',
			text: '- запустить его через меню Сервис -> Дополнительные возможности',
			style: 'position:absolute;left:138px;top:180px;width:456px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСкопироватьВИБ',
			text: 'Скопировать помощник в папку с информационной базой [мИмяИБ]',
			style: 'position:absolute;left:138px;top:234px;width:456px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСкопироватьВПапку',
			text: 'Выбрать папку и скопировать помощник в нее',
			style: 'position:absolute;left:138px;top:271px;width:456px;height:15px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});