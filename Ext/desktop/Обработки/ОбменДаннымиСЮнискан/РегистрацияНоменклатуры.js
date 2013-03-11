Ext.define('Обработки.ОбменДаннымиСЮнискан.РегистрацияНоменклатуры',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 640,
	iconCls: 'bogus',
	title: 'Регистрация номенклатуры в ЮНИСКАН/GS1 Russia',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:640px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
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
					title:'ПараметрыРег',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТорговаяМарка',
			style: 'position:absolute;left:140px;top:20px;width:252px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОтличительныеСвойстваТовара',
			style: 'position:absolute;left:140px;top:44px;width:252px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаУникальныйНомерТовара',
			style: 'position:absolute;left:140px;top:87px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТипУпаковки',
			style: 'position:absolute;left:140px;top:111px;width:252px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКоличествоВес',
			style: 'position:absolute;left:300px;top:159px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЕдиницаИзмерения',
			style: 'position:absolute;left:140px;top:159px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОтличительныеСвойства',
			style: 'position:absolute;left:140px;top:135px;width:252px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЕдиничнаяУпаковка',
			style: 'position:absolute;left:300px;top:183px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКодЕАН13',
			style: 'position:absolute;left:300px;top:88px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
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
					text:'КодТранспортнойУпаковки',
				},
				{
					text:'НаименованиеТранспортнойУпаковки',
				},
				{
					text:'КоэффициентТранспортнойУпаковки',
				},
				{
					text:'ШтрихКод',
				},
				{
					text:'РезультатРегистрации',
				},
				{
					text:'КодРегистрации',
				},
				{
					text:'УникальныйНомер',
				},
			]
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
				},
				{
					text:'ФлагВыбора',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Характеристика',
				},
				{
					text:'ШтрихКод',
				},
				{
					text:'УникальныйНомерТовара',
				},
				{
					text:'ТипУпаковки',
				},
				{
					text:'КоличествоВес',
				},
				{
					text:'МеждународнаяЕдиницаИзмерения',
				},
				{
					text:'ОтличительныеСвойстваТовара',
				},
				{
					text:'ДополнительныеСвойстваТовара',
				},
				{
					text:'ЕдиничнаяУпаковка',
				},
				{
					text:'РезультатРегистрации',
				},
				{
					text:'КодРегистрации',
				},
				{
					text:'КодТранспортнойУпаковки',
				},
				{
					text:'НаименованиеТранспортнойУпаковки',
				},
				{
					text:'КоэффициентТранспортнойУпаковки',
				},
				{
					text:'ОКП',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:32px;width:224px;height:24px;',
			items:
			[
				{
					text:'ОтменитьВыделениеВсегоДляРегистрации',
				},
				{
					text:'ОтметитьВсеДляРегистрации',
				},
				{
					text:'ОбновитьДанные',
				},
			]
		},
	]
});