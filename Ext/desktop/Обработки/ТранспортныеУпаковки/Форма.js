Ext.define('Обработки.ТранспортныеУпаковки.Форма',
	{
	extend: 'Ext.window.Window',
	height: 371,width: 580,
	iconCls: 'bogus',
	title: 'Печать штрихкодов транспортных упаковок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:580px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действия',
				},
				{
					text:'Справка',
				},
				{
					text:'Печать',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Документы',
			style: 'position:absolute;left:76px;top:54px;width:496px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:103px;width:564px;height:25px;',
			items:
			[
				{
					text:'ПереместитьВниз',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СортироватьПоВозрастанию',
				},
				{
					text:'Добавить',
				},
				{
					text:'СортироватьПоУбыванию',
				},
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'ЗаполнитьВсемиПозициями',
				},
				{
					text:'ЗаполнитьПозициямиИмеющимиТранспортныеУпаковки',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'ЗакончитьРедактирование',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Удалить',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:564px;height:230px;',
			height: 230,width: 564,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Обрабатывать',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'Качество',
				},
				{
					text:'Упаковка',
				},
				{
					text:'Количество',
				},
			]
		},
	]
});