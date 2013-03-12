Ext.define('Отчеты.СправкаРасчетПостоянныхИВременныхРазниц.Отчет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Постоянные и временные разницы',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:210px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:296px;top:33px;width:300px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Подписи',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				'-',
				{
					text:'Подписи',
				},
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				'-',
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Справка',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'За период:',
			style: 'position:absolute;left:8px;top:34px;width:63px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:76px;top:34px;width:123px;height:19px;',
		},
	]
});