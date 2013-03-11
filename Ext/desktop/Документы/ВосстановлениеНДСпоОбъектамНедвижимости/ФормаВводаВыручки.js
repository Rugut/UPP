Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаВводаВыручки',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 353,
	iconCls: 'bogus',
	title: 'Ввод доли выручки, не облагаемой НДС (%)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:85px;width:353px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщаяВыручка',
			style: 'position:absolute;left:216px;top:8px;width:129px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаНеОблагаемаяНДС',
			style: 'position:absolute;left:216px;top:33px;width:129px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоляВыручкиНеОблагаемаяНДС',
			style: 'position:absolute;left:216px;top:58px;width:129px;height:19px;',
		},
	]
});