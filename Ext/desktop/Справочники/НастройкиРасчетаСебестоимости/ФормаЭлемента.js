Ext.define('Справочники.НастройкиРасчетаСебестоимости.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:394px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка расчета себестоимости',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:83px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 281,
			height: 19,
			style: 'position:absolute;left:105px;top:83px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:8px;top:146px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:169px;width:378px;height:189px;',
			height: 189,width: 378,
			items:
			[
				{
					title:'Выполняемые действия',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:363px;height:133px;',
			height: 133,width: 363,
			columns:
			[
				{
					text:'Выполняемое действие',
					width:'333',
					dataIndex:'ВыполняемоеДействие',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиРасчетаСебестоимости/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВыполняемоеДействие',
					},
				]
			},
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
			style: 'position:absolute;left:6px;top:17px;width:156px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПредставлениеРасписания',
			text: '<Ввести расписание>',
			style: 'position:absolute;left:22px;top:41px;width:348px;height:43px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Задержка',
			style: 'position:absolute;left:218px;top:89px;width:25px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рассчитывать за прошлый месяц:',
			style: 'position:absolute;left:22px;top:89px;width:191px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗадержка',
			text: 'месяц',
			style: 'position:absolute;left:246px;top:89px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснениеЗадержка',
			text: '',
			style: 'position:absolute;left:37px;top:113px;width:333px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 281,
			height: 19,
			style: 'position:absolute;left:105px;top:57px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель',
			width: 281,
			height: 19,
			style: 'position:absolute;left:105px;top:33px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:366px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 281,
			height: 19,
			style: 'position:absolute;left:105px;top:366px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройкаЗакрытияМесяца',
			text: 'Настройка закрытия месяца:',
			style: 'position:absolute;left:8px;top:109px;width:94px;height:30px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НастройкаЗакрытияМесяца',
			width: 281,
			height: 19,
			style: 'position:absolute;left:105px;top:109px;width:281px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:105px;top:146px;width:72px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'регл. учете',
			style: 'position:absolute;left:190px;top:146px;width:80px;height:19px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:394px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:393px;width:394px;height:25px;',
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
	]
});