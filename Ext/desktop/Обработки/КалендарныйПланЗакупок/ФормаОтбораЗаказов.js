Ext.define('Обработки.КалендарныйПланЗакупок.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 270,width: 557,
	iconCls: 'bogus',
	title: 'Отбор',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:541px;height:226px;',
			height: 226,width: 541,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеКонтрагент',
			style: 'position:absolute;left:295px;top:56px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеДатаПотребности',
			style: 'position:absolute;left:295px;top:131px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеДатаПотребностиНач',
			style: 'position:absolute;left:295px;top:131px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеДатаПотребностиКон',
			style: 'position:absolute;left:415px;top:131px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеНоменклатура',
			style: 'position:absolute;left:295px;top:6px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеЗаказПоставщику',
			style: 'position:absolute;left:295px;top:81px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеКоличествоПотребности',
			style: 'position:absolute;left:295px;top:156px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеКоличествоПотребностиНач',
			style: 'position:absolute;left:295px;top:156px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеКоличествоПотребностиКон',
			style: 'position:absolute;left:415px;top:156px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеКоличествоЗаказов',
			style: 'position:absolute;left:295px;top:181px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеКоличествоЗаказовНач',
			style: 'position:absolute;left:295px;top:181px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеКоличествоЗаказовКон',
			style: 'position:absolute;left:415px;top:181px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеХарактеристикаНоменклатуры',
			style: 'position:absolute;left:295px;top:31px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеЗаказПокупателя',
			style: 'position:absolute;left:295px;top:106px;width:238px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'ОК',
			style: 'position:absolute;left:8px;top:240px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтмена',
			text: 'Отмена',
			style: 'position:absolute;left:94px;top:240px;width:80px;height:22px;',
		},
	]
});