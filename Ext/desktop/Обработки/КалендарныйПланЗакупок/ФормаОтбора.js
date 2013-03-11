Ext.define('Обработки.КалендарныйПланЗакупок.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	height: 319,width: 652,
	iconCls: 'bogus',
	title: 'Отбор',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:636px;height:276px;',
			height: 276,width: 636,
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
			style: 'position:absolute;left:382px;top:56px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеДатаПотребности',
			style: 'position:absolute;left:382px;top:106px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеДатаПотребностиНач',
			style: 'position:absolute;left:382px;top:106px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеДатаПотребностиКон',
			style: 'position:absolute;left:508px;top:106px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеНоменклатура',
			style: 'position:absolute;left:382px;top:6px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеЗаказПоставщику',
			style: 'position:absolute;left:382px;top:81px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеНеобходимоеКоличество',
			style: 'position:absolute;left:382px;top:131px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеНеобходимоеКоличествоНач',
			style: 'position:absolute;left:382px;top:131px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеНеобходимоеКоличествоКон',
			style: 'position:absolute;left:508px;top:131px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеЗаказанноеКоличество',
			style: 'position:absolute;left:382px;top:156px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеЗаказанноеКоличествоНач',
			style: 'position:absolute;left:382px;top:156px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеЗаказанноеКоличествоКон',
			style: 'position:absolute;left:508px;top:156px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеЦенаУпрУчета',
			style: 'position:absolute;left:382px;top:181px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеЦенаУпрУчетаНач',
			style: 'position:absolute;left:382px;top:181px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеЦенаУпрУчетаКон',
			style: 'position:absolute;left:508px;top:181px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеСуммаУпрУчета',
			style: 'position:absolute;left:382px;top:206px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеСуммаУпрУчетаНач',
			style: 'position:absolute;left:382px;top:206px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеСуммаУпрУчетаКон',
			style: 'position:absolute;left:508px;top:206px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеСуммаВзаиморасчетов',
			style: 'position:absolute;left:382px;top:231px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеСуммаВзаиморасчетовНач',
			style: 'position:absolute;left:382px;top:231px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеСуммаВзаиморасчетовКон',
			style: 'position:absolute;left:508px;top:231px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеХарактеристикаНоменклатуры',
			style: 'position:absolute;left:382px;top:31px;width:246px;height:19px;',
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
			style: 'position:absolute;left:478px;top:289px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтмена',
			text: 'Отмена',
			style: 'position:absolute;left:564px;top:289px;width:80px;height:22px;',
		},
	]
});