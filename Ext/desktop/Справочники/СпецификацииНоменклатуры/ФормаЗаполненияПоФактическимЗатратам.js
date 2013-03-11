Ext.define('Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратам',
	{
	extend: 'Ext.window.Window',
	height: 337,width: 700,
	iconCls: 'bogus',
	title: 'Спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:312px;width:700px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
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
				},
				{
					text:'ХарактеристикаМатериала',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:112px;width:684px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Спецификация',
			style: 'position:absolute;left:89px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:465px;top:8px;width:227px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:89px;top:8px;width:80px;height:19px;',
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