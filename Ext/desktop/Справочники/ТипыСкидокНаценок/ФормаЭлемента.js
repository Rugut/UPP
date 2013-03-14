Ext.define('Справочники.ТипыСкидокНаценок.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:483px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
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
					title:'Параметры скидки',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПроцент',
			text: 'Процент:',
			style: 'position:absolute;left:6px;top:85px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:115px;top:85px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗначениеУсловия',
			text: 'Значение условия:',
			style: 'position:absolute;left:6px;top:153px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеУсловия',
			style: 'position:absolute;left:115px;top:153px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:345px;top:6px;width:41px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:391px;top:6px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничение',
			text: 'Ограничение:',
			style: 'position:absolute;left:191px;top:85px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеСкидки',
			style: 'position:absolute;left:269px;top:85px;width:65px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУсловие',
			text: 'Условие:',
			style: 'position:absolute;left:6px;top:128px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Условие',
			style: 'position:absolute;left:115px;top:129px;width:344px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаУсловия',
			text: '<валюта не выбрана>',
			style: 'position:absolute;left:348px;top:153px;width:111px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКачество',
			text: 'Качество:',
			style: 'position:absolute;left:6px;top:61px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Качество',
			style: 'position:absolute;left:115px;top:61px;width:344px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для всей номенклатуры',
			style: 'position:absolute;left:6px;top:36px;width:144px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для всех получателей',
			style: 'position:absolute;left:188px;top:36px;width:131px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По дням недели',
			style: 'position:absolute;left:359px;top:36px;width:100px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСкидки',
			text: 'Вид скидки:',
			style: 'position:absolute;left:6px;top:6px;width:99px;height:19px;',
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
					title:'Время действия',
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
					text:'',
					width:'21',
				},
				{
					text:'День недели',
					width:'202',
				},
				{
					text:'Начало',
					width:'68',
				},
				{
					text:'Окончание',
					width:'68',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:453px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:407px;top:33px;width:23px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:435px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:307px;height:19px;',
		},
	]
});