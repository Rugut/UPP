Ext.define('Документы.ПереносДанных.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:402px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перенос данных',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:334px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:422px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:502px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:522px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:350px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 556,
			height: 19,
			style: 'position:absolute;left:86px;top:350px;width:556px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:634px;height:225px;',
			height: 225,width: 634,
			items:
			[
				{
					title:'Регистры сведений',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					title:'Подсказка',
					items:
					[
		{
			xtype: 'label',
			name: 'ПодсказкаРегистрыСведений',
			text: 'На этой закладке отображаются движения по регистрам сведений. \r\nЧтобы настроить список регистров нажмите кнопку "Настройка состава регистров".',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:31px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Регистры накопления',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					title:'Подсказка',
					items:
					[
		{
			xtype: 'label',
			name: 'ПодсказкаРегистрыНакопления',
			text: 'На этой закладке отображаются движения по регистрам накопления. \r\nЧтобы настроить список регистров нажмите кнопку "Настройка состава регистров".',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:31px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Регистры расчета',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					title:'Подсказка',
					items:
					[
		{
			xtype: 'label',
			name: 'ПодсказкаРегистрыРасчета',
			text: 'На этой закладке отображаются движения по регистрам расчета. \r\nЧтобы настроить список регистров нажмите кнопку "Настройка состава регистров".',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаНастройкаСоставаРегистровРасчета',
			text: 'Настройка состава регистров расчета',
			style: 'position:absolute;left:6px;top:47px;width:606px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 203,
			height: 19,
			style: 'position:absolute;left:121px;top:33px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:334px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:559px;top:312px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
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
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период регистрации:',
			style: 'position:absolute;left:8px;top:57px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 203,
			height: 19,
			style: 'position:absolute;left:121px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:312px;width:525px;height:33px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'Настройка состава регистров',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:377px;width:411px;height:25px;',
			dock: 'bottom',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:239px;height:25px;',
			dock: 'bottom',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
			]
		},
	]
});