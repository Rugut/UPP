Ext.define('Отчеты.СправкаРасчетСписаниеРБП.Отчет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Списание расходов будущих периодов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:176px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:250px;top:33px;width:346px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Подписи',
				},
				{
					text:'Заголовок',
				},
				'-',
				'-',
				'-',
				{
					text:'Подписи',
				},
				'-',
				'-',
				'-',
				{
					text:'Заголовок',
				},
				{
					text:'Действие2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие',
				},
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:8px;top:33px;width:53px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:61px;top:34px;width:109px;height:19px;',
		},
	]
});