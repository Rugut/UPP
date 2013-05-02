Ext.define('Справочники.ВидыСчетчиковДляЗначенийРазрядов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:602px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Виды счетчиков для значений разрядов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:586px;height:259px;',
			height: 259,width: 586,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'63',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'253',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Размер счетчика',
					width:'92',
					dataIndex:'РазмерСчетчика',
					flex:1,
				},
				{
					text:'Начальное значение',
					width:'110',
					dataIndex:'НачальноеЗначение',
					flex:1,
				},
				{
					text:'Конечное значение',
					width:'110',
					dataIndex:'КонечноеЗначение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВидыСчетчиковДляЗначенийРазрядов/ВыбратьПоСсылке/100'},
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
						name:'РазмерСчетчика',
					},
					{
						name:'НачальноеЗначение',
					},
					{
						name:'КонечноеЗначение',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:602px;height:25px;',
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