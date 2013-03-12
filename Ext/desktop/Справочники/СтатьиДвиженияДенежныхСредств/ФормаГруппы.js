Ext.define('Справочники.СтатьиДвиженияДенежныхСредств.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:450px;height:109px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа Статьи движения денежных средств',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:329px;top:33px;width:33px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:362px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:57px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:57px;width:228px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:450px;height:25px;',
			items:
			[
				{
					text:'Скопировать',
				},
				'-',
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Записать и закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:84px;width:450px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});