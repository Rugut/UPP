Ext.define('Документы.УстановкаДиапазоновБазовыхЦен.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 364,width: 506,
	iconCls: 'bogus',
	title: 'Установки диапазонов базовых цен',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:101px;top:33px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:244px;top:33px;width:254px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:101px;top:57px;width:397px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:105px;width:490px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьТекущейШкалой',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:128px;width:490px;height:156px;',
			height: 156,width: 490,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВерхняяГраница',
				},
				{
					text:'ПредставлениеИнтервала',
				},
				{
					text:'Цена',
				},
				{
					text:'Валюта',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:506px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:339px;width:506px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:101px;top:312px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:101px;top:288px;width:397px;height:19px;',
		},
	]
});