Ext.define('Обработки.ЗначенияПоказателейСхемМотивации.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:692px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Показатели расчета заработной платы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Плановые начисления',
				},
				'-',
				'-',
				{
					text:'Плановые начисления',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Справочник показателей',
				},
				{
					text:'Справочник показателей',
				},
				{
					text:'Действие справка',
				},
				{
					text:'Плановые удержания',
				},
				{
					text:'Плановые удержания',
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
					title:'Ежемесячные',
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
					width:'100',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Табельный №',
					width:'80',
				},
				{
					text:'Значение',
					width:'80',
				},
				{
					text:'Валюта',
					width:'45',
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
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Код',
					width:'65',
				},
				{
					text:'Подразделение',
					width:'50',
				},
				{
					text:'Подразделение',
					width:'50',
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
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:70px;height:19px;',
		},
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
					width:'350',
				},
				{
					text:'Наименование',
					width:'350',
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
					text:'',
					width:'24',
				},
				{
					text:'Наименование',
					width:'350',
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
					text:'Подразделение',
					width:'353',
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
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Заполнить по плановым начислениям (удержаниям)',
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
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Заполнить по плановым начислениям (удержаниям)',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				'-',
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
					title:'По организации',
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
					width:'90',
				},
				{
					text:'Значение',
					width:'90',
				},
				{
					text:'Валюта',
					width:'45',
				},
				{
					text:'Действует с:',
					width:'93',
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
					text:'Вывести список...',
				},
				{
					text:'Действие2',
				},
				'-',
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
					title:'Подразделения организаций',
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
					width:'350',
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
					width:'350',
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
					title:'Общие данные',
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
					width:'336',
				},
				{
					text:'Значение',
					width:'94',
				},
				{
					text:'Валюта',
					width:'70',
				},
				{
					text:'Действует с:',
					width:'91',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:662px;height:24px;',
			items:
			[
				{
					text:'Вывести список...',
				},
				'-',
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