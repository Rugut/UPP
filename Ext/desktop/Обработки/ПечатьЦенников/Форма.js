Ext.define('Обработки.ПечатьЦенников.Форма',
	{
	extend: 'Ext.window.Window',
	height: 461,width: 780,
	iconCls: 'bogus',
	title: 'Обработка  Печать ценников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:210px;width:764px;height:217px;',
			height: 217,width: 764,
			columns:
			[
				{
					text:'Печать',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Цена',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:390px;top:33px;width:236px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:111px;width:764px;height:69px;',
			height: 69,width: 764,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:87px;width:764px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:186px;width:764px;height:24px;',
			items:
			[
				{
					text:'ИнвертироватьВыделение',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'ОчиститьВыделение',
				},
				{
					text:'ВыделитьВсе',
				},
				{
					text:'ЗаполнитьПоУстановленнымОтборам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПерезаполнитьЦены',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:435px;width:780px;height:25px;',
			items:
			[
				{
					text:'ДействиеПечать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:680px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:83px;top:33px;width:244px;height:19px;',
		},
	]
});