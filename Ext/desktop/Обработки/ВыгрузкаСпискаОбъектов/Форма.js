Ext.define('Обработки.ВыгрузкаСпискаОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:426px;height:317px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выгрузка списка объектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:426px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:292px;width:426px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:103px;width:410px;height:181px;',
			height: 181,width: 410,
			columns:
			[
				{
					text:'',
					width:'30',
					dataIndex:'КартинкаЭлемента',
					flex:1,
				},
				{
					text:'Объект',
					width:'100',
					dataIndex:'Объект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаСпискаОбъектов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'КартинкаЭлемента',
					},
					{
						name:'Объект',
					},
				]
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаОбмена',
			style: 'position:absolute;left:100px;top:33px;width:318px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Файл данных:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:79px;width:410px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
	]
});