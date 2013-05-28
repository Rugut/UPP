Ext.define('Документы.ОтпускаОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:642px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отпуска организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:166px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:86px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:348px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 548,
			height: 19,
			style: 'position:absolute;left:86px;top:348px;width:548px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:626px;height:180px;',
			height: 180,width: 626,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'84',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Освобождать ставку',
					width:'76',
					dataIndex:'ОсвобождатьСтавку',
					flex:1,
				},
				{
					text:'Вид отпуска',
					width:'228',
					dataIndex:'ПричинаОтсутствия',
					flex:1,
				},
				{
					text:'C ...',
					width:'91',
					dataIndex:'ДатаС',
					flex:1,
				},
				{
					text:'По',
					width:'69',
					dataIndex:'ДатаПо',
					flex:1,
				},
				{
					text:'Дней, в т.ч. доп.',
					width:'60',
					dataIndex:'КоличествоДней',
					flex:1,
				},
				{
					text:'Напомнить',
					width:'67',
					dataIndex:'НапомнитьПоЗавершении',
					flex:1,
				},
				{
					text:'Вид дополнительного отпуска',
					width:'68',
					dataIndex:'ВидДополнительногоОтпуска',
					flex:1,
				},
				{
					text:'Начало дополнительного отпуска',
					width:'106',
					dataIndex:'ДатаНачалаДоп',
					flex:1,
				},
				{
					text:'Дней',
					width:'60',
					dataIndex:'КоличествоДнейДоп',
					flex:1,
				},
				{
					text:'Рабочий год',
					width:'70',
					dataIndex:'РабочийГодС',
					flex:1,
				},
				{
					text:'по',
					width:'70',
					dataIndex:'РабочийГодПо',
					flex:1,
				},
				{
					text:'Основание',
					width:'100',
					dataIndex:'Основание',
					flex:1,
				},
				{
					text:'Сторно',
					width:'100',
					dataIndex:'Сторно',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтпускаОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ОсвобождатьСтавку',
					},
					{
						name:'ПричинаОтсутствия',
					},
					{
						name:'ДатаС',
					},
					{
						name:'ДатаПо',
					},
					{
						name:'КоличествоДней',
					},
					{
						name:'НапомнитьПоЗавершении',
					},
					{
						name:'ВидДополнительногоОтпуска',
					},
					{
						name:'ДатаНачалаДоп',
					},
					{
						name:'КоличествоДнейДоп',
					},
					{
						name:'РабочийГодС',
					},
					{
						name:'РабочийГодПо',
					},
					{
						name:'Основание',
					},
					{
						name:'Сторно',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:326px;top:57px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:414px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Сотрудники',
			style: 'position:absolute;left:8px;top:84px;width:626px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:99px;top:216px;width:389px;height:24px;',
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
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
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
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:309px;width:391px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:421px;top:309px;width:83px;height:33px;',
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
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:505px;top:309px;width:129px;height:33px;',
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
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:642px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'Открыть начисления',
				},
				'-',
				{
					text:'Открыть свойства',
				},
				{
					text:'Открыть категории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:375px;width:374px;height:25px;',
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
			style: 'position:absolute;left:8px;top:100px;width:626px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'По графику отпусков',
				},
				'-',
				{
					text:'Списком сотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:375px;width:268px;height:25px;',
			dock: 'bottom',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
			]
		},
	]
});