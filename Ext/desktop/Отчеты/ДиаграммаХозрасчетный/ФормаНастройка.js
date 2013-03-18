Ext.define('Отчеты.ДиаграммаХозрасчетный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка Диаграммы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:251px;',
			height: 251,width: 384,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:32px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:88px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:172px;top:32px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:192px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:276px;top:32px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:58px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:88px;top:58px;width:288px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Остаток на начало',
			style: 'position:absolute;left:6px;top:162px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Остаток на конец',
			style: 'position:absolute;left:6px;top:186px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Оборот',
			style: 'position:absolute;left:6px;top:210px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:134px;top:162px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:134px;top:186px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Дебет - Кредит',
			style: 'position:absolute;left:134px;top:210px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сумма',
			style: 'position:absolute;left:262px;top:162px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Количество',
			style: 'position:absolute;left:262px;top:186px;width:114px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Валютная сумма',
			style: 'position:absolute;left:262px;top:210px;width:114px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Счет',
			style: 'position:absolute;left:88px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:6px;top:82px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:88px;top:82px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'Серии и точки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:182px;height:148px;',
			height: 148,width: 182,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип',
					width:'40',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:194px;top:52px;width:182px;height:148px;',
			height: 148,width: 182,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип',
					width:'40',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:28px;width:182px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:194px;top:28px;width:182px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:104px;top:205px;width:176px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксЗначСерий',
			style: 'position:absolute;left:284px;top:205px;width:92px;height:20px;',
		},
					]
				},
				{
					title:'Диаграмма',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Серии',
			style: 'position:absolute;left:6px;top:6px;width:182px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Вид подписей:',
			style: 'position:absolute;left:6px;top:32px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:112px;top:32px;width:264px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипДиаграммы',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:6px;top:6px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:12px;top:126px;width:140px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать заголовок',
			style: 'position:absolute;left:12px;top:147px;width:140px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать легенду',
			style: 'position:absolute;left:12px;top:168px;width:140px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Раздвижение:',
			style: 'position:absolute;left:6px;top:56px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:112px;top:56px;width:264px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:184px;width:150px;height:28px;',
			height: 28,width: 150,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Плоская',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Градиент',
			style: 'position:absolute;left:6px;top:6px;width:138px;height:15px;',
		},
					]
				},
				{
					title:'Объемная',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:6px;top:6px;width:136px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:112px;top:6px;width:264px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:370px;height:195px;',
			height: 195,width: 370,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:370px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Точки',
			style: 'position:absolute;left:194px;top:6px;width:182px;height:18px;',
		},
					]
				},
			]
		},
	]
});