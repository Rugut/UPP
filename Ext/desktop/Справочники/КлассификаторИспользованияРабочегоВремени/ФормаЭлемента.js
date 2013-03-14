Ext.define('Справочники.КлассификаторИспользованияРабочегоВремени.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:466px;height:194px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификатор использования рабочего времени',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:122px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:130px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБуквенныйКод',
			text: 'Буквенное:',
			style: 'position:absolute;left:8px;top:142px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БуквенныйКод',
			style: 'position:absolute;left:69px;top:142px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦифровойКод',
			text: 'Цифровое:',
			style: 'position:absolute;left:130px;top:142px;width:59px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦифровойКод',
			style: 'position:absolute;left:189px;top:142px;width:25px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ПолноеНаименование',
			style: 'position:absolute;left:130px;top:57px;width:220px;height:45px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:466px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:169px;width:466px;height:25px;',
			items:
			[
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
		{
			xtype: 'checkbox',
			boxLabel: 'Рабочее время',
			style: 'position:absolute;left:360px;top:33px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолноеНаименование',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:57px;width:122px;height:19px;',
		},
	]
});