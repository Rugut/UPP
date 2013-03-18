Ext.define('Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:337px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:312px;width:700px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:89px;top:32px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Продукция:',
			style: 'position:absolute;left:8px;top:32px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Характеристика продукции:',
			style: 'position:absolute;left:325px;top:28px;width:140px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:465px;top:32px;width:227px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:684px;height:166px;',
			height: 166,width: 684,
			columns:
			[
				{
					text:'Материал',
					width:'119',
				},
				{
					text:'Характеристика материала',
					width:'132',
				},
				{
					text:'Статья затрат',
					width:'121',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'Количество',
					width:'73',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:112px;width:684px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Спецификация:',
			style: 'position:absolute;left:8px;top:56px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Спецификация',
			style: 'position:absolute;left:89px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Подразделение:',
			style: 'position:absolute;left:325px;top:8px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:465px;top:8px;width:227px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:8px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:89px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПо',
			text: 'по:',
			style: 'position:absolute;left:179px;top:8px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:203px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:325px;top:56px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица:',
			style: 'position:absolute;left:409px;top:56px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:465px;top:56px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:290px;top:8px;width:19px;height:19px;',
		},
	]
});