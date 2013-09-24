Ext.require(['Данные.Отчеты.ВыполнениеУсловийПоДоговорамКонтрагентов'], function () 
{
	Ext.define('Отчеты.ВыполнениеУсловийПоДоговорамКонтрагентов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:634px;height:395px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выполнение условий по договорам контрагентов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:634px;height:25px;',
			width: 634,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Сформировать',
					tooltip:'8ef786c-fd3b-4ff0-98dc-2e22f37113f',
				},
				'-',
				{
					text:'Отбор',
					tooltip:'',
				},
				'-',
				{
					text:'Заголовок',
					tooltip:'',
				},
				'-',
				{
					text:'Настройка ...',
					tooltip:'',
				},
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
					tooltip:'8ef786c-fd3b-4ff0-98dc-2e22f37113f',
				},
				'-',
				{
					text:'Отбор',
					tooltip:'',
				},
				'-',
				{
					text:'Заголовок',
					tooltip:'',
				},
				'-',
				{
					text:'Настройка ...',
					tooltip:'',
				},
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
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
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
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
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 80,
			height: 19,
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:58px;width:618px;height:49px;',
			height: 49,width: 618,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиКонтрагент',
			width: 322,
			height: 19,
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
			width: 159,
			height: 19,
			style: 'position:absolute;left:296px;top:0px;width:159px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоКонтрагент',
			width: 159,
			height: 19,
			style: 'position:absolute;left:459px;top:0px;width:159px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:134px;top:0px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиДоговорКонтрагента',
			width: 322,
			height: 19,
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
			width: 159,
			height: 19,
			style: 'position:absolute;left:296px;top:24px;width:159px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоДоговорКонтрагента',
			width: 159,
			height: 19,
			style: 'position:absolute;left:459px;top:24px;width:159px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:134px;top:24px;width:160px;height:19px;',
			width: 160,
			height: 19,
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
	}],
	dockedItems:
	[
	]
	});
});