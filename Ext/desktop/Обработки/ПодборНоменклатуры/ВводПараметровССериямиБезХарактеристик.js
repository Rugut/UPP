Ext.define('Обработки.ПодборНоменклатуры.ВводПараметровССериямиБезХарактеристик',
	{
	extend: 'Ext.window.Window',
	height: 182,width: 254,
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
			style: 'position:absolute;left:78px;top:58px;width:82px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:157px;width:254px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ПолучитьВес',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'КнопкаОКНажатие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Серия',
			style: 'position:absolute;left:78px;top:106px;width:166px;height:19px;',
		},
	]
});