Ext.define('Обработки.ИзменениеНастроекУчета.ВестиРеглУчетРасчетовСПерсоналомСводно',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:169px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка параметра учета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:144px;width:400px;height:25px;',
			items:
			[
				'-',
				{
					text:'Изменить настройку',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'На счетах бухгалтерского и налогового учета:
70      "Расчеты с персоналом по оплате труда"
76.04 "Расчеты по депонированным суммам"
97.01 "Расходы на оплату труда будущих периодов" ',
			style: 'position:absolute;left:8px;top:80px;width:384px;height:56px;',
		},
		{
			xtype: 'label',
			name: 'Надпись59',
			text: 'Способ ведения расчетов с персоналом в регламентированном учете:',
			style: 'position:absolute;left:8px;top:5px;width:384px;height:19px;',
		},
	]
});