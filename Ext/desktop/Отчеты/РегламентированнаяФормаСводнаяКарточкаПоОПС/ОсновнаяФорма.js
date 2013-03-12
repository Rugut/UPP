Ext.define('Отчеты.РегламентированнаяФормаСводнаяКарточкаПоОПС.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:651px;height:387px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сводная карточка ОПС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:651px;height:25px;',
			items:
			[
				{
					text:'Восстановить значения',
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'На принтер',
				},
				{
					text:'Новый отчет',
				},
				'-',
				'-',
				{
					text:'Новый отчет',
				},
				{
					text:'Сохранить значения',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'На принтер',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:432px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Налоговый период:',
			style: 'position:absolute;left:326px;top:33px;width:104px;height:19px;',
		},
	]
});