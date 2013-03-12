Ext.define('Документы.ДепонированиеОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:502px;height:374px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Депонирование организаций',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:322px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:322px;width:396px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:502px;height:25px;',
			items:
			[
				{
					text:'Редактировать номер',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:349px;width:502px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:486px;height:209px;',
			height: 209,width: 486,
			items:
			[
				{
					title:'Неполученная зарплата',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:467px;height:24px;',
			items:
			[
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Платежными ведомостями',
				},
				{
					text:'Обновить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:467px;height:159px;',
			height: 159,width: 467,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Ведомость',
					width:'220',
				},
				{
					text:'Сумма к депонированию',
					width:'140',
				},
			]
		},
					]
				},
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:467px;height:177px;',
			height: 177,width: 467,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'220',
				},
				{
					text:'Сумма',
					width:'120',
				},
			]
		},
					]
				},
				{
					title:'Счета затрат на компенсацию за задержку зарплаты',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетЗатрат',
			text: 'Счет учета (БУ):',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходов',
			style: 'position:absolute;left:90px;top:6px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:31px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто1',
			style: 'position:absolute;left:90px;top:31px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:56px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто2',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:81px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто3',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтразить',
			text: 'Отразить в:',
			style: 'position:absolute;left:347px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:414px;top:33px;width:80px;height:19px;',
		},
	]
});