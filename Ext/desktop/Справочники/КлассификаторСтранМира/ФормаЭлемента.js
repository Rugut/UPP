Ext.define('Справочники.КлассификаторСтранМира.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 108,width: 512,
	iconCls: 'bogus',
	title: 'Классификатор стран мира',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:344px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:138px;top:33px;width:162px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:138px;top:56px;width:366px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:512px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:83px;width:512px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделите��ьОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодАльфа2',
			style: 'position:absolute;left:464px;top:33px;width:40px;height:19px;',
		},
	]
});