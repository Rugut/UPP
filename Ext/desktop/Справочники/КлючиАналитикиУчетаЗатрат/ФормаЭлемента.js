Ext.define('Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 254,width: 400,
	iconCls: 'bogus',
	title: 'Ключ аналитики учета затрат',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:141px;top:33px;width:251px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:229px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:141px;top:57px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Затрата',
			style: 'position:absolute;left:141px;top:82px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаЗатраты',
			style: 'position:absolute;left:141px;top:106px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияЗатраты',
			style: 'position:absolute;left:141px;top:130px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатрат',
			style: 'position:absolute;left:141px;top:154px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактерЗатрат',
			style: 'position:absolute;left:141px;top:178px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Качество',
			style: 'position:absolute;left:141px;top:202px;width:251px;height:19px;',
		},
	]
});