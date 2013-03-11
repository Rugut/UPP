Ext.define('Обработки.ПодборНоменклатуры.ВводПараметровССериямиСХарактеристиками',
	{
	extend: 'Ext.window.Window',
	height: 255,width: 394,
	iconCls: 'bogus',
	title: 'Ввод количества и цены',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:394px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:230px;width:394px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'КнопкаОКНажатие',
				},
				{
					text:'ПолучитьВес',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:378px;height:139px;',
			height: 139,width: 378,
			columns:
			[
				{
					text:'Характеристика',
				},
				{
					text:'Серия',
				},
				{
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Цена',
				},
				{
					text:'ВалютаЦены',
				},
				{
					text:'КоличествоСвободныйОстаток',
				},
				{
					text:'КоличествоОстатокОрганизации',
				},
				{
					text:'Качество',
				},
			]
		},
	]
});