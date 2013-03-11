Ext.define('Обработки.ВводПараметровВыпускаПродукции.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 600,
	iconCls: 'bogus',
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
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:142px;top:86px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:307px;top:86px;width:69px;height:19px;',
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
					text:'НомерСтроки',
				},
				{
					text:'ВидПараметра',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:584px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоСпецификации',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
	]
});