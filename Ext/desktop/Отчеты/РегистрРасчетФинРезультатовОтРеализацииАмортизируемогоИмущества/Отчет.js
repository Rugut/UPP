Ext.define('Отчеты.РегистрРасчетФинРезультатовОтРеализацииАмортизируемогоИмущества.Отчет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:605px;height:433px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистр-расчет фин. результатов от реализации амортизируемого имущества',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:286px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:365px;top:33px;width:231px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:605px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Заголовок',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:64px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:173px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:51px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'по:',
			style: 'position:absolute;left:149px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:33px;width:19px;height:19px;',
		},
	]
});