Ext.define('Обработки.ОбменДаннымиСЮнискан.СинхронизацияНоменклатуры',
	{
	extend: 'Ext.window.Window',
	height: 430,width: 640,
	iconCls: 'bogus',
	title: 'Информация о зарегистрированной номенклатуре (ЮНИСКАН/GS1 Russia)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:640px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:624px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:37px;width:624px;height:185px;',
			height: 185,width: 624,
			columns:
			[
				{
					text:'ШтрихКод',
				},
				{
					text:'Регистрация',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ОписаниеОшибки',
				},
				{
					text:'НаименованиеЮнискан',
				},
				{
					text:'ЕдиницаИзмеренияЮнискан',
				},
				{
					text:'НаименованиеЕдиницыИзмеренияЮнискан',
				},
				{
					text:'КоэффициентЮнискан',
				},
				{
					text:'ПроизводительЮнискан',
				},
				{
					text:'НаименованиеИБ',
				},
				{
					text:'ЕдиницаИзмеренияИБ',
				},
				{
					text:'НаименованеиЕдиницыИзмеренияИБ',
				},
				{
					text:'КоэффициентИБ',
				},
				{
					text:'ПроизводительИБ',
				},
			]
		},
		{
			xtype: 'button',
			name: 'СоздатьНоменклатуру',
			text: 'Создать номенклатуру',
			style: 'position:absolute;left:304px;top:358px;width:155px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьНоменклатуру',
			text: 'Обновить номенклатуру',
			style: 'position:absolute;left:304px;top:380px;width:155px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'СоздатьЕдиницуИзмерения',
			text: 'Создать единицу измерения',
			style: 'position:absolute;left:464px;top:358px;width:168px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьЕдиницуИзмерения',
			text: 'Обновить единицу измерения',
			style: 'position:absolute;left:464px;top:380px;width:168px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ПодборНоменклатуры',
			text: 'Подобрать номенклатуру',
			style: 'position:absolute;left:304px;top:336px;width:155px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ПодборЕдиницыИзмерения',
			text: 'Подобрать единицу измерения',
			style: 'position:absolute;left:464px;top:336px;width:168px;height:17px;',
		},
	]
});