Ext.define('Справочники.НастройкиВыполненияОбмена.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:508px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки выполнения обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:508px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выполнить обмен',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:508px;height:25px;',
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
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:409px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:446px;top:33px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:90px;top:33px;width:319px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:492px;height:260px;',
			height: 260,width: 492,
			items:
			[
				{
					title:'Обмен по расписанию',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание для выполнения обмена',
			style: 'position:absolute;left:6px;top:6px;width:478px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасписаниеРегламентногоЗаданияНастройки',
			text: 'Расписание регламентного задания',
			style: 'position:absolute;left:21px;top:27px;width:463px;height:39px;',
		},
		{
			xtype: 'button',
			name: 'НастройкаРегламентногоЗадания',
			text: 'Дополнительные настройки расписания ...',
			style: 'position:absolute;left:249px;top:95px;width:235px;height:24px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Динамически изменять расписание',
			style: 'position:absolute;left:21px;top:71px;width:284px;height:19px;',
		},
					]
				},
				{
					title:'Обмен по событиям',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Пользователь:',
			style: 'position:absolute;left:6px;top:26px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:93px;top:26px;width:391px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При запуске программы',
			style: 'position:absolute;left:15px;top:49px;width:148px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При завершении работы программы',
			style: 'position:absolute;left:15px;top:73px;width:212px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогПроверкиДоступности',
			style: 'position:absolute;left:168px;top:97px;width:316px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При появлении каталога',
			style: 'position:absolute;left:15px;top:97px;width:148px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыполнятьОбменПриПоявленииФайла',
			style: 'position:absolute;left:168px;top:121px;width:316px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При появлении файла',
			style: 'position:absolute;left:15px;top:121px;width:148px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииНаЗапись1',
			text: 'Элементов в транзакции при загрузке данных:',
			style: 'position:absolute;left:6px;top:26px;width:245px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииНаЗапись1',
			style: 'position:absolute;left:260px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭлементовВТранзакцииНаЧтение1',
			text: 'Элементов в транзакции при выгрузке данных:',
			style: 'position:absolute;left:6px;top:50px;width:245px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭлементовВТранзакцииНаЧтение1',
			style: 'position:absolute;left:260px;top:50px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять обмен данными под полными правами',
			style: 'position:absolute;left:6px;top:6px;width:277px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУчетнаяЗапись',
			text: 'Учетная запись:',
			style: 'position:absolute;left:16px;top:93px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗаписьОтправкиСообщенияОбОшибке',
			style: 'position:absolute;left:148px;top:93px;width:336px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресДляОтправкиСообщений',
			text: 'Адрес для отправки:',
			style: 'position:absolute;left:16px;top:116px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДляОтправкиСообщенийОбОшибке',
			style: 'position:absolute;left:148px;top:116px;width:336px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:16px;top:166px;width:468px;height:68px;',
			height: 68,width: 468,
			columns:
			[
				{
					text:'Тексты сообщений, которые не являются ошибками',
					width:'311',
					dataIndex:'ТекстСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиВыполненияОбмена/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ТекстСообщения',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:16px;top:139px;width:468px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:368px;width:492px;height:155px;',
			height: 155,width: 492,
			columns:
			[
				{
					text:'Порядок',
					width:'66',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Настройка обмена',
					width:'250',
					dataIndex:'НастройкаОбмена',
					flex:1,
				},
				{
					text:'Действие',
					width:'139',
					dataIndex:'ВыполняемоеДействие',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиВыполненияОбмена/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НастройкаОбмена',
					},
					{
						name:'ВыполняемоеДействие',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:340px;width:492px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Установить действие',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:528px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:528px;width:398px;height:19px;',
		},
	]
});