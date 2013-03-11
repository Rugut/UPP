Ext.define('Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.Форма',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 780,
	iconCls: 'bogus',
	title: 'Печать раскладки номенклатуры по местам хранения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'СохранитьНастройки',
				},
				{
					text:'ВосстановитьНастройки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:379px;height:72px;',
			height: 72,width: 379,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Документ',
			style: 'position:absolute;left:211px;top:33px;width:176px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:219px;width:379px;height:96px;',
			height: 96,width: 379,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:393px;top:97px;width:379px;height:72px;',
			height: 72,width: 379,
			columns:
			[
				{
					text:'Имя',
				},
				{
					text:'НаправлениеСортировки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:195px;width:379px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:393px;top:72px;width:379px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:379px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:393px;top:195px;width:379px;height:24px;',
			items:
			[
				{
					text:'ОбновитьНастройкиПечати',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:393px;top:219px;width:379px;height:96px;',
			height: 96,width: 379,
			columns:
			[
				{
					text:'ВыводитьНаПечать',
				},
				{
					text:'Поле',
				},
				{
					text:'Псевдоним',
				},
				{
					text:'Положение',
				},
				{
					text:'Ширина',
				},
				{
					text:'Выравнивание',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СписокСкладов',
			style: 'position:absolute;left:530px;top:33px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоУровнейМестХранения',
			style: 'position:absolute;left:587px;top:338px;width:104px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:338px;width:379px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:362px;width:379px;height:55px;',
			height: 55,width: 379,
			columns:
			[
				{
					text:'Приоритет',
				},
				{
					text:'Псевдоним',
				},
			]
		},
	]
});