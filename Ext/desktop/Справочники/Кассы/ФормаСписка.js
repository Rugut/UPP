Ext.define('Справочники.Кассы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:345px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Кассы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:59px;width:372px;height:278px;',
			height: 278,width: 372,
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
					text:'Валюта',
					width:'80',
					dataIndex:'ВалютаДенежныхСредств',
					flex:1,
				},
				{
					text:'Организация',
					width:'236',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Кассы/ВыбратьПоСсылке/100'},
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
						name:'ВалютаДенежныхСредств',
					},
					{
						name:'Владелец',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:59px;width:160px;height:278px;',
			height: 278,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Кассы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:33px;width:448px;height:19px;',
		},
	]
});