Ext.define('Документы.ОплатаПраздничныхИВыходныхДнейОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:653px;height:399px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оплата праздничных и выходных дней организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:427px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:507px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:527px;top:33px;width:120px;height:19px;',
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
			style: 'position:absolute;left:113px;top:33px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:347px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:347px;width:551px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:427px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:653px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Списком сотрудников',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Работавшими в праздники',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:374px;width:653px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:123px;width:639px;height:180px;',
			height: 180,width: 639,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'81',
				},
				{
					text:'Сотрудник',
					width:'173',
				},
				{
					text:'Подразделение',
					width:'133',
				},
				{
					text:'Начисление',
					width:'106',
				},
				{
					text:'Дата выхода',
					width:'74',
				},
				{
					text:'Отработано часов',
					width:'97',
				},
				{
					text:'Часовая тарифная ставка',
					width:'72',
				},
				{
					text:'Результат',
					width:'89',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:99px;width:639px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:33px;top:308px;width:401px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:434px;top:308px;width:83px;height:33px;',
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
			style: 'position:absolute;left:518px;top:308px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:374px;width:316px;height:25px;',
			items:
			[
				'-',
				{
					text:'Расчеты текущего сотрудника',
				},
				{
					text:'Отменить исправление',
				},
				{
					text:'Расчеты нескольких сотрудников',
				},
				'-',
				{
					text:'Весь документ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:11px;top:199px;width:636px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
			]
		},
	]
});