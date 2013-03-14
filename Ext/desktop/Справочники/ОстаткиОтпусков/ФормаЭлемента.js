Ext.define('Справочники.ОстаткиОтпусков.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:288px;height:324px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Остатки отпуска прошлых лет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:288px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:299px;width:288px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:8px;top:58px;width:272px;height:233px;',
			height: 233,width: 272,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Один отпуск',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаОстатков',
			text: 'Дата остатков:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстатков',
			style: 'position:absolute;left:96px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаДатаОстатков1',
			text: 'Дата, на которую вводятся остатки. С даты, следующей после даты остатков, начнется новый рабочий год. Введенные остатки будут учитываться для всех отпусков, заканчивающихся после даты остатков.',
			style: 'position:absolute;left:10px;top:25px;width:262px;height:65px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДней',
			text: 'Количество дней:',
			style: 'position:absolute;left:0px;top:96px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДней',
			style: 'position:absolute;left:96px;top:96px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ДетальныйВвод',
			text: 'Детальный ввод остатков >>',
			style: 'position:absolute;left:97px;top:212px;width:175px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:181px;top:95px;width:91px;height:21px;',
		},
					]
				},
				{
					title:'Отпуска с рабочими годами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:272px;height:111px;',
			height: 111,width: 272,
			columns:
			[
				{
					text:'Год работы',
					width:'100',
				},
				{
					text:'С',
					width:'80',
				},
				{
					text:'По',
					width:'80',
				},
				{
					text:'Количество дней',
					width:'70',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:208px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПростойВвод',
			text: '<< Простой ввод остатков',
			style: 'position:absolute;left:97px;top:212px;width:175px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаДатаОстатков2',
			text: 'В табличной части указываются остатки в разрезе рабочих лет. Введенные остатки будут учитываться для всех отпусков, заканчивающихся после даты окончания САМОГО ПОСЛЕДНЕГО рабочего года.',
			style: 'position:absolute;left:10px;top:140px;width:262px;height:66px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: '',
			style: 'position:absolute;left:8px;top:33px;width:272px;height:19px;',
		},
	]
});