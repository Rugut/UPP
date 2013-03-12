Ext.define('Документы.ОтчетМастераСмены.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:446px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет мастера смены',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:750px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				'-',
				{
					text:'Скопировать',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Записать',
				},
				{
					text:'Найти в списке',
				},
				'-',
				'-',
				{
					text:'Провести',
				},
				{
					text:'',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Отмена проведения',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Отмена проведения',
				},
				{
					text:'Записать и закрыть',
				},
				{
					text:'Справка',
				},
				{
					text:'Перечитать',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Провести',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:750px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				'-',
				'-',
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:130px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:148px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение: ',
			style: 'position:absolute;left:434px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:522px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмена',
			text: 'Смена: ',
			style: 'position:absolute;left:8px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Смена',
			style: 'position:absolute;left:48px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:434px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:522px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:734px;height:277px;',
			height: 277,width: 734,
			items:
			[
				{
					title:'Выпуск',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:720px;height:25px;',
			items:
			[
				{
					text:'&Удалить',
				},
				{
					text:'Заполнить данными предыдущей смены',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Подбор',
				},
				{
					text:'Заполнить данными вчерашней смены',
				},
				{
					text:'Из терминала сбора данных',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Изменить',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:720px;height:220px;',
			height: 220,width: 720,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Время выпуска',
					width:'88',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Параметр',
					width:'80',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Ед.',
					width:'54',
				},
				{
					text:'К.',
					width:'54',
				},
				{
					text:'Номер партии',
					width:'120',
				},
				{
					text:'Характеристика номенклатуры',
					width:'180',
				},
				{
					text:'Серия номенклатуры',
					width:'160',
				},
				{
					text:'Спецификация',
					width:'120',
				},
			]
		},
					]
				},
				{
					title:'Технологические параметры',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:720px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:720px;height:220px;',
			height: 220,width: 720,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Параметр',
					width:'120',
				},
				{
					text:'Значение',
					width:'80',
				},
			]
		},
					]
				},
				{
					title:'Расход материалов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:720px;height:25px;',
			items:
			[
				{
					text:'&Изменить',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Заполнить по нормам',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Подбор',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:720px;height:220px;',
			height: 220,width: 720,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Материал',
					width:'120',
				},
				{
					text:'Характеристика материала',
					width:'180',
				},
				{
					text:'Серия материала',
					width:'120',
				},
				{
					text:'Ед.',
					width:'54',
				},
				{
					text:'К.',
					width:'54',
				},
				{
					text:'Норма',
					width:'80',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Продукция',
					width:'120',
				},
				{
					text:'Характеристика продукции',
					width:'180',
				},
				{
					text:'Серия продукции',
					width:'120',
				},
				{
					text:'Спецификация продукции',
					width:'160',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредыдущаяСмена',
			text: 'Предыдущая смена:',
			style: 'position:absolute;left:8px;top:82px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПредыдущаяСмена',
			text: 'Первая смена 01.01.0001',
			style: 'position:absolute;left:116px;top:82px;width:626px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий: ',
			style: 'position:absolute;left:8px;top:394px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:84px;top:394px;width:658px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер: ',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:48px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПериодСмены',
			text: '01.01.0001 (00:00 - 23:59)',
			style: 'position:absolute;left:273px;top:57px;width:156px;height:19px;',
		},
	]
});