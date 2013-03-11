Ext.define('Документы.УстановкаЗависимостейОборотовПоСтатьям.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 656,
	iconCls: 'bogus',
	title: 'Установка зависимостей оборотов по статьям',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:212px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовВлияющая',
			style: 'position:absolute;left:428px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФО',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:428px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:428px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:172px;width:640px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:196px;width:640px;height:160px;',
			height: 160,width: 640,
			columns:
			[
				{
					text:'СтатьяОборотовЗависимая',
				},
				{
					text:'РеквизитВлияющейСтатьиДляРасчетаСуммы',
				},
				{
					text:'КоэффициентДляРасчетаСуммы',
				},
				{
					text:'РеквизитВлияющейСтатьиДляРасчетаКоличества',
				},
				{
					text:'КоэффициентДляРасчетаКоличества',
				},
				{
					text:'ЗначениеИзмененияПоПериодам',
				},
				{
					text:'ЗависимаяНоменклатура',
				},
				{
					text:'ЗависимыйКонтрагент',
				},
				{
					text:'ЗависимыйПроект',
				},
				{
					text:'ЗависимыйЦФО',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:656px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие1',
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
			style: 'position:absolute;left:94px;top:361px;width:554px;height:19px;',
		},
	]
});