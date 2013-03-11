Ext.define('Обработки.АнализНеявок.ФормаДокументов',
	{
	extend: 'Ext.window.Window',
	height: 367,width: 400,
	iconCls: 'bogus',
	title: 'Неявка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:97px;width:384px;height:237px;',
			height: 237,width: 384,
			items:
			[
				{
					title:'Отпуск',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаДополнительногоОтпуска',
			style: 'position:absolute;left:114px;top:148px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокРасчетаОсновногоОтпуска',
			style: 'position:absolute;left:114px;top:77px;width:270px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаДополнительногоОтпуска',
			style: 'position:absolute;left:114px;top:172px;width:270px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:114px;top:196px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодС',
			style: 'position:absolute;left:114px;top:101px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодПо',
			style: 'position:absolute;left:217px;top:101px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаСобытияОтпуска',
			style: 'position:absolute;left:114px;top:4px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Больничный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаНетрудоспособности',
			style: 'position:absolute;left:105px;top:68px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервичныйБольничныйЛист',
			style: 'position:absolute;left:128px;top:20px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящего',
			style: 'position:absolute;left:253px;top:44px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияВходящего',
			style: 'position:absolute;left:105px;top:44px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СлучайУходаЗаБольнымРебенком',
			style: 'position:absolute;left:105px;top:93px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаОплаты',
			style: 'position:absolute;left:183px;top:142px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейОплаты',
			style: 'position:absolute;left:296px;top:142px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаСобытия',
			style: 'position:absolute;left:183px;top:118px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:165px;width:384px;height:51px;',
			height: 51,width: 384,
			items:
			[
				{
					title:'СтраницаОбычныйРасчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатыБольничного',
			style: 'position:absolute;left:105px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособия',
			style: 'position:absolute;left:261px;top:30px;width:123px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажЛет',
			style: 'position:absolute;left:64px;top:6px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:153px;top:6px;width:32px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаОсобыйРасчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатыБольничного1',
			style: 'position:absolute;left:105px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособия1',
			style: 'position:absolute;left:261px;top:30px;width:123px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажЛет1',
			style: 'position:absolute;left:61px;top:6px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажМесяцев1',
			style: 'position:absolute;left:153px;top:6px;width:32px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Средний',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатыПоСреднему',
			style: 'position:absolute;left:94px;top:45px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:94px;top:22px;width:290px;height:19px;',
		},
					]
				},
				{
					title:'Простой',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПростоя',
			style: 'position:absolute;left:76px;top:22px;width:308px;height:19px;',
		},
					]
				},
				{
					title:'Невыход',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидНевыхода',
			style: 'position:absolute;left:84px;top:22px;width:300px;height:19px;',
		},
					]
				},
				{
					title:'УчебныйОтпуск',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплатыУчебногоОтпуска',
			style: 'position:absolute;left:94px;top:45px;width:74px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаУчебногоОтпуска',
			style: 'position:absolute;left:94px;top:22px;width:290px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКадровыйДокумент',
			style: 'position:absolute;left:76px;top:50px;width:316px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаРасчетныйДокумент',
			style: 'position:absolute;left:76px;top:72px;width:316px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:76px;top:8px;width:316px;height:19px;',
		},
	]
});