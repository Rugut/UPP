Ext.define('Обработки.ПодборНоменклатуры.ВводПараметровБезСерийБезХарактеристик',
	{
	extend: 'Ext.window.Window',
	height: 157,width: 254,
	iconCls: 'bogus',
	title: 'Ввод количества и цены',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:162px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:254px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:78px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Цена',
			style: 'position:absolute;left:78px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:132px;width:254px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПолучитьВес',
				},
				{
					text:'КнопкаОКНажатие',
				},
			]
		},
	]
});