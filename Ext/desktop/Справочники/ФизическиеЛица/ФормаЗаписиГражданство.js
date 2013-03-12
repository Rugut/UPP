Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиГражданство',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:418px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Гражданство физического лица',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Запись о гражданстве действует с:',
			style: 'position:absolute;left:8px;top:365px;width:187px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:203px;top:365px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГражданинСтраны',
			style: 'position:absolute;left:145px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:418px;height:25px;',
			items:
			[
				{
					text:'История...',
				},
				'-',
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПФР',
			text: 'На физическое лицо распространяется обязательное пенсионное страхование в РФ. Таковыми являются граждане РФ, а также постоянно или временно проживающие на территории РФ иностранные граждане и лица без гражданства.',
			style: 'position:absolute;left:8px;top:144px;width:402px;height:65px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:243px;width:402px;height:100px;',
			height: 100,width: 402,
			columns:
			[
				{
					text:'Заключен трудовой договор на длительный срок',
					width:'156',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'С ...',
					width:'70',
				},
				{
					text:'по',
					width:'70',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Для временно пребывающих на территории РФ иностранных граждан и лиц без гражданства',
			style: 'position:absolute;left:8px;top:213px;width:402px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Для иностранных граждан и лиц без гражданства',
			style: 'position:absolute;left:8px;top:53px;width:402px;height:19px;',
		},
	]
});