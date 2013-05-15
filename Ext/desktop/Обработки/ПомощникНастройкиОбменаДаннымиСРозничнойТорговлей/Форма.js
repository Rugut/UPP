Ext.define('Обработки.ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:424px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка обмена данными',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:183px;top:0px;width:557px;height:399px;',
			height: 399,width: 557,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Главная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВыборДействия',
			text: 'Настройка обмена данными между информационными базами',
			style: 'position:absolute;left:6px;top:6px;width:546px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеПользователя',
			text: 'Имя и пароль пользователя для подключения к инф. базе - приемнику',
			style: 'position:absolute;left:171px;top:170px;width:363px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Изменить существующую настройку обмена',
			style: 'position:absolute;left:7px;top:90px;width:250px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Создать новую настройку обмена данными',
			style: 'position:absolute;left:6px;top:50px;width:244px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Продолжить настройку обмена данными (для второй инф. базы)',
			style: 'position:absolute;left:6px;top:70px;width:352px;height:16px;',
		},
			]
		},
					]
				},
				{
					title:'Возможность подключения ко второй информационной базе',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипНастройки',
			text: 'Передача данных между информационными базами',
			style: 'position:absolute;left:6px;top:6px;width:546px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОФайлеСНастройками',
			text: 'Укажите имя файла с сохраненными настройками обмена, который был выгружен при настройке в первой информационной базе:',
			style: 'position:absolute;left:6px;top:55px;width:544px;height:42px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Есть возможность подключиться к информационной базе - приемнику',
			style: 'position:absolute;left:6px;top:50px;width:442px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Нет возможности подключиться к информационной базе - приемнику',
			style: 'position:absolute;left:6px;top:222px;width:436px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:246px;top:86px;width:260px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:161px;top:111px;width:390px;height:19px;',
			height: 19,width: 390,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Подключение файловая ИБ',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКаталогИБ1',
			text: 'Каталог базы:\r\n',
			style: 'position:absolute;left:0px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогИнформационнойБазыДляПодключения1',
			style: 'position:absolute;left:85px;top:0px;width:305px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерверПредприятия1',
			text: 'Имя сервера:',
			style: 'position:absolute;left:0px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяИнформационнойБазы1',
			text: 'Инф. база:',
			style: 'position:absolute;left:202px;top:0px;width:64px;height:19px;',
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
			disabled: false,
			name: 'ИмяСервераИнформационнойБазыДляПодключения1',
			style: 'position:absolute;left:84px;top:0px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяИнформационнойБазыНаСервереДляПодключения1',
			style: 'position:absolute;left:269px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Аутентификация Windows',
			style: 'position:absolute;left:161px;top:189px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПользовательИнформационнойБазыДляПодключения1',
			style: 'position:absolute;left:246px;top:152px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольИнформационнойБазыДляПодключения1',
			style: 'position:absolute;left:431px;top:152px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ТестПодключения1',
			text: 'Проверить...',
			style: 'position:absolute;left:431px;top:189px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеПользователя1',
			text: 'Требуется продолжение настройки обменов на стороне инф. базы - приемника',
			style: 'position:absolute;left:25px;top:237px;width:417px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеПользователя2',
			text: 'НЕ требуется продолжение настройки обменов на стороне инф. базы - приемника',
			style: 'position:absolute;left:25px;top:65px;width:425px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:509px;top:86px;width:41px;height:19px;',
		},
					]
				},
				{
					title:'Создание нового обмена',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипИнформационнойБазыДляОбмена',
			text: 'Укажите тип информационной базы-приемника:',
			style: 'position:absolute;left:6px;top:47px;width:250px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:28px;top:70px;width:413px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеИнформационнойБазы',
			text: 'Укажите ЛЮБОЕ удобное для вас наименование информационной базы-приемника:',
			style: 'position:absolute;left:6px;top:94px;width:435px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеИнформационнойБазыДляОбмена',
			style: 'position:absolute;left:28px;top:117px;width:413px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:141px;width:546px;height:253px;',
			height: 253,width: 546,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Настройки обмена по организации',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПояснениеКОбменуПоОрганизациям',
			text: 'Укажите параметры, информация по которым должна передаваться в информационную базу-приемник:',
			style: 'position:absolute;left:0px;top:37px;width:546px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:61px;width:546px;height:192px;',
			height: 192,width: 546,
			items:
			[
				{
					title:'Соответствия магазинов и складов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:532px;height:136px;',
			height: 136,width: 532,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код магазина',
					width:'100',
					dataIndex:'КодМагазина',
					flex:1,
				},
				{
					text:'Склад магазина',
					width:'100',
					dataIndex:'СкладМагазина',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Касса магазина',
					width:'100',
					dataIndex:'КассаМагазина',
					flex:1,
				},
				{
					text:'Касса ККМ магазина',
					width:'100',
					dataIndex:'КассаККММагазина',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'КодМагазина',
					},
					{
						name:'СкладМагазина',
					},
					{
						name:'Организация',
					},
					{
						name:'КассаМагазина',
					},
					{
						name:'КассаККММагазина',
					},
				]
			},
		},
					]
				},
				{
					title:'Типы цен, передаваемые в РТ',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:532px;height:136px;',
			height: 136,width: 532,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тип цены номенклатуры',
					width:'140',
					dataIndex:'ТипЦеныНоменклатуры',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТипЦеныНоменклатуры',
					},
				]
			},
		},
					]
				},
				{
					title:'Выгрузка себестоимости',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаВыгрузкиСебестоимости',
			style: 'position:absolute;left:232px;top:30px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаВыгрузкиСебестоимости',
			text: 'Дата начала выгрузки себестоимости:',
			style: 'position:absolute;left:6px;top:30px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодичностьПередачиСебестоимости',
			style: 'position:absolute;left:232px;top:54px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичностьПередачиСебестоимости',
			text: 'Периодичность передачи себестоимости:',
			style: 'position:absolute;left:6px;top:54px;width:222px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособВыгрузкиСебестоимости',
			text: 'Способ выгрузки себестоимости:',
			style: 'position:absolute;left:6px;top:6px;width:222px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпособВыгрузкиСебестоимости',
			style: 'position:absolute;left:232px;top:6px;width:191px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВыборДействия1',
			text: 'Подключение к информационной базе-приемнику',
			style: 'position:absolute;left:6px;top:6px;width:545px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыборДействия5',
			text: 'Выбор файла настроек обмена',
			style: 'position:absolute;left:6px;top:6px;width:544px;height:39px;text-align:center;',
		},
					]
				},
				{
					title:'Фильтрация справочников',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаССохраненнымиНастройкамиДляНастройкиОбмена',
			text: 'Имя файла с сохраненными настройками обмена для информационной базы - приемника (Этот файл нужно использовать для продолжения настройки обмена в информационной базе - приемнике):',
			style: 'position:absolute;left:6px;top:98px;width:546px;height:50px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыборДействия4',
			text: 'Сопоставление справочников и документов в информационных базах',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипНастройки2',
			text: 'Настройка обмена данными успешно завершена',
			style: 'position:absolute;left:6px;top:6px;width:546px;height:39px;text-align:center;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура',
			style: 'position:absolute;left:19px;top:73px;width:99px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагенты',
			style: 'position:absolute;left:19px;top:93px;width:99px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Склады',
			style: 'position:absolute;left:19px;top:113px;width:99px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кассы',
			style: 'position:absolute;left:19px;top:133px;width:99px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыборДействия6',
			text: 'Фильтрация справочников при обмене',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипИнформационнойБазыДляОбмена1',
			text: 'Укажите, какие справочники необходимо фильтровать при обмене',
			style: 'position:absolute;left:6px;top:49px;width:364px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:178px;width:543px;height:215px;',
			height: 215,width: 543,
			items:
			[
				{
					title:'Организации',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПояснениеКОбменуПоОрганизациям1',
			text: 'Документы по выбранным организациям будут передаваться в базу-приемник.',
			style: 'position:absolute;left:6px;top:10px;width:529px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'Организация',
					width:'574',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Организация',
					},
				]
			},
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'',
					width:'22',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей/ВыбратьПоСсылке/100'},
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
					]
				},
				{
					title:'Контрагенты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'',
					width:'22',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей/ВыбратьПоСсылке/100'},
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
					]
				},
				{
					title:'Склады',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'',
					width:'22',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей/ВыбратьПоСсылке/100'},
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
					]
				},
				{
					title:'Кассы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:159px;',
			height: 159,width: 529,
			columns:
			[
				{
					text:'',
					width:'22',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей/ВыбратьПоСсылке/100'},
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
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организации',
			style: 'position:absolute;left:19px;top:152px;width:99px;height:15px;',
		},
					]
				},
				{
					title:'Ответные пакеты второй информационной базы',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Обмен в ДВУХ направлениях',
			style: 'position:absolute;left:6px;top:47px;width:199px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Обмен в ОДНОМ направлении',
			style: 'position:absolute;left:6px;top:219px;width:207px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыборДействия3',
			text: 'Взаимодействие информационных баз при обмене',
			style: 'position:absolute;left:6px;top:6px;width:546px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеКСопоставлению',
			text: 'При сопоставление в фоновом режиме при каждом обмене данными будет передаваться дополнительная информация о сопоставлении объектов. Рекомендуется для информационных баз с большим объемом данных.',
			style: 'position:absolute;left:23px;top:118px;width:526px;height:40px;',
		},
					]
				},
				{
					title:'Редактирование существующего обмена',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаНастроекОбменаПервойИнформационнойБазы',
			style: 'position:absolute;left:32px;top:101px;width:452px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись121',
			text: 'Как определить параметры подключения к инф. базе - приемнику',
			style: 'position:absolute;left:194px;top:130px;width:339px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыборДействия2',
			text: 'Параметры обмена и возможные ограничения',
			style: 'position:absolute;left:6px;top:6px;width:546px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеОбменВДвухнаправления',
			text: 'Изменения, которые произошли в вашей информационной базе, будут отправлены в информационную базу-приемник, а изменения, которые произошли в приемнике, будут направлены в вашу информационную базу',
			style: 'position:absolute;left:255px;top:68px;width:297px;height:80px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеКСопоставлению1',
			text: 'Данная операция может потребовать значительного времени. Рекомендуется для информационных баз с маленьким объемом данных',
			style: 'position:absolute;left:23px;top:63px;width:526px;height:36px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипНастройки2',
			text: 'Первый этап настройки успешно завершен',
			style: 'position:absolute;left:6px;top:6px;width:546px;height:39px;text-align:center;',
		},
					]
				},
				{
					title:'Основные параметры настройки обмена данными',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:13px;top:206px;width:539px;height:160px;',
			height: 160,width: 539,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Файловый',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКаталогОбменаИнформацией',
			text: 'Каталог:',
			style: 'position:absolute;left:5px;top:0px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогОбменаИнформацией',
			style: 'position:absolute;left:87px;top:0px;width:452px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьFTPАдресОбмена',
			text: 'Адрес:',
			style: 'position:absolute;left:6px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользовательFTPСоединения',
			text: 'Пользователь:',
			style: 'position:absolute;left:6px;top:24px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольFTPСоединения',
			text: 'Пароль:',
			style: 'position:absolute;left:372px;top:24px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМаксимальныйРазмерПакетаЧерезFTP',
			text: 'Максимальный пакет:',
			style: 'position:absolute;left:177px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользовательПроксиFTP',
			text: 'Пользователь:',
			style: 'position:absolute;left:6px;top:139px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольПроксиFTP',
			text: 'Пароль:',
			style: 'position:absolute;left:372px;top:141px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерверПроксиFTP',
			text: 'Сервер:',
			style: 'position:absolute;left:6px;top:115px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколПроксиFTP',
			text: 'Протокол:',
			style: 'position:absolute;left:7px;top:92px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипИнформационнойБазыДляПодключения',
			text: 'Тип информационной базы:',
			style: 'position:absolute;left:6px;top:24px;width:144px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПользовательДляПодключения',
			text: 'Пользователь:',
			style: 'position:absolute;left:6px;top:98px;width:144px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПароль',
			text: 'Пароль:',
			style: 'position:absolute;left:339px;top:98px;width:48px;height:19px;',
		},
					]
				},
				{
					title:'FTPОбмен',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'FTPАдресОбмена',
			style: 'position:absolute;left:87px;top:0px;width:278px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить...',
			style: 'position:absolute;left:419px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПользовательFTPСоединения',
			style: 'position:absolute;left:87px;top:24px;width:278px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольFTPСоединения',
			style: 'position:absolute;left:419px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПортFTPСоединения',
			style: 'position:absolute;left:419px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Настройки прокси-сервера',
			style: 'position:absolute;left:6px;top:72px;width:533px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПользовательПроксиFTP',
			style: 'position:absolute;left:87px;top:139px;width:278px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольПроксиFTP',
			style: 'position:absolute;left:419px;top:139px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерверПроксиFTP',
			style: 'position:absolute;left:87px;top:115px;width:278px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПортПроксиFTP',
			style: 'position:absolute;left:419px;top:115px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПротоколПроксиFTP',
			style: 'position:absolute;left:87px;top:92px;width:111px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пассивное FTP соединение',
			style: 'position:absolute;left:6px;top:48px;width:165px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МаксимальныйРазмерОтправляемогоПолучаемогоПакетаЧерезFTP1',
			style: 'position:absolute;left:302px;top:48px;width:95px;height:19px;',
		},
					]
				},
				{
					title:'Обмен через COM',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:154px;top:24px;width:385px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:49px;width:533px;height:19px;',
			height: 19,width: 533,
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
			text: 'Каталог базы:\r\n',
			style: 'position:absolute;left:0px;top:0px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:148px;top:0px;width:385px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерверПредприятия',
			text: 'Сервер 1С:Предприятия:',
			style: 'position:absolute;left:0px;top:0px;width:142px;height:19px;',
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
			disabled: false,
			name: 'ИмяСервераИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:148px;top:0px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяИнформационнойБазы',
			text: 'Инф. база:',
			style: 'position:absolute;left:331px;top:0px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяИнформационнойБазыНаСервереДляПодключения',
			style: 'position:absolute;left:398px;top:0px;width:135px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Аутентификация Windows',
			style: 'position:absolute;left:6px;top:74px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПользовательИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:154px;top:98px;width:178px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольИнформационнойБазыДляПодключения',
			style: 'position:absolute;left:403px;top:98px;width:136px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ТестПодключения',
			text: 'Проверить...',
			style: 'position:absolute;left:403px;top:74px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаПравилДляВыгрузкиДанных2',
			text: 'Укажите параметры подключения к информационной базе для настройки обмена:',
			style: 'position:absolute;left:6px;top:0px;width:435px;height:19px;',
		},
					]
				},
				{
					title:'Обмен через почту',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПорт',
			text: 'Порт:',
			style: 'position:absolute;left:372px;top:0px;width:42px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПортПроксиFTP',
			text: 'Порт:',
			style: 'position:absolute;left:372px;top:117px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУчетнаяЗаписьПриемаОтпревкиСообщений',
			text: 'Учетная запись:',
			style: 'position:absolute;left:0px;top:72px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УчетнаяЗаписьПриемаОтправкиСообщений',
			style: 'position:absolute;left:100px;top:72px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПочтовыйАдресПолучателя',
			text: 'Адрес получателя:',
			style: 'position:absolute;left:0px;top:24px;width:98px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПочтовыйАдресПолучателя',
			style: 'position:absolute;left:100px;top:24px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаПравилДляВыгрузкиДанных3',
			text: 'Укажите адрес, на который необходимо отсылать сообщения об обмене:',
			style: 'position:absolute;left:0px;top:0px;width:404px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайлаПравилДляВыгрузкиДанных4',
			text: 'Укажите учетную запись, от имени которой необходимо формировать сообщения об обмене:',
			style: 'position:absolute;left:0px;top:48px;width:479px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеКПроцедуреОбмена',
			text: 'Надпись пояснение к процедуре обмена',
			style: 'position:absolute;left:224px;top:141px;width:328px;height:60px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Подключение к информационной базе - приемнику',
			style: 'position:absolute;left:224px;top:50px;width:278px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ДополнительныеНастройкиОбменаДанными',
			text: 'Дополнительно ...',
			style: 'position:absolute;left:442px;top:375px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеОбменВОдномНаправлении',
			text: 'Изменения, которые произошли в вашей информационной базе, будут отправлены в информационную базу-приемник',
			style: 'position:absolute;left:246px;top:235px;width:306px;height:56px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:50px;width:210px;height:150px;',
			height: 150,width: 210,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница каталог',
					items:
					[
					]
				},
				{
					title:'Страница FTP',
				},
				{
					title:'Страница подключение',
				},
				{
					title:'Страница почта',
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Единый файловый ресурс (каталог обмена)',
			style: 'position:absolute;left:224px;top:72px;width:242px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Единый FTP ресурс',
			style: 'position:absolute;left:224px;top:94px;width:119px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Электронная почта',
			style: 'position:absolute;left:223px;top:117px;width:119px;height:21px;',
		},
			]
		},
					]
				},
				{
					title:'Настройки знакомства информационных баз',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Выполнить сопоставление объектов в фоновом режиме',
			style: 'position:absolute;left:6px;top:99px;width:363px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выполнить сопоставление объектов при первом обмене',
			style: 'position:absolute;left:6px;top:45px;width:363px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ДополнитеьльныеНастройкиФоновогоЗнакомства',
			text: 'Дополнительно ...',
			style: 'position:absolute;left:427px;top:372px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипИнформационнойБазыДляПодключения1',
			text: 'Тип инф. базы:',
			style: 'position:absolute;left:161px;top:86px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВажнопервыйЭтап',
			text: 'Для функционирования обмена необходимо выполнить настройки в информационной базе-приемнике',
			style: 'position:absolute;left:32px;top:48px;width:520px;height:36px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Не выполнять первоначального сопоставления объектов',
			style: 'position:absolute;left:6px;top:159px;width:363px;height:19px;',
		},
					]
				},
				{
					title:'Итоговая страница завершения обмена',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСозданнаяНастройкаCOM1',
			text: 'Настройка для обмена данными:',
			style: 'position:absolute;left:6px;top:205px;width:173px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СозданнаяНастройкаОбмена1',
			style: 'position:absolute;left:36px;top:228px;width:390px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Выполнить1',
			text: 'Выполнить обмен',
			style: 'position:absolute;left:430px;top:228px;width:122px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаНастроекОбменаПервойИнформационнойБазы1',
			style: 'position:absolute;left:36px;top:154px;width:516px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбменовПоРасписанию',
			text: 'Обмен данными по расписанию:',
			style: 'position:absolute;left:6px;top:275px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДобавлениеНастройкиВСуществующееРасписание',
			text: 'Добавить настройку в существующее расписание',
			style: 'position:absolute;left:36px;top:299px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДобавлениеНастройкиВНовоеРасписание',
			text: 'Создать новое расписание для настройки обмена',
			style: 'position:absolute;left:36px;top:324px;width:281px;height:19px;',
		},
					]
				},
				{
					title:'Итоговая страница завершения обмена COM',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСозданнаяНастройкаCOM',
			text: 'Настройка для обмена данными:',
			style: 'position:absolute;left:6px;top:50px;width:173px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СозданнаяНастройкаОбмена',
			style: 'position:absolute;left:39px;top:73px;width:385px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Выполнить',
			text: 'Выполнить обмен',
			style: 'position:absolute;left:430px;top:73px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбменовПоРасписанию1',
			text: 'Обмен данными по расписанию:',
			style: 'position:absolute;left:6px;top:115px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДобавлениеНастройкиВСуществующееРасписание1',
			text: 'Добавить настройку в существующее расписание',
			style: 'position:absolute;left:36px;top:139px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДобавлениеНастройкиВНовоеРасписание1',
			text: 'Создать новое расписание для настройки обмена',
			style: 'position:absolute;left:36px;top:164px;width:281px;height:19px;',
		},
					]
				},
				{
					title:'Параметры обмена документами',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПараметрыОбменаДокументами',
			text: 'Параметры обмена данными',
			style: 'position:absolute;left:6px;top:6px;width:545px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаВыгрузкиДокументов',
			text: 'Укажите начальную дату для выгрузки документов:',
			style: 'position:absolute;left:6px;top:50px;width:270px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаВыгрузкиДокументов',
			style: 'position:absolute;left:282px;top:50px;width:100px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:120px;width:545px;height:273px;',
			height: 273,width: 545,
			items:
			[
				{
					title:'Настройки выгрузки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:531px;height:214px;',
			height: 214,width: 531,
			columns:
			[
				{
					text:'Выгрузка',
					width:'54',
					dataIndex:'ЭтоНастройкаДляВыгрузки',
					flex:1,
				},
				{
					text:'Наименование объекта',
					width:'185',
					dataIndex:'НаименованиеПравилаВыгрузки',
					flex:1,
				},
				{
					text:'Настройка выгрузки',
					width:'157',
					dataIndex:'НастройкаВыгрузки',
					flex:1,
				},
				{
					text:'Выгружать',
					width:'44',
					dataIndex:'ВыгружатьДанные',
					flex:1,
				},
				{
					text:'Выгружать по ссылке',
					width:'74',
					dataIndex:'ВыгружатьПоСсылке',
					flex:1,
				},
				{
					text:'Код правила выгрузки',
					width:'92',
					dataIndex:'КодПравилаВыгрузки',
					flex:1,
				},
				{
					text:'Код правила обмена',
					width:'100',
					dataIndex:'КодПравилаОбмена',
					flex:1,
				},
				{
					text:'Настройка не поддерживается',
					width:'100',
					dataIndex:'НастройкаНеПоддерживается',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ЭтоНастройкаДляВыгрузки',
					},
					{
						name:'НаименованиеПравилаВыгрузки',
					},
					{
						name:'НастройкаВыгрузки',
					},
					{
						name:'ВыгружатьДанные',
					},
					{
						name:'ВыгружатьПоСсылке',
					},
					{
						name:'КодПравилаВыгрузки',
					},
					{
						name:'КодПравилаОбмена',
					},
					{
						name:'НастройкаНеПоддерживается',
					},
				]
			},
		},
					]
				},
				{
					title:'Сопоставление объектов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:531px;height:212px;',
			height: 212,width: 531,
			columns:
			[
				{
					text:'Выгрузка',
					width:'60',
					dataIndex:'ЭтоНастройкаДляВыгрузки',
					flex:1,
				},
				{
					text:'Наименование объекта',
					width:'130',
					dataIndex:'НаименованиеПравилаОбмена',
					flex:1,
				},
				{
					text:'Настройка сопоставления',
					width:'140',
					dataIndex:'ИмяНастройкиДляПользователя',
					flex:1,
				},
				{
					text:'Описание',
					width:'130',
					dataIndex:'ОписаниеНастройкиДляПользователя',
					flex:1,
				},
				{
					text:'Имя настройки для алгоритма',
					width:'100',
					dataIndex:'ИмяНастройкиДляАлгоритма',
					flex:1,
				},
				{
					text:'Настройка не поддерживается',
					width:'100',
					dataIndex:'НастройкаНеПоддерживается',
					flex:1,
				},
				{
					text:'Вариант поиска не поддерживается',
					width:'100',
					dataIndex:'ВариантПоискаНеПоддерживается',
					flex:1,
				},
				{
					text:'Код правила обмена',
					width:'100',
					dataIndex:'КодПравилаОбмена',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ЭтоНастройкаДляВыгрузки',
					},
					{
						name:'НаименованиеПравилаОбмена',
					},
					{
						name:'ИмяНастройкиДляПользователя',
					},
					{
						name:'ОписаниеНастройкиДляПользователя',
					},
					{
						name:'ИмяНастройкиДляАлгоритма',
					},
					{
						name:'НастройкаНеПоддерживается',
					},
					{
						name:'ВариантПоискаНеПоддерживается',
					},
					{
						name:'КодПравилаОбмена',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПрефиксДляЗагружаемыхДокументов',
			style: 'position:absolute;left:376px;top:73px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрефиксТекущейИБ',
			text: 'Префикс для загрузки документов в текущую информационную базу:',
			style: 'position:absolute;left:6px;top:97px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПрефиксДляДокументовВТекущейИБ',
			style: 'position:absolute;left:376px;top:97px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрефиксТекущейБазыПриемника',
			text: 'Префикс для загрузки документов в информационную базу приемник:',
			style: 'position:absolute;left:6px;top:73px;width:366px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:399px;',
			height: 399,width: 181,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница настройки',
					items:
					[
					]
				},
				{
					title:'Страница готово',
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:399px;width:740px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Назад',
				},
				'-',
				{
					text:'Далее',
				},
			]
		},
	]
});