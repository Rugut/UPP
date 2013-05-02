Ext.define('Документы.КорректировкаЗаписейРегистров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:363px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка записей регистров',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:57px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:139px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:157px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Настройка состава регистров',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:338px;width:650px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:311px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:311px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:287px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:287px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:634px;height:225px;',
			height: 225,width: 634,
			items:
			[
				{
					title:'Заполнение движений',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать заполнение движений',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:27px;width:620px;height:168px;',
			height: 168,width: 620,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Подсказка заполнение движений',
					items:
					[
					]
				},
				{
					title:'Таблица заполнение движений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:620px;height:144px;',
			height: 144,width: 620,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Действие',
					width:'192',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Документ',
					width:'182',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Примечание',
					width:'216',
					dataIndex:'Примечание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Действие',
					},
					{
						name:'Документ',
					},
					{
						name:'Примечание',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить движения',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ПодсказкаВыполняемыеДействия',
			text: 'Документ содержит сервис автоматического заполнения движений.

Сервис подключается при установке флажка «Использовать заполнение движений» на закладке «Заполнение движений». При этом становится видимой табличная часть «Заполнение движений».

При нажатии на кнопку «Заполнить движения» для каждой строки табличной части «Заполнение движений» выполняются указанные действия и, при необходимости, заполняются движения регистров накопления, регистров сведений и регистров бухгалтерии. Заполненные движения регистров отображаются на соответствующих закладках.

После заполнения движения можно отредактировать или удалить.


',
			style: 'position:absolute;left:0px;top:9px;width:620px;height:159px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Регистры бухгалтерии',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					title:'Бухгалтерский учет',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:606px;height:133px;',
			height: 133,width: 606,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'100',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'80',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Валюта Дт',
					width:'80',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Вал. сумма Дт',
					width:'80',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'80',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'100',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'80',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Валюта Кт',
					width:'80',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Вал. сумма Кт',
					width:'80',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'80',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ журнала',
					width:'80',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'СчетДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
					},
					{
						name:'СчетКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			items:
			[
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Переключить активность',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'Налоговый учет',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:606px;height:133px;',
			height: 133,width: 606,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'88',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'88',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Вид учета Дт',
					width:'88',
					dataIndex:'ВидУчетаДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'136',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'136',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'136',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'95',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'95',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Вид учета Кт',
					width:'95',
					dataIndex:'ВидУчетаКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'142',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'142',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'142',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Сумма',
					width:'124',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'124',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ журнала',
					width:'124',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'СчетДт',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'ВидУчетаДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СчетКт',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'ВидУчетаКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			items:
			[
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Переключить активность',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
				{
					title:'Международный учет',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:606px;height:133px;',
			height: 133,width: 606,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'56',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'СубконтоДт1',
					width:'95',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'СубконтоДт2',
					width:'95',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'СубконтоДт3',
					width:'95',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Валюта',
					width:'41',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Вал. сумма',
					width:'93',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Количество',
					width:'98',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'78',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'СубконтоКт1',
					width:'98',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'СубконтоКт2',
					width:'98',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'СубконтоКт3',
					width:'98',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Вал. сумма',
					width:'81',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Количество',
					width:'85',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Сумма',
					width:'63',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'163',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'№ж',
					width:'24',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Организация',
					},
					{
						name:'СчетДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'СчетКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			items:
			[
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Переключить активность',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
				{
					title:'Бюджетирование',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:606px;height:132px;',
			height: 132,width: 606,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'155',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'57',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Валюта Дт',
					width:'70',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Сумма вал. Дт',
					width:'82',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'43',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'73',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'184',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'56',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Валюта Кт',
					width:'66',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Сумма вал. Кт',
					width:'80',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'194',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'194',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'194',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Сумма упр.',
					width:'49',
					dataIndex:'СуммаУпр',
					flex:1,
				},
				{
					text:'Сумма сценария',
					width:'86',
					dataIndex:'СуммаСценария',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'37',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'84',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'227',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаЗаписейРегистров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Сценарий',
					},
					{
						name:'СчетДт',
					},
					{
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СчетКт',
					},
					{
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'СуммаУпр',
					},
					{
						name:'СуммаСценария',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'СтатьяОборотов',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			items:
			[
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Переключить активность',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
				{
					title:'Подсказка',
					items:
					[
		{
			xtype: 'label',
			name: 'ПодсказкаРегистрыСведений2',
			text: 'На этой закладке отображаются движения по регистрам бухгалтерии. 
Чтобы настроить список регистров нажмите кнопку "Настройка состава регистров".',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаНастройкаСоставаРегистровБухгалтерии',
			text: 'Настройка состава регистров бухгалтерии',
			style: 'position:absolute;left:6px;top:47px;width:606px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Регистры накопления',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					title:'Подсказка',
					items:
					[
		{
			xtype: 'label',
			name: 'ПодсказкаРегистрыСведений1',
			text: 'На этой закладке отображаются движения по регистрам накопления. 
Чтобы настроить список регистров нажмите кнопку "Настройка состава регистров".',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаНастройкаСоставаРегистровНакопления',
			text: 'Настройка состава регистров накопления',
			style: 'position:absolute;left:6px;top:47px;width:606px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Регистры сведений',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					title:'Подсказка',
					items:
					[
		{
			xtype: 'label',
			name: 'ПодсказкаРегистрыСведений',
			text: 'На этой закладке отображаются движения по регистрам сведений. 
Чтобы настроить список регистров нажмите кнопку "Настройка состава регистров".',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаНастройкаСоставаРегистровСведений',
			text: 'Настройка состава регистров сведений',
			style: 'position:absolute;left:6px;top:47px;width:606px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
	]
});