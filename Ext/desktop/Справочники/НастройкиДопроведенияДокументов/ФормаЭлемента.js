Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:458px;height:243px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка допроведения документов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:103px;top:33px;width:347px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:191px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:103px;top:191px;width:347px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:458px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:218px;width:458px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:442px;height:124px;',
			height: 124,width: 442,
			items:
			[
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодДопроведения',
			text: '',
			style: 'position:absolute;left:54px;top:79px;width:380px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбрабатыватьДокументы',
			text: 'Допроводить документы:',
			style: 'position:absolute;left:6px;top:8px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:6px;top:79px;width:44px;height:19px;',
		},
					]
				},
				{
					title:'Автоматическое выполнение',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание',
			style: 'position:absolute;left:6px;top:8px;width:164px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ПредставлениеРасписания',
			text: '<Ввести расписание>',
			style: 'position:absolute;left:6px;top:30px;width:428px;height:43px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По числам месяца:',
			style: 'position:absolute;left:20px;top:78px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДняНачалоЗапуска',
			style: 'position:absolute;left:148px;top:78px;width:22px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:172px;top:78px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДняКонецЗапуска',
			style: 'position:absolute;left:187px;top:78px;width:22px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьС',
			text: 'с',
			style: 'position:absolute;left:133px;top:78px;width:10px;height:19px;',
		},
					]
				},
			]
		},
	]
});