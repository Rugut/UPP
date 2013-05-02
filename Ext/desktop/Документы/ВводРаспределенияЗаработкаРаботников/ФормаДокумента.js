Ext.define('Документы.ВводРаспределенияЗаработкаРаботников.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод распределения заработка сотрудников',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:398px;width:506px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:241px;width:592px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
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
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'По сотруднику',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:265px;width:592px;height:128px;',
			height: 128,width: 592,
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
					text:'Упр. учет',
					width:'120',
					dataIndex:'СпособОтраженияВУпрУчете',
					flex:1,
				},
				{
					text:'% доли распределения',
					width:'88',
					dataIndex:'ДоляСпособаОтражения',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводРаспределенияЗаработкаРаботников/ВыбратьПоСсылке/100'},
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
						name:'СпособОтраженияВУпрУчете',
					},
					{
						name:'ДоляСпособаОтражения',
					},
					{
						name:'Подразделение',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
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
					text:'Действие открыть свойства',
				},
				{
					text:'Действие открыть категории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:608px;height:25px;',
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
			name: 'НадписьПериод',
			text: 'Месяц:',
			style: 'position:absolute;left:438px;top:33px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:480px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:119px;width:592px;height:97px;',
			height: 97,width: 592,
			columns:
			[
				{
					text:'Таб. №',
					width:'48',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'223',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Физлицо',
					width:'100',
					dataIndex:'Физлицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводРаспределенияЗаработкаРаботников/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Физлицо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:95px;width:592px;height:24px;',
			items:
			[
				{
					text:'Списком сотрудников',
				},
			]
		},
	]
});