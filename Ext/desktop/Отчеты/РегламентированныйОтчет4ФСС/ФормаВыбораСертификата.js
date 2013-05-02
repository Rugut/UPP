Ext.define('Отчеты.РегламентированныйОтчет4ФСС.ФормаВыбораСертификата',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:255px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите сертификат',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:641px;height:214px;',
			height: 214,width: 641,
			columns:
			[
				{
					text:'Представление',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Начало действия',
					width:'120',
					dataIndex:'ДействителенС',
					flex:1,
				},
				{
					text:'Конец действия',
					width:'120',
					dataIndex:'ДействителенПо',
					flex:1,
				},
				{
					text:'Отпечаток',
					width:'240',
					dataIndex:'Отпечаток',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'120',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Серийный номер',
					width:'120',
					dataIndex:'СерийныйНомер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныйОтчет4ФСС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'ДействителенС',
					},
					{
						name:'ДействителенПо',
					},
					{
						name:'Отпечаток',
					},
					{
						name:'Поставщик',
					},
					{
						name:'СерийныйНомер',
					},
				]
			},
		},
	]
});