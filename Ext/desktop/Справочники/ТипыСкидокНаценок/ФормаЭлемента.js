Ext.define('Справочники.ТипыСкидокНаценок.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 483,
	iconCls: 'bogus',
	title: 'Типы скидок и наценок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:483px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:483px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:61px;width:467px;height:226px;',
			height: 226,width: 467,
			items:
			[
				{
					title:'ПараметрыСкидки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:115px;top:85px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеУсловия',
			style: 'position:absolute;left:115px;top:153px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:391px;top:6px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеСкидки',
			style: 'position:absolute;left:269px;top:85px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Условие',
			style: 'position:absolute;left:115px;top:129px;width:344px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Качество',
			style: 'position:absolute;left:115px;top:61px;width:344px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСкидки',
			style: 'position:absolute;left:115px;top:6px;width:219px;height:19px;',
		},
					]
				},
				{
					title:'ВремяДействия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщееВремяНачало',
			style: 'position:absolute;left:250px;top:181px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщееВремяОкончание',
			style: 'position:absolute;left:368px;top:181px;width:91px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:453px;height:146px;',
			height: 146,width: 453,
			columns:
			[
				{
					text:'Выбран',
				},
				{
					text:'ДеньНедели',
				},
				{
					text:'ВремяНачала',
				},
				{
					text:'ВремяОкончания',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:453px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:435px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:307px;height:19px;',
		},
	]
});