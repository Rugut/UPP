Ext.define('Справочники.СохраненныеНастройки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:343px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вариант отчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:343px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Настройка по умолчанию',
				},
				{
					text:'Загрузить настройку из файла',
				},
				{
					text:'Сохранить настройку в файл',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:152px;width:327px;height:151px;',
			height: 151,width: 327,
			columns:
			[
				{
					text:'N',
					width:'21',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'222',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Право изменения',
					width:'63',
					dataIndex:'ПравоИзменения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СохраненныеНастройки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ПравоИзменения',
					},
				]
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:95px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеНастройки',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:6px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:30px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:95px;top:30px;width:240px;height:72px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:128px;width:327px;height:24px;',
			items:
			[
				{
					text:'Пользователя',
				},
				{
					text:'Группу пользователей',
				},
			]
		},
	]
});