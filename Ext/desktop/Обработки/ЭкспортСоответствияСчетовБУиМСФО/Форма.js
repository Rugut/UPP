Ext.define('Обработки.ЭкспортСоответствияСчетовБУиМСФО.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:421px;height:81px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Экспорт правил соответствия счетов БУ и МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:56px;width:421px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:5px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:72px;top:5px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Имя файла:',
			style: 'position:absolute;left:8px;top:29px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайла',
			style: 'position:absolute;left:72px;top:29px;width:341px;height:19px;',
		},
	]
});