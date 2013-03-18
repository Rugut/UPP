Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛ',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:692px;height:373px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Физические лица',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:348px;width:692px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:676px;height:332px;',
			height: 332,width: 676,
			items:
			[
				{
					title:'Вычеты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:222px;width:662px;height:82px;',
			height: 82,width: 662,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Применять вычеты в организации',
					width:'320',
				},
				{
					text:'Применение',
					width:'30',
				},
				{
					text:'Организация',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:285px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:198px;width:662px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:285px;height:129px;',
			height: 129,width: 285,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Дата',
					width:'70',
				},
				{
					text:'Код',
					width:'103',
				},
				{
					text:'Применение',
					width:'80',
				},
				{
					text:'Вычет личный',
					width:'50',
				},
				{
					text:'Основание',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:297px;top:46px;width:371px;height:129px;',
			height: 129,width: 371,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Период (с ... по)',
					width:'140',
				},
				{
					text:'С',
					width:'70',
				},
				{
					text:'по',
					width:'70',
				},
				{
					text:'Код и количество детей',
					width:'83',
				},
				{
					text:'Применение',
					width:'70',
				},
				{
					text:'Вычет на детей',
					width:'60',
				},
				{
					text:'Количество детей',
					width:'24',
				},
				{
					text:'Основание',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:297px;top:22px;width:371px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
			]
		},
					]
				},
				{
					title:'Статус налогоплательщика',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНДФЛ',
			text: 'Физическое лицо постоянно находится на территории РФ (за прошедшие 12 месяцев - более 183 дней). При исчислении НДФЛ с оплаты труда будет применяться ставка 13%',
			style: 'position:absolute;left:29px;top:200px;width:553px;height:51px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Применяется с:',
			style: 'position:absolute;left:19px;top:51px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИстория',
			text: 'История изменения ...',
			style: 'position:absolute;left:332px;top:51px;width:114px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Резидент',
			style: 'position:absolute;left:29px;top:76px;width:86px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Нерезидент',
			style: 'position:absolute;left:29px;top:100px;width:86px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Высококвалифицированный иностранный специалист',
			style: 'position:absolute;left:29px;top:124px;width:302px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОкончаниеДействияСтатусаНДФЛ',
			text: '',
			style: 'position:absolute;left:226px;top:51px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодСтатусаНалогоплательщикаПоНДФЛ',
			style: 'position:absolute;left:104px;top:51px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Статус налогоплательщика по НДФЛ задается с точностью до месяца и определяет порядок представления налоговых вычетов и ставку налога.',
			style: 'position:absolute;left:6px;top:6px;width:662px;height:31px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Участник программы по переселению соотечественников',
			style: 'position:absolute;left:29px;top:148px;width:319px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:29px;top:172px;width:553px;height:28px;',
			height: 28,width: 553,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Член экипажа судна, плавающего под Государственным флагом РФ',
			style: 'position:absolute;left:0px;top:0px;width:374px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Доходы на предыдущих местах работы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:44px;width:661px;height:261px;',
			height: 261,width: 661,
			columns:
			[
				{
					text:'Месяц',
					width:'160',
				},
				{
					text:'Сумма дохода',
					width:'120',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:404px;top:6px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:362px;top:6px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Данные по организации:',
			style: 'position:absolute;left:6px;top:6px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:140px;top:6px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});