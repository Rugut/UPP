Ext.define('Документы.УвольнениеИзОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:565px;height:463px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Увольнение из организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:565px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:412px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:412px;width:461px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:549px;height:220px;',
			height: 220,width: 549,
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
					width:'80',
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
					text:'Дата увольнения',
					width:'160',
					dataIndex:'ДатаУвольнения',
					flex:1,
				},
				{
					text:'Статья ТК РФ',
					width:'80',
					dataIndex:'СтатьяТКРФ',
					flex:1,
				},
				{
					text:'Основание',
					width:'80',
					dataIndex:'ОснованиеУвольнения',
					flex:1,
				},
				{
					text:'Прекращать стандартные вычеты',
					width:'115',
					dataIndex:'ПрекращатьСтандартныеВычеты',
					flex:1,
				},
				{
					text:'Компенсация',
					width:'100',
					dataIndex:'ПризнакКомпенсацииОтпуска',
					flex:1,
				},
				{
					text:'Порядок расчета',
					width:'100',
					dataIndex:'ПорядокРасчетаОтпуска',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'ДнейЧасовКомпенсацииУдержанияОтпуска',
					flex:1,
				},
				{
					text:'Рабочий год',
					width:'80',
					dataIndex:'РабочийГодС',
					flex:1,
				},
				{
					text:'по',
					width:'80',
					dataIndex:'РабочийГодПо',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УвольнениеИзОрганизаций/ВыбратьПоСсылке/100'},
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
						name:'ДатаУвольнения',
					},
					{
						name:'СтатьяТКРФ',
					},
					{
						name:'ОснованиеУвольнения',
					},
					{
						name:'ПрекращатьСтандартныеВычеты',
					},
					{
						name:'ПризнакКомпенсацииОтпуска',
					},
					{
						name:'ПорядокРасчетаОтпуска',
					},
					{
						name:'ДнейЧасовКомпенсацииУдержанияОтпуска',
					},
					{
						name:'РабочийГодС',
					},
					{
						name:'РабочийГодПо',
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
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Сотрудники',
			style: 'position:absolute;left:8px;top:108px;width:549px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:374px;width:314px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:344px;top:374px;width:83px;height:33px;',
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
			style: 'position:absolute;left:428px;top:374px;width:129px;height:33px;',
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
			style: 'position:absolute;left:8px;top:124px;width:549px;height:24px;',
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
			style: 'position:absolute;left:268px;top:438px;width:297px;height:25px;',
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
			style: 'position:absolute;left:0px;top:438px;width:268px;height:25px;',
			dock: 'bottom',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:72px;top:269px;width:389px;height:24px;',
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
	]
});