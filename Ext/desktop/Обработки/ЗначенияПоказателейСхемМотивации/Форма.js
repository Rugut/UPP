Ext.define('Обработки.ЗначенияПоказателейСхемМотивации.Форма',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 692,
	iconCls: 'bogus',
	title: 'Показатели расчета заработной платы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПлановыеНачисления',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПлановыеНачисления',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Показатели',
				},
				{
					text:'Показатели',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'ПлановыеУдержания',
				},
				{
					text:'ПлановыеУдержания',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:676px;height:324px;',
			height: 324,width: 676,
			items:
			[
				{
					title:'ЕжемесячныеПоказатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:246px;top:111px;width:422px;height:185px;',
			height: 185,width: 422,
			columns:
			[
				{
					text:'Показатель',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Организация',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ТабельныйНомер',
				},
				{
					text:'Значение',
				},
				{
					text:'Валюта',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:662px;height:73px;',
			height: 73,width: 662,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодДействия',
			style: 'position:absolute;left:504px;top:27px;width:133px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:87px;width:234px;height:209px;',
			height: 209,width: 234,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:234px;height:185px;',
			height: 185,width: 234,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Код',
				},
				{
					text:'ТекущееПодразделениеОрганизации',
				},
				{
					text:'ТекущееПодразделениеКомпании',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:19px;',
			height: 19,width: 234,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганизацияСотрудников',
			style: 'position:absolute;left:75px;top:0px;width:159px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Подразделения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:208px;',
			height: 208,width: 234,
			columns:
			[
				{
					text:'Организация',
				},
				{
					text:'Наименование',
				},
			]
		},
					]
				},
				{
					title:'Показатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:209px;',
			height: 209,width: 234,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
					]
				},
				{
					title:'ЦФО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:209px;',
			height: 209,width: 234,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:87px;width:422px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеВывестиСписок',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'ЗаполнитьСписком',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:401px;top:192px;width:267px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеВывестиСписок',
				},
				{
					text:'ЗаполнитьСписком',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'Постоянные',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:662px;height:73px;',
			height: 73,width: 662,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганизацияПериодические',
			style: 'position:absolute;left:164px;top:26px;width:226px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:85px;width:662px;height:211px;',
			height: 211,width: 662,
			items:
			[
				{
					title:'ПоОрганизации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:240px;top:26px;width:422px;height:185px;',
			height: 185,width: 422,
			columns:
			[
				{
					text:'Показатель',
				},
				{
					text:'Значение',
				},
				{
					text:'Валюта',
				},
				{
					text:'Период',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:240px;top:1px;width:422px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'ДействиеВывестиСписок',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:211px;',
			height: 211,width: 233,
			items:
			[
				{
					title:'ПодразделенияОрганизаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:211px;',
			height: 211,width: 233,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
					]
				},
				{
					title:'Подразделения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:211px;',
			height: 211,width: 233,
			columns:
			[
				{
					text:'Наименование',
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
					title:'ОбщиеДанные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:662px;height:187px;',
			height: 187,width: 662,
			columns:
			[
				{
					text:'Показатель',
				},
				{
					text:'Значение',
				},
				{
					text:'Валюта',
				},
				{
					text:'Период',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:662px;height:24px;',
			items:
			[
				{
					text:'ДействиеВывестиСписок',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
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
		},
	]
});