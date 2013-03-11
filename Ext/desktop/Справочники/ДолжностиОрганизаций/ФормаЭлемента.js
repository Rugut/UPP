Ext.define('Справочники.ДолжностиОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 473,width: 565,
	iconCls: 'bogus',
	title: 'Должности организаций',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:477px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:342px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:565px;height:25px;',
			items:
			[
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:565px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКПДТР',
			style: 'position:absolute;left:98px;top:59px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:100px;width:549px;height:340px;',
			height: 340,width: 549,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПозицииСписка',
			style: 'position:absolute;left:140px;top:124px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОснованиеВыслугиЛет',
			style: 'position:absolute;left:140px;top:148px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияВоинскогоУчета',
			style: 'position:absolute;left:167px;top:51px;width:374px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:140px;top:295px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияСтатистическогоУчета',
			style: 'position:absolute;left:167px;top:27px;width:374px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияУчетаЗабронированных',
			style: 'position:absolute;left:167px;top:75px;width:374px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:171px;width:535px;height:98px;',
			height: 98,width: 535,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:535px;height:21px;',
			height: 21,width: 535,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:48px;width:535px;height:21px;',
			height: 21,width: 535,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:71px;width:535px;height:21px;',
			height: 21,width: 535,
			items:
			[
				{
					title:'Страница1',
					items:
					[
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
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:275px;top:25px;width:266px;height:289px;',
			height: 289,width: 266,
			columns:
			[
				{
					text:'Принадлежность',
				},
				{
					text:'Категория',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:263px;height:289px;',
			height: 289,width: 263,
			columns:
			[
				{
					text:'Свойство',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:275px;top:89px;width:266px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Категории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:89px;width:263px;height:24px;',
			items:
			[
				{
					text:'Действия',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
				{
					title:'ЕжегодныеОтпуска',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:535px;height:284px;',
			height: 284,width: 535,
			columns:
			[
				{
					text:'ВидЕжегодногоОтпуска',
				},
				{
					text:'КоличествоДнейОтпускаВГод',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:535px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:549px;height:16px;',
			height: 16,width: 549,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});