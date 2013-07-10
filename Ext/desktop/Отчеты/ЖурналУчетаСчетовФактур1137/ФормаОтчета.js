Ext.define('Отчеты.ЖурналУчетаСчетовФактур1137.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:815px;height:516px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Журнал учета полученных и выставленных счетов-фактур по Постановлению № 1137',
	
	items:
	[{
		xtype: 'form',
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
			style: 'position:absolute;left:35px;top:28px;width:108px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:182px;top:28px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 228,
			height: 19,
			style: 'position:absolute;left:258px;top:28px;width:228px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:815px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Сохранить значения',
				},
				{
					text:'Восстановить значения',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});