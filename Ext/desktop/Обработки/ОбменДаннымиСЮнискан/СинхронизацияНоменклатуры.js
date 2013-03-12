Ext.define('Обработки.ОбменДаннымиСЮнискан.СинхронизацияНоменклатуры',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Информация о зарегистрированной номенклатуре (ЮНИСКАН/GS1 Russia)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:640px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Запрос',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:624px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Обновить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:37px;width:624px;height:185px;',
			height: 185,width: 624,
			columns:
			[
				{
					text:'Штрихкод',
					width:'100',
				},
				{
					text:'Статус',
					width:'150',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Единица измерения',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'НаименованиеЮнискан',
					width:'100',
				},
				{
					text:'ЕдиницаИзмеренияЮнискан',
					width:'100',
				},
				{
					text:'НаименованиеЕдиницыИзмеренияЮнискан',
					width:'100',
				},
				{
					text:'КоэффициентЮнискан',
					width:'100',
				},
				{
					text:'ПроизводительЮнискан',
					width:'100',
				},
				{
					text:'НаименованиеИБ',
					width:'100',
				},
				{
					text:'ЕдиницаИзмеренияИБ',
					width:'103',
				},
				{
					text:'НаименованеиЕдиницыИзмеренияИБ',
					width:'100',
				},
				{
					text:'КоэффициентИБ',
					width:'100',
				},
				{
					text:'ПроизводительИБ',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПроизводитель',
			text: 'Производитель:',
			style: 'position:absolute;left:8px;top:249px;width:624px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеИБ',
			text: 'Наименование (ИБ):',
			style: 'position:absolute;left:8px;top:271px;width:624px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеЮнискан',
			text: 'Наименование (Юнискан):',
			style: 'position:absolute;left:8px;top:293px;width:624px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмеренияИБ',
			text: 'Ед. измерения (ИБ):',
			style: 'position:absolute;left:8px;top:314px;width:624px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмеренияЮнискан',
			text: 'Ед. измерения (Юнискан):',
			style: 'position:absolute;left:8px;top:336px;width:290px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициентИБ',
			text: 'Коэффициент (ИБ):',
			style: 'position:absolute;left:8px;top:358px;width:290px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициентЮнискан',
			text: 'Коэффициент (Юнискан):',
			style: 'position:absolute;left:8px;top:380px;width:290px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПараметрыОбменаСЮнискан',
			text: 'Параметры обмена с БД ЮНИСКАН/GS1 Russia',
			style: 'position:absolute;left:8px;top:227px;width:624px;height:17px;',
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