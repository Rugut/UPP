Ext.define('Отчеты.ВыполнениеУсловийПоДоговорамКонтрагентов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:634px;height:395px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выполнение условий по договорам контрагентов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачала',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:618px;height:49px;',
			height: 49,width: 618,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиКонтрагент',
			style: 'position:absolute;left:296px;top:0px;width:322px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСКонтрагент',
			style: 'position:absolute;left:296px;top:0px;width:159px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоКонтрагент',
			style: 'position:absolute;left:459px;top:0px;width:159px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:134px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиДоговорКонтрагента',
			style: 'position:absolute;left:296px;top:24px;width:322px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Договор контрагента:',
			style: 'position:absolute;left:0px;top:24px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСДоговорКонтрагента',
			style: 'position:absolute;left:296px;top:24px;width:159px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоДоговорКонтрагента',
			style: 'position:absolute;left:459px;top:24px;width:159px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:134px;top:24px;width:160px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:19px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:634px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});