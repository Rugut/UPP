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
			style: 'position:absolute;left:8px;top:33px;width:44px;height:19px;',
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
			style: 'position:absolute;left:139px;top:33px;width:16px;height:19px;',
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
			style: 'position:absolute;left:8px;top:311px;width:84px;height:19px;',
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
			style: 'position:absolute;left:8px;top:287px;width:84px;height:19px;',
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
				},
				{
					text:'Действие',
					width:'192',
				},
				{
					text:'Документ',
					width:'182',
				},
				{
					text:'Примечание',
					width:'216',
				},
			]
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
				},
				{
					text:'N',
					width:'28',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Счет Дт',
					width:'80',
				},
				{
					text:'Субконто Дт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Количество Дт',
					width:'80',
				},
				{
					text:'Валюта Дт',
					width:'80',
				},
				{
					text:'Вал. сумма Дт',
					width:'80',
				},
				{
					text:'Счет Кт',
					width:'80',
				},
				{
					text:'Субконто Кт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Количество Кт',
					width:'80',
				},
				{
					text:'Валюта Кт',
					width:'80',
				},
				{
					text:'Вал. сумма Кт',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Содержание',
					width:'80',
				},
				{
					text:'№ журнала',
					width:'80',
				},
			]
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
				},
				{
					text:'N',
					width:'28',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Счет Дт',
					width:'88',
				},
				{
					text:'Количество Дт',
					width:'88',
				},
				{
					text:'Вид учета Дт',
					width:'88',
				},
				{
					text:'Субконто Дт',
					width:'136',
				},
				{
					text:'',
					width:'136',
				},
				{
					text:'',
					width:'136',
				},
				{
					text:'Счет Кт',
					width:'95',
				},
				{
					text:'Количество Кт',
					width:'95',
				},
				{
					text:'Вид учета Кт',
					width:'95',
				},
				{
					text:'Субконто Кт',
					width:'142',
				},
				{
					text:'',
					width:'142',
				},
				{
					text:'',
					width:'142',
				},
				{
					text:'Сумма',
					width:'124',
				},
				{
					text:'Содержание',
					width:'124',
				},
				{
					text:'№ журнала',
					width:'124',
				},
			]
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
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Счет Дт',
					width:'56',
				},
				{
					text:'СубконтоДт1',
					width:'95',
				},
				{
					text:'СубконтоДт2',
					width:'95',
				},
				{
					text:'СубконтоДт3',
					width:'95',
				},
				{
					text:'Валюта',
					width:'41',
				},
				{
					text:'Вал. сумма',
					width:'93',
				},
				{
					text:'Количество',
					width:'98',
				},
				{
					text:'Счет Кт',
					width:'78',
				},
				{
					text:'СубконтоКт1',
					width:'98',
				},
				{
					text:'СубконтоКт2',
					width:'98',
				},
				{
					text:'СубконтоКт3',
					width:'98',
				},
				{
					text:'Валюта',
					width:'45',
				},
				{
					text:'Вал. сумма',
					width:'81',
				},
				{
					text:'Количество',
					width:'85',
				},
				{
					text:'Сумма',
					width:'63',
				},
				{
					text:'Содержание',
					width:'163',
				},
				{
					text:'№ж',
					width:'24',
				},
			]
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
				},
				{
					text:'Сценарий',
					width:'155',
				},
				{
					text:'Счет Дт',
					width:'57',
				},
				{
					text:'Валюта Дт',
					width:'70',
				},
				{
					text:'Сумма вал. Дт',
					width:'82',
				},
				{
					text:'Субконто Дт',
					width:'43',
				},
				{
					text:'',
					width:'73',
				},
				{
					text:'',
					width:'184',
				},
				{
					text:'Счет Кт',
					width:'56',
				},
				{
					text:'Валюта Кт',
					width:'66',
				},
				{
					text:'Сумма вал. Кт',
					width:'80',
				},
				{
					text:'Субконто Кт',
					width:'194',
				},
				{
					text:'',
					width:'194',
				},
				{
					text:'',
					width:'194',
				},
				{
					text:'Сумма упр.',
					width:'49',
				},
				{
					text:'Сумма сценария',
					width:'86',
				},
				{
					text:'Количество Дт',
					width:'37',
				},
				{
					text:'Количество Кт',
					width:'84',
				},
				{
					text:'Статья оборотов',
					width:'227',
				},
			]
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