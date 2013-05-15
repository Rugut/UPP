Ext.define('Документы.ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:475px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод распределения основного заработка сотрудников',
	
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
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:423px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:423px;width:506px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:83px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:245px;width:592px;height:24px;',
			items:
			[
				'-',
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
				{
					text:'По работнику',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:269px;width:592px;height:149px;',
			height: 149,width: 592,
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
					text:'Бух. учет',
					width:'120',
					dataIndex:'СпособОтраженияВБухучете',
					flex:1,
				},
				{
					text:'% доли распределения',
					width:'88',
					dataIndex:'ДоляСпособаОтражения',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'42',
					dataIndex:'ПодпадаетПодЕНВД',
					flex:1,
				},
				{
					text:'Счет ДТ',
					width:'110',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Субконто',
					width:'120',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто2',
					width:'100',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто3',
					width:'100',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'СпособРаспределенияЗатрат',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации/ВыбратьПоСсылке/100'},
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
						name:'СпособОтраженияВБухучете',
					},
					{
						name:'ДоляСпособаОтражения',
					},
					{
						name:'ПодпадаетПодЕНВД',
					},
					{
						name:'СчетДт',
					},
					{
						name:'Субконто1',
					},
					{
						name:'Субконто2',
					},
					{
						name:'Субконто3',
					},
					{
						name:'СпособРаспределенияЗатрат',
					},
				]
			},
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
			disabled: false,
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
			xtype: 'fieldset',
			title: 'Сотрудники организации',
			style: 'position:absolute;left:8px;top:105px;width:592px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Распределение основного заработка',
			style: 'position:absolute;left:8px;top:229px;width:592px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:592px;height:78px;',
			height: 78,width: 592,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации/ВыбратьПоСсылке/100'},
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
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			dock: 'top',
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
			style: 'position:absolute;left:0px;top:450px;width:608px;height:25px;',
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
			style: 'position:absolute;left:8px;top:121px;width:592px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Списком работников',
				},
			]
		},
	]
});