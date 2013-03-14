Ext.define('Обработки.ВводПараметровВыпускаПродукции.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод параметров выпуска продукции',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:600px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура (характеристика, серия):',
			style: 'position:absolute;left:8px;top:59px;width:134px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:142px;top:59px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:307px;top:59px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:452px;top:59px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:86px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:142px;top:86px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица:',
			style: 'position:absolute;left:239px;top:86px;width:63px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:307px;top:86px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСтрокиТабличнойЧасти',
			text: 'Номер строки документа:',
			style: 'position:absolute;left:8px;top:33px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСтрокиТабличнойЧасти',
			style: 'position:absolute;left:142px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:584px;height:139px;',
			height: 139,width: 584,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид параметра',
					width:'216',
				},
				{
					text:'Значение',
					width:'186',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:584px;height:24px;',
			items:
			[
				{
					text:'Заполнить по спецификации',
				},
			]
		},
	]
});