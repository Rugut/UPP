Ext.define('Документы.ФормированиеПотребностей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование потребностей',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:88px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:188px;top:33px;width:120px;height:19px;',
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
					text:'Действие открыть свойства',
				},
				{
					text:'Действие открыть категории',
				},
				'-',
				{
					text:'Выбирать даты периодом',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:650px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:634px;height:332px;',
			height: 332,width: 634,
			items:
			[
				{
					title:'Планы продаж',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сценарий',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Дата нач.',
					width:'80',
				},
				{
					text:'Дата кон.',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Планы производства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сценарий',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Дата нач.',
					width:'80',
				},
				{
					text:'Дата кон.',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Планы закупок',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сценарий',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Дата нач.',
					width:'80',
				},
				{
					text:'Дата кон.',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Внутренние заказы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Заказ',
					width:'220',
				},
				{
					text:'Дата потребности',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Заказы покупателей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Заказ',
					width:'220',
				},
				{
					text:'Дата потребности',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Заказы на производство',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Заказ',
					width:'220',
				},
				{
					text:'Дата потребности',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Планы посменные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Заказ',
					width:'100',
				},
				{
					text:'Дата нач.',
					width:'80',
				},
				{
					text:'Дата кон.',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Потребности',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Дата потребности',
					width:'100',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Артикул',
					width:'60',
				},
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Характеристика',
					width:'200',
				},
				{
					text:'Количество',
					width:'68',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Товар/тара',
					width:'70',
				},
				{
					text:'Конечная продукция',
					width:'200',
				},
				{
					text:'Заказ',
					width:'200',
				},
				{
					text:'Проект',
					width:'200',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Сложение источников',
			style: 'position:absolute;left:6px;top:27px;width:140px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Объединение источников',
			style: 'position:absolute;left:151px;top:27px;width:154px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразд - ние:',
			style: 'position:absolute;left:6px;top:74px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:86px;top:74px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный1',
			text: 'Ответственный:',
			style: 'position:absolute;left:317px;top:74px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:407px;top:74px;width:219px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:168px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:95px;top:398px;width:547px;height:19px;',
		},
	]
});