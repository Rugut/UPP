Ext.define('Документы.ПередачаДСВвПФР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:778px;height:449px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Передача в ПФР Заявлений о добровольном вступлении в правоотношения (ДСВ-1)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:778px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:424px;width:778px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать файл на диск',
				},
				'-',
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Проверить в CheckXML',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать документ',
				},
				{
					text:'Показать файл',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:397px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:397px;width:676px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:762px;height:41px;',
			height: 41,width: 762,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:35px;',
			height: 35,width: 762,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:762px;height:74px;',
			height: 74,width: 762,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:0px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:113px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:213px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:24px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:195px;top:0px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:360px;top:24px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:447px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПФР',
			style: 'position:absolute;left:113px;top:49px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПФР',
			text: 'Наименование ПФР:',
			style: 'position:absolute;left:0px;top:49px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:360px;top:0px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:447px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:148px;width:762px;height:244px;',
			height: 244,width: 762,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:762px;height:204px;',
			height: 204,width: 762,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'111',
				},
				{
					text:'Фамилия',
					width:'80',
				},
				{
					text:'Имя',
					width:'80',
				},
				{
					text:'Отчество',
					width:'80',
				},
				{
					text:'Адрес для информирования',
					width:'160',
				},
				{
					text:'Страховой номер',
					width:'100',
				},
				{
					text:'Дата заполнения',
					width:'104',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:762px;height:24px;',
			items:
			[
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие10',
				},
			]
		},
					]
				},
			]
		},
	]
});