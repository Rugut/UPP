Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументами',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:832px;height:422px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Электронно-цифровые подписи',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:158px;width:816px;height:256px;',
			height: 256,width: 816,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Сертификат ключа подписи',
					width:'250',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Имя файла подписи',
					width:'270',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'124',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Статус проверки',
					width:'124',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Имя подписанного файла',
					width:'233',
					dataIndex:'ЭЦПИмяПодписанногоФайла',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'21',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Размер',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ЭЦПИмяПодписанногоФайла',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
				]
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПредставление',
			style: 'position:absolute;left:149px;top:97px;width:675px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТранспортноеСообщениеПредставление',
			style: 'position:absolute;left:149px;top:70px;width:675px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Транспортное сообщение:',
			style: 'position:absolute;left:8px;top:70px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Документ:',
			style: 'position:absolute;left:8px;top:97px;width:136px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:133px;width:816px;height:24px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Проверить',
				},
				'-',
				{
					text:'Показать сертификат',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Обратите внимание, что изменения, производимые в форме, вступают в силу незамедлительно. Отмена изменений невозможна.',
			style: 'position:absolute;left:8px;top:8px;width:816px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦиклОбмена',
			style: 'position:absolute;left:149px;top:43px;width:675px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Цикл обмена:',
			style: 'position:absolute;left:8px;top:43px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТранспортноеСообщение',
			style: 'position:absolute;left:149px;top:70px;width:675px;height:19px;',
		},
	]
});