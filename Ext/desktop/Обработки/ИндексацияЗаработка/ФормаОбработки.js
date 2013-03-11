Ext.define('Обработки.ИндексацияЗаработка.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 675,
	iconCls: 'bogus',
	title: 'Помощник повышения зарплаты',
	
	items:
	[
		{
			xtype: 'button',
			name: 'Закрыть',
			text: 'Закрыть',
			style: 'position:absolute;left:567px;top:390px;width:100px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДалее',
			text: 'Далее',
			style: 'position:absolute;left:482px;top:390px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНазад',
			text: 'Назад',
			style: 'position:absolute;left:397px;top:390px;width:80px;height:22px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:39px;width:659px;height:342px;',
			height: 342,width: 659,
			items:
			[
				{
					title:'ПерваяСтраница',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:34px;width:659px;height:143px;',
			height: 143,width: 659,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
				{
					title:'Страница2',
					items:
					[
					]
				},
				{
					title:'Страница3',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:177px;width:653px;height:164px;',
			height: 164,width: 653,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:191px;height:126px;',
			height: 126,width: 191,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДатаПовышения',
				},
				{
					text:'ДолжностныеОклады',
				},
				{
					text:'ШтатноеРасписание',
				},
				{
					text:'ТарифныеРазряды',
				},
				{
					text:'ДопТарифныеРазряды',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ИсторияПовышения',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:34px;width:659px;height:115px;',
			height: 115,width: 659,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация1',
			style: 'position:absolute;left:114px;top:6px;width:351px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:182px;width:205px;height:148px;',
			height: 148,width: 205,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДатаПовышения',
				},
				{
					text:'ДолжностныеОклады',
				},
				{
					text:'ШтатноеРасписание',
				},
				{
					text:'ТарифныеРазряды',
				},
				{
					text:'ДопТарифныеРазряды',
				},
			]
		},
					]
				},
				{
					title:'Оклады',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:34px;width:659px;height:155px;',
			height: 155,width: 659,
			items:
			[
				{
					title:'ДолжностныеОклады',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:114px;top:6px;width:351px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПовышения',
			style: 'position:absolute;left:114px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентПовышения',
			style: 'position:absolute;left:385px;top:30px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ОкладыПоРазрядам',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПовышения1',
			style: 'position:absolute;left:116px;top:14px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентПовышения1',
			style: 'position:absolute;left:387px;top:14px;width:80px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'РезультатИндексации',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:26px;width:653px;height:286px;',
			height: 286,width: 653,
			items:
			[
				{
					title:'ОкладыСотрудников',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:229px;',
			height: 229,width: 639,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'СтарыйОклад',
				},
				{
					text:'НовыйОклад',
				},
				{
					text:'ПодразделениеОрганизация',
				},
				{
					text:'Должность',
				},
				{
					text:'НомерПоказателяОклада',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:46px;top:109px;width:402px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:639px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Обновить',
				},
				{
					text:'Проверить',
				},
				{
					text:'Действие8',
				},
			]
		},
					]
				},
				{
					title:'ШтатноеРасписание',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:230px;',
			height: 230,width: 639,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ПодразделениеОрганизация',
				},
				{
					text:'Должность',
				},
				{
					text:'МесячнаяСтавка1',
				},
				{
					text:'НоваяМесячнаяСтавка1',
				},
				{
					text:'МесячнаяСтавка2',
				},
				{
					text:'НоваяМесячнаяСтавка2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:639px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:121px;top:101px;width:385px;height:26px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
			]
		},
					]
				},
				{
					title:'ТарифныеРазряды',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:230px;',
			height: 230,width: 639,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТарифныйРазряд',
				},
				{
					text:'Размер',
				},
				{
					text:'НовыйРазмер',
				},
				{
					text:'Валюта',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:565px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:113px;top:122px;width:267px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
				{
					title:'ДопТарифныеРазряды',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:230px;',
			height: 230,width: 639,
			columns:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:639px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:114px;top:94px;width:222px;height:26px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПоследняяСтраница',
					items:
					[
					]
				},
			]
		},
	]
});