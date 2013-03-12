Ext.define('Отчеты.РегламентированнаяФормаКарточкаПоЕСН.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Индивидуальная карточка ЕСН',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
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
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:57px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:86px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				{
					text:'Сохранить значения',
				},
				{
					text:'Новый отчет',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Новый отчет',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Восстановить значения',
				},
				'-',
				'-',
				{
					text:'На принтер',
				},
				'-',
				'-',
				{
					text:'На принтер',
				},
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
			style: 'position:absolute;left:326px;top:33px;width:105px;height:19px;',
		},
	]
});