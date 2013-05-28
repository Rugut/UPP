Ext.define('Справочники.КлассификаторЕдиницИзмерения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:401px;height:136px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Элемент Классификатор единиц измерения',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:236px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 233,
			height: 19,
			style: 'position:absolute;left:160px;top:33px;width:233px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 233,
			height: 19,
			style: 'position:absolute;left:160px;top:84px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:204px;top:57px;width:32px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Краткое наименование:',
			style: 'position:absolute;left:8px;top:33px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:84px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:401px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:111px;width:401px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МеждународноеСокращение',
			width: 40,
			height: 19,
			style: 'position:absolute;left:160px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМеждународноеСокращенеие',
			text: 'Международное сокращение:',
			style: 'position:absolute;left:8px;top:57px;width:152px;height:19px;text-align:left;',
		},
	],
	dockedItems:
	[
	]
});