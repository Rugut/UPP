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
			style: 'position:absolute;left:8px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:57px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФизЛицо',
			style: 'position:absolute;left:86px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:432px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Налоговый период:',
			style: 'position:absolute;left:326px;top:33px;width:105px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'На принтер',
				},
				'-',
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'На принтер',
				},
				'-',
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});