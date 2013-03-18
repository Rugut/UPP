Ext.define('Справочники.ДокументыУдостоверяющиеЛичность.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:322px;height:133px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документы, удостоверяющие личность',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодИМНС',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:94px;top:81px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПФР',
			text: 'Код ПФР:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПФР',
			style: 'position:absolute;left:94px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:322px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:108px;width:322px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
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
	]
});