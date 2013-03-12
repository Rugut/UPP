Ext.define('Обработки.ОбменДаннымиСЮнискан.РегистрацияНоменклатуры',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация номенклатуры в ЮНИСКАН/GS1 Russia',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:640px;height:25px;',
			items:
			[
				{
					text:'Зарегистрировать',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатураДляРегистрации',
			style: 'position:absolute;left:93px;top:8px;width:539px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:240px;top:32px;width:392px;height:415px;',
			height: 415,width: 392,
			items:
			[
				{
					title:'Параметры рег',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТорговаяМарка',
			text: 'Торговая марка:',
			style: 'position:absolute;left:0px;top:20px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТорговаяМарка',
			style: 'position:absolute;left:140px;top:20px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтличительныеСвойстваТовара',
			text: 'Наименование товара:',
			style: 'position:absolute;left:0px;top:44px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОтличительныеСвойстваТовара',
			style: 'position:absolute;left:140px;top:44px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУникальныйНомерТовара',
			text: 'Номер продукта:',
			style: 'position:absolute;left:0px;top:88px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаУникальныйНомерТовара',
			style: 'position:absolute;left:140px;top:87px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипУпаковки',
			text: 'Тип упаковки:',
			style: 'position:absolute;left:0px;top:111px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТипУпаковки',
			style: 'position:absolute;left:140px;top:111px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоВсе',
			text: 'Количество/Вес:',
			style: 'position:absolute;left:212px;top:159px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКоличествоВес',
			style: 'position:absolute;left:300px;top:159px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица измерения:',
			style: 'position:absolute;left:0px;top:159px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЕдиницаИзмерения',
			style: 'position:absolute;left:140px;top:159px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтличительныеСвойства',
			text: 'Отличительные свойства:',
			style: 'position:absolute;left:0px;top:135px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОтличительныеСвойства',
			style: 'position:absolute;left:140px;top:135px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиничнаяУпаковка',
			text: 'Ед. упаковка:',
			style: 'position:absolute;left:212px;top:183px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЕдиничнаяУпаковка',
			style: 'position:absolute;left:300px;top:183px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКОДЕАН13',
			text: 'Код EAH-13:',
			style: 'position:absolute;left:212px;top:88px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКодЕАН13',
			style: 'position:absolute;left:300px;top:88px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатРегистрации',
			text: 'Результат регистрации:',
			style: 'position:absolute;left:0px;top:207px;width:134px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ПолеВводаРезультатРегистрации',
			style: 'position:absolute;left:140px;top:207px;width:252px;height:41px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:276px;width:392px;height:139px;',
			height: 139,width: 392,
			columns:
			[
				{
					text:'Номер упаковки',
					width:'34',
				},
				{
					text:'Наименование',
					width:'156',
				},
				{
					text:'Коэффициент',
					width:'39',
				},
				{
					text:'Код EAH-14',
					width:'112',
				},
				{
					text:'Результат регистрации',
					width:'124',
				},
				{
					text:'КодРегистрации',
					width:'76',
				},
				{
					text:'УникальныйНомер',
					width:'135',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОКП',
			text: 'ОКП:',
			style: 'position:absolute;left:0px;top:183px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОКП',
			style: 'position:absolute;left:140px;top:183px;width:68px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:60px;width:224px;height:387px;',
			height: 387,width: 224,
			columns:
			[
				{
					text:'УникальныйНомер',
					width:'135',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Единица измерения',
					width:'207',
				},
				{
					text:'Характеристика',
					width:'119',
				},
				{
					text:'Код EAH-13',
					width:'103',
				},
				{
					text:'УникальныйНомерТовара',
					width:'80',
				},
				{
					text:'ТипУпаковки',
					width:'98',
				},
				{
					text:'КоличествоВес',
					width:'100',
				},
				{
					text:'МеждународнаяЕдиницаИзмерения',
					width:'100',
				},
				{
					text:'ОтличительныеСвойстваТовара',
					width:'100',
				},
				{
					text:'ДополнительныеСвойстваТовара',
					width:'100',
				},
				{
					text:'ЕдиничнаяУпаковка',
					width:'100',
				},
				{
					text:'РезультатРегистрации',
					width:'100',
				},
				{
					text:'КодРегистрации',
					width:'100',
				},
				{
					text:'КодТранспортнойУпаковки',
					width:'100',
				},
				{
					text:'НаименованиеТранспортнойУпаковки',
					width:'100',
				},
				{
					text:'КоэффициентТранспортнойУпаковки',
					width:'100',
				},
				{
					text:'ОКП',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:32px;width:224px;height:24px;',
			items:
			[
				{
					text:'Отменить выделение всех позиций для регистрации',
				},
				{
					text:'Отметить все позиции для регистрации',
				},
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:8px;width:80px;height:19px;',
		},
	]
});