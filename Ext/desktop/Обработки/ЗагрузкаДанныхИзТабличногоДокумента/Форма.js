Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:683px;height:573px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка данных из табличного документа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:548px;width:683px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:667px;height:466px;',
			height: 466,width: 667,
			items:
			[
				{
					title:'Табличный документ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:653px;height:24px;',
			items:
			[
				{
					text:'Открыть файл...',
				},
				{
					text:'Сохранить в файл...',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Контроль заполнения',
				},
				'-',
				{
					text:'Следующее примечание',
				},
				{
					text:'Предыдущее примечание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:398px;top:6px;width:214px;height:24px;',
			items:
			[
				{
					text:'Выбрать значение',
				},
			]
		},
					]
				},
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:30px;width:653px;height:24px;',
			items:
			[
				{
					text:'Восстановить настройки из файла...',
				},
				{
					text:'Сохранить настройки в файл...',
				},
				'-',
				{
					text:'Восстановить настройки...',
				},
				{
					text:'Сохранить настройки...',
				},
				'-',
				{
					text:'Перечитать ',
				},
				'-',
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				'-',
				{
					text:'События...',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:653px;height:386px;',
			height: 386,width: 653,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Представление реквизита',
					width:'103',
				},
				{
					text:'Имя реквизита',
					width:'93',
				},
				{
					text:'Может быть полем поиска',
					width:'21',
				},
				{
					text:'Поле поиска',
					width:'21',
				},
				{
					text:'Доступное описание типов',
					width:'21',
				},
				{
					text:'Описание типов',
					width:'134',
				},
				{
					text:'Режим загрузки',
					width:'55',
				},
				{
					text:'№ Колонки табличного документа',
					width:'52',
				},
				{
					text:'Значение по умолчанию',
					width:'78',
				},
				{
					text:'Выражение',
					width:'106',
				},
				{
					text:'Искать по',
					width:'115',
				},
				{
					text:'Связь по владельцу',
					width:'114',
				},
				{
					text:'Связь по типу',
					width:'96',
				},
				{
					text:'Элемент связи по типу',
					width:'106',
				},
				{
					text:'ШиринаКолонки',
					width:'87',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПерваяСтрокаДанныхТабличногоДокумента',
			text: 'Первая строка данных табличного документа:',
			style: 'position:absolute;left:6px;top:6px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПерваяСтрокаДанныхТабличногоДокумента',
			style: 'position:absolute;left:249px;top:6px;width:41px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не создавать новых элементов',
			style: 'position:absolute;left:295px;top:6px;width:191px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Замещать существующие записи',
			style: 'position:absolute;left:295px;top:6px;width:191px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:632px;height:19px;',
			height: 19,width: 632,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Загрузка в справочник',
					items:
					[
					]
				},
				{
					title:'Загрузка в табличную часть',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ссылка:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СсылкаИсточника',
			style: 'position:absolute;left:95px;top:0px;width:247px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТабличнаяЧастьИсточника',
			style: 'position:absolute;left:439px;top:0px;width:193px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид справочника:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Вид регистра:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'Загрузка в регистр сведений',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРежимЗагрузки',
			text: 'Режим загрузки:',
			style: 'position:absolute;left:8px;top:8px;width:87px;height:19px;',
		},
	]
});