Ext.define('Отчеты.ЖурналУчетаСчетовФактур1137.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:815px;height:516px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Журнал учета полученных и выставленных счетов-фактур по Постановлению № 1137',
	
	items:
	[
		{
			xtype: 'button',
			name: 'КнопкаКварталНазад',
			text: '',
			style: 'position:absolute;left:8px;top:28px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКвартал',
			text: '<НадписьКвартал>',
			style: 'position:absolute;left:35px;top:28px;width:108px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаКварталВперед',
			text: '',
			style: 'position:absolute;left:149px;top:28px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:182px;top:28px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:258px;top:28px;width:228px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:815px;height:24px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Настройка',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Восстановить значения',
				},
				'-',
				'-',
				{
					text:'Сохранить значения',
				},
			]
		},
	]
});