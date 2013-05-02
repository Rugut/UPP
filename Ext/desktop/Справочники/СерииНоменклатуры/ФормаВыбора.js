Ext.define('Справочники.СерииНоменклатуры.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:708px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Серии номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:692px;height:320px;',
			height: 320,width: 692,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Номер серии',
					width:'100',
					dataIndex:'СерийныйНомер',
					flex:1,
				},
				{
					text:'Номер и дата сертификата',
					width:'160',
					dataIndex:'Сертификат',
					flex:1,
				},
				{
					text:'Срок годности',
					width:'80',
					dataIndex:'СрокГодности',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'251',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СерииНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'СерийныйНомер',
					},
					{
						name:'Сертификат',
					},
					{
						name:'СрокГодности',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:708px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});