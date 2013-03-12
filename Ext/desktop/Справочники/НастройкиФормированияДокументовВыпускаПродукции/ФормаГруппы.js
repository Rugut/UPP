Ext.define('Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:480px;height:110px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки формирования документов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:58px;width:380px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:92px;top:33px;width:380px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:480px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Записать и закрыть',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Найти в списке',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:85px;width:480px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
				'-',
			]
		},
	]
});