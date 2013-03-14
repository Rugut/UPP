Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаФормула',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Пользовательское поле ""Формула""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:325px;width:640px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФормула',
			text: 'Формула:',
			style: 'position:absolute;left:252px;top:37px;width:54px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтоги',
			text: 'Итоги:',
			style: 'position:absolute;left:252px;top:128px;width:54px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:7px;width:234px;height:310px;',
			height: 310,width: 234,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:251px;top:7px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:341px;top:7px;width:291px;height:19px;',
		},
	]
});