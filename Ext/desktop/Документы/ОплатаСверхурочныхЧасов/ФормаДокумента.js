Ext.define('Документы.ОплатаСверхурочныхЧасов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:688px;height:403px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оплата сверхурочных часов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:374px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:460px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:540px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:560px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:351px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:351px;width:586px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:374px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:460px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:672px;height:180px;',
			height: 180,width: 672,
			columns:
			[
				{
					text:'№',
					width:'23',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'70',
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
					text:'Подразделение
организации',
					width:'91',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Дата',
					width:'71',
					dataIndex:'ДатаВыхода',
					flex:1,
				},
				{
					text:'Часовая тарифная ставка',
					width:'96',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Часы в 1.5-ом размере',
					width:'102',
					dataIndex:'ЧасовПолуторных',
					flex:1,
				},
				{
					text:'Часы в 2-ом размере',
					width:'85',
					dataIndex:'ЧасовДвойных',
					flex:1,
				},
				{
					text:'Результат',
					width:'78',
					dataIndex:'Результат',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОплатаСверхурочныхЧасов/ВыбратьПоСсылке/100'},
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
						name:'ПодразделениеОрганизации',
					},
					{
						name:'ДатаВыхода',
					},
					{
						name:'Размер',
					},
					{
						name:'ЧасовПолуторных',
					},
					{
						name:'ЧасовДвойных',
					},
					{
						name:'Результат',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Начисления',
			style: 'position:absolute;left:8px;top:84px;width:672px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:378px;width:316px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:33px;top:312px;width:434px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:468px;top:312px;width:83px;height:33px;',
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
			style: 'position:absolute;left:551px;top:312px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:0px;width:688px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Списком сотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:378px;width:688px;height:25px;',
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
			style: 'position:absolute;left:8px;top:100px;width:672px;height:24px;',
			dock: 'top',
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
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:198px;width:672px;height:24px;',
			dock: 'top',
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
	]
});