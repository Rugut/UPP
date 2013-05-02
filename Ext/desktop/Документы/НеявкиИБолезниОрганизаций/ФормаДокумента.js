Ext.define('Документы.НеявкиИБолезниОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:504px;height:367px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Неявки и болезни',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:92px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:315px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:315px;width:404px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:504px;height:25px;',
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
			style: 'position:absolute;left:268px;top:342px;width:236px;height:25px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:149px;width:488px;height:120px;',
			height: 120,width: 488,
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
					width:'68',
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
					text:'C ...',
					width:'80',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Состояние',
					width:'120',
					dataIndex:'ПричинаОтсутствия',
					flex:1,
				},
				{
					text:'Освобождать/занимать ставку',
					width:'60',
					dataIndex:'ОсвобождатьСтавку',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НеявкиИБолезниОрганизаций/ВыбратьПоСсылке/100'},
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
						name:'ДатаНачала',
					},
					{
						name:'ПричинаОтсутствия',
					},
					{
						name:'ОсвобождатьСтавку',
					},
					{
						name:'Сторно',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:488px;height:24px;',
			items:
			[
				{
					text:'Списком сотрудников',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:92px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:276px;width:253px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:283px;top:276px;width:83px;height:33px;',
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
			style: 'position:absolute;left:367px;top:276px;width:129px;height:33px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:268px;height:25px;',
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
			style: 'position:absolute;left:66px;top:213px;width:389px;height:24px;',
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