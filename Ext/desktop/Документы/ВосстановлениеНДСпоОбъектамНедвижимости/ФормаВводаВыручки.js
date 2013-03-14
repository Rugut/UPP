Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаВводаВыручки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:353px;height:110px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод доли выручки, не облагаемой НДС (%)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:85px;width:353px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОбщаяВыручка',
			text: 'Общая выручка:',
			style: 'position:absolute;left:8px;top:8px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщаяВыручка',
			style: 'position:absolute;left:216px;top:8px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыручкаНеОблагаемаяНДС',
			text: 'Выручка, не облагаемая НДС:',
			style: 'position:absolute;left:8px;top:33px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаНеОблагаемаяНДС',
			style: 'position:absolute;left:216px;top:33px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыручкаНеОблагаемаяНДС1',
			text: 'Доля выручки, не облагаемая НДС (%):',
			style: 'position:absolute;left:8px;top:58px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоляВыручкиНеОблагаемаяНДС',
			style: 'position:absolute;left:216px;top:58px;width:129px;height:19px;',
		},
	]
});