Ext.define('Справочники.НастройкиРегламентногоФормированияДокументовПоНДС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:238px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки регламентного формирования документов по НДС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:135px;top:57px;width:257px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Родитель',
			style: 'position:absolute;left:135px;top:33px;width:257px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:81px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:135px;top:81px;width:257px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:186px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:135px;top:186px;width:257px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:384px;height:76px;',
			height: 76,width: 384,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Автоматическое выполнение',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расписание:',
			style: 'position:absolute;left:0px;top:6px;width:161px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ПредставлениеРасписания',
			text: '<Ввести расписание>',
			style: 'position:absolute;left:13px;top:27px;width:365px;height:43px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:400px;height:25px;',
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