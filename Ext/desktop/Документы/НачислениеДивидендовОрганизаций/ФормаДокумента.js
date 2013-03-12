Ext.define('Документы.НачислениеДивидендовОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:651px;height:469px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисление дивидендов организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:336px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:423px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:505px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:523px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:417px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:417px;width:547px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:423px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:651px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Рассчитать все',
				},
				'-',
				{
					text:'Рассчитать дивиденды',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Редактировать номер',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Рассчитать НДФЛ',
				},
				{
					text:'Действие6',
				},
				{
					text:'Зарплата к выплате',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:444px;width:651px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:197px;width:635px;height:180px;',
			height: 180,width: 635,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'',
					width:'28',
				},
				{
					text:'Акционер',
					width:'220',
				},
				{
					text:'Количество акций',
					width:'100',
				},
				{
					text:'Начислено',
					width:'90',
				},
				{
					text:'Вычет по НДФЛ',
					width:'90',
				},
				{
					text:'НДФЛ',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:173px;width:635px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Подбор сотрудника',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Списком сотрудников',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДивидендыОбщаяСумма',
			style: 'position:absolute;left:111px;top:107px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВычета',
			text: 'Дивиденды полученные:',
			style: 'position:absolute;left:336px;top:107px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДивидендыПолученные',
			style: 'position:absolute;left:464px;top:107px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДивидендыНаОднуАкцию',
			style: 'position:absolute;left:111px;top:131px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:380px;width:401px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:431px;top:380px;width:83px;height:33px;',
			height: 33,width: 83,
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
			style: 'position:absolute;left:514px;top:380px;width:129px;height:33px;',
			height: 33,width: 129,
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
			style: 'position:absolute;left:0px;top:444px;width:257px;height:25px;',
			items:
			[
				{
					text:'Весь документ',
				},
				{
					text:'Расчеты нескольких акционеров',
				},
				{
					text:'Отменить исправление',
				},
				'-',
				'-',
				{
					text:'Расчеты текущего акционера',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:241px;width:635px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
			]
		},
	]
});