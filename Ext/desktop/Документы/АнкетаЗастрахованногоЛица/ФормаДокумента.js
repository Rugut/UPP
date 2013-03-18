Ext.define('Документы.АнкетаЗастрахованногоЛица.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:645px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анкета застрахованного лица (АДВ-1)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:645px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:645px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Показать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать документ',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:418px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:543px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:629px;height:48px;',
			height: 48,width: 629,
			tabBar:{hidden:true},
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
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:86px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:186px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:24px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:168px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:324px;top:24px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:409px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:324px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:409px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:122px;width:629px;height:269px;',
			height: 269,width: 629,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:629px;height:24px;',
			items:
			[
				{
					text:'Сотрудниками без страховых номеров',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:629px;height:229px;',
			height: 229,width: 629,
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
					text:'Пол',
					width:'120',
				},
				{
					text:'Дата рождения',
					width:'100',
				},
				{
					text:'Фамилия',
					width:'160',
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
					text:'Место рождения',
					width:'160',
				},
				{
					text:'Адрес регистрации',
					width:'80',
				},
				{
					text:'Адрес фактический',
					width:'80',
				},
				{
					text:'Гражданство',
					width:'80',
				},
				{
					text:'Телефоны',
					width:'80',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:629px;height:41px;',
			height: 41,width: 629,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:629px;height:35px;',
			height: 35,width: 629,
			tabBar:{hidden:true},
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
			style: 'position:absolute;left:8px;top:396px;width:629px;height:15px;',
		},
	]
});