Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиСведенияОбИнвалидности',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:270px;height:199px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения об инвалидности',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Запись действует с:',
			style: 'position:absolute;left:8px;top:147px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:142px;top:147px;width:92px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Инвалидность, группа:',
			style: 'position:absolute;left:8px;top:8px;width:133px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Серия справки:',
			style: 'position:absolute;left:8px;top:32px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияСправки',
			style: 'position:absolute;left:142px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Номер справки:',
			style: 'position:absolute;left:8px;top:56px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправки',
			style: 'position:absolute;left:142px;top:56px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата выдачи:',
			style: 'position:absolute;left:8px;top:80px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачи',
			style: 'position:absolute;left:142px;top:80px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Срок действия справки:',
			style: 'position:absolute;left:8px;top:104px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокДействияСправки',
			style: 'position:absolute;left:142px;top:104px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:174px;width:270px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'История...',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:8px;width:66px;height:19px;',
		},
	]
});