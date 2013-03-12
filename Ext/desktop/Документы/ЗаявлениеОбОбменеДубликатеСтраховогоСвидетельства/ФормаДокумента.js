Ext.define('Документы.ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:464px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявление об обмене, дубликате страхового свидетельства',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:439px;width:644px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				{
					text:'Показать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Программой CheckUFA',
				},
				{
					text:'OK',
				},
				{
					text:'Программой CheckXML',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:412px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:412px;width:546px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:628px;height:115px;',
			height: 115,width: 628,
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
			style: 'position:absolute;left:0px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:164px;top:0px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:182px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:82px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:322px;top:0px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:413px;top:0px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:322px;top:24px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:413px;top:24px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:189px;width:628px;height:197px;',
			height: 197,width: 628,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:21px;width:628px;height:176px;',
			height: 176,width: 628,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:614px;height:25px;',
			items:
			[
				{
					text:'Действие13',
				},
				{
					text:'Действие12',
				},
				'-',
				'-',
				'-',
				{
					text:'Заполнить заявления',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие10',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:614px;height:125px;',
			height: 125,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'220',
				},
				{
					text:'Дата получения свидетельства',
					width:'180',
				},
				{
					text:'Отметка о представлении сведений',
					width:'188',
				},
			]
		},
					]
				},
				{
					title:'Данные, указанные в свидетельстве',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:614px;height:125px;',
			height: 125,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Физическое лицо',
					width:'235',
				},
				{
					text:'Пол',
					width:'45',
				},
				{
					text:'Дата рождения',
					width:'90',
				},
				{
					text:'№ свидетельства',
					width:'100',
				},
				{
					text:'Фамилия',
					width:'130',
				},
				{
					text:'Имя',
					width:'60',
				},
				{
					text:'Отчество',
					width:'70',
				},
				{
					text:'Место рождения',
					width:'150',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:614px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
			]
		},
					]
				},
				{
					title:'Изменившиеся данные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:614px;height:125px;',
			height: 125,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Физическое лицо',
					width:'135',
				},
				{
					text:'Пол',
					width:'45',
				},
				{
					text:'Дата рождения',
					width:'90',
				},
				{
					text:'Фамилия',
					width:'60',
				},
				{
					text:'Имя',
					width:'60',
				},
				{
					text:'Отчество',
					width:'60',
				},
				{
					text:'Отменено',
					width:'60',
				},
				{
					text:'Место рождения',
					width:'120',
				},
				{
					text:'Отменено',
					width:'60',
				},
				{
					text:'Адрес регистрации',
					width:'90',
				},
				{
					text:'Адрес фактический',
					width:'90',
				},
				{
					text:'Гражданство',
					width:'80',
				},
				{
					text:'Телефоны',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:614px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
			]
		},
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
			style: 'position:absolute;left:8px;top:33px;width:628px;height:41px;',
			height: 41,width: 628,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:628px;height:35px;',
			height: 35,width: 628,
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
			xtype: 'checkbox',
			boxLabel: 'Заменять букву "ё"',
			style: 'position:absolute;left:8px;top:394px;width:614px;height:15px;',
		},
	]
});