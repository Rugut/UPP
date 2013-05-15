Ext.define('Справочники.Резервы.ФормаНастройкиРезервовЗК',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:483px;height:249px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:467px;height:185px;',
			height: 185,width: 467,
			items:
			[
				{
					title:'Базовые начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:453px;height:129px;',
			height: 129,width: 453,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'168',
					dataIndex:'ВидРасчета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Резервы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидРасчета',
					},
				]
			},
		},
					]
				},
				{
					title:'Размеры отчислений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:453px;height:128px;',
			height: 128,width: 453,
			columns:
			[
				{
					text:'Период',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Организация',
					width:'240',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Размер (%)',
					width:'60',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Резерв',
					width:'120',
					dataIndex:'Резерв',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Резервы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Период',
					},
					{
						name:'Организация',
					},
					{
						name:'Размер',
					},
					{
						name:'Резерв',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:7px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:7px;width:384px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:483px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});