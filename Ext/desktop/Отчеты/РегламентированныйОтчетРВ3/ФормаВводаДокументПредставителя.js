Ext.define('Отчеты.РегламентированныйОтчетРВ3.ФормаВводаДокументПредставителя',
	{
	extend: 'Ext.window.Window',
	height: 383,width: 361,
	iconCls: 'bogus',
	title: 'Документ, подтверждающий полномочия представителя ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:361px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:358px;width:361px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеУд',
			style: 'position:absolute;left:31px;top:62px;width:300px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияРимские',
			style: 'position:absolute;left:31px;top:113px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияРусские',
			style: 'position:absolute;left:31px;top:165px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерУд',
			style: 'position:absolute;left:31px;top:218px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:31px;top:271px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Кем',
			style: 'position:absolute;left:31px;top:324px;width:300px;height:19px;',
		},
	]
});